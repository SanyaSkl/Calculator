import "./Button.css"
import React from "react";

const Button = ({className, value, onclick}) => {
    return (
        <button className={className} onClick={onclick}>
            {value}
        </button>
    );
};


export  default Button;