import React, { useState, useEffect } from "react";
import api from "../../../api";
import MultiSelectField from "../../common/form/multiSelectField";
import RadioField from "../../common/form/radioField";
import SelectField from "../../common/form/selectField";
import TextField from "../../common/form/textField";
import { useParams, useHistory } from "react-router-dom";
import { validator } from "../../../utils/validator";

const EditUserPage = () => {
    const history = useHistory();
    const params = useParams();
    const { userId } = params;
    const [user, setUser] = useState();
    const [qualities, setQualities] = useState([]);
    const [professions, setProfession] = useState([]);
    const [errors, setErrors] = useState({});
    const [data, setData] = useState({});
    const getQualities = (elements) => {
        const qualitiesArray = [];
        for (const elem of elements) {
            for (const quality in qualities) {
                if (elem.value === qualities[quality].value) {
                    qualitiesArray.push({
                        _id: qualities[quality].value,
                        name: qualities[quality].label,
                        color: qualities[quality].color
                    });
                }
            }
        }
        return qualitiesArray;
    };
    useEffect(() => {
        api.users.getById(userId).then((data) => setData({
            name: data.name || "",
            email: data.email || "",
            stayOn: false,
            profession: data.profession._id || "",
            sex: data.sex || "",
            qualities: handleTransformArr(data.qualities) || [],
            user: data
        }));
        api.professions.fetchAll().then((data) => {
            const professionsList = Object.keys(data).map((professionName) => ({
                label: data[professionName].name,
                value: data[professionName]._id
            }));
            setProfession(professionsList);
        });
        api.qualities.fetchAll().then((data) => {
            const qualitiesList = Object.keys(data).map((optionName) => ({
                value: data[optionName]._id,
                label: data[optionName].name,
                color: data[optionName].color
            }));
            setQualities(qualitiesList);
        });
    }, []);
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
        if (target.name === "profession") {
            const profession = professions.find((prof) => prof.value === target.value);
            setUser({ ...user, [target.name]: { _id: target.value, name: profession.label } });
        } else if (target.name === "qualities") {
            setUser({ ...user, [target.name]: getQualities(target.value) });
            } else {
                setUser({ ...user, [target.name]: target.value });
            };
    };
    const handleTransformArr = (arr) => {
        return arr.map((item) => ({
            value: item._id,
            label: item.name,
            color: item.color
        }));
    };
    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        name: {
            isRequired: {
                message: "Имя обязателено для заполнения"
            }
        },
        profession: {
            isRequired: {
                message: "Обязательно выберите вашу профессию"
            }
        }
    };
    useEffect(() => {
        validate();
        if (!user && data) {
            setUser(data.user);
        }
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    const handleSubmit = (e, id) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(user);
        api.users.update(id, user);
        history.push("/users/" + id);
    };
    if (data.name) {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 m-6 shadow p-4">
                        <form onSubmit={(e) => handleSubmit(e, user._id)}>
                            <TextField
                                label="Имя"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextField
                                label="Электронная почта"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                error={errors.email}
                            />
                            <SelectField
                                label="Профессия"
                                options={professions}
                                name="profession"
                                onChange={handleChange}
                                value={data.profession}
                                error={errors.profession}
                            />
                            <RadioField
                                options={[
                                    { name: "Male", value: "male" },
                                    { name: "Female", value: "female" },
                                    { name: "Other", value: "other" }
                                ]}
                                value={data.sex}
                                name="sex"
                                onChange={handleChange}
                                label="Пол"
                            />
                            <MultiSelectField
                                options={qualities}
                                onChange={handleChange}
                                defaultValue={data.qualities}
                                name="qualities"
                                label="Ваши качества"
                            />
                            <button disabled={!isValid} className="btn btn-secondary w-100 mx-auto">Обновить</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 p-4">
                        <h1>Получение данных...</h1>
                    </div>
                </div>
            </div>
        );
    }
};

export default EditUserPage;
