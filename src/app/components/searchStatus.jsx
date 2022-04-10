import React from "react";

const RenderPhrase = (props) => {
    let arrNumber = String(props.length).split("");
    if (props.length === 0) {
        return (
            <span className={`badge bg-danger`}>
                {"Никто с тобой не тусанет"}
            </span>
        );
    }
    if (
        (arrNumber.length >= 1 &&
            arrNumber[arrNumber.length - 1] > 1 &&
            arrNumber[arrNumber.length - 1] < 5 &&
            arrNumber[arrNumber.length - 2] > 1) ||
        (arrNumber.length === 1 &&
            arrNumber[arrNumber.length - 1] > 1 &&
            arrNumber[arrNumber.length - 1] < 5)
    ) {
        return (
            <span className={`badge bg-primary`}>
                {props.length + " человека тусанут с тобой сегодня"}
            </span>
        );
    } else {
        return (
            <span className={`badge bg-primary`}>
                {props.length + " человек тусанет с тобой сегодня"}
            </span>
        );
    }
};

export default RenderPhrase;
