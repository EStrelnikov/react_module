import React from "react";
    import PropTypes from "prop-types";
    import Quality from "./quality";
import { useQualities } from "./../../../hooks/useQulities";

const QualitiesList = ({ qualities }) => {
    const { isLoading, getQuality } = useQualities();
    if (!isLoading) {
        return (
            <>
                {qualities.map((id) => {
                    const qual = getQuality(id);
                    return <Quality key={qual._id} {...qual} />;
                })}
            </>
        );
    } else return "Loading...";
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
