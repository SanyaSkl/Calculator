import {Textfit} from "react-textfit";
import "./Screen.css";
import React from "react";

const Screen = ({value}) => {
    return (
        <div><Textfit className="screen" mode="single" max={70}>
            {value}
        </Textfit></div>
    );
};

export  default Screen;