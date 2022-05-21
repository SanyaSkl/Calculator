import "./Button.css"
import React from "react";

const Button = ({className, value, onclick}) => {
    return (
        <div><button className={className} onClick={onclick}>
            {value}
        </button></div>
    );
};


export  default Button;