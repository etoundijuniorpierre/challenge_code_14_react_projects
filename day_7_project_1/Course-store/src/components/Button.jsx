import React from "react";

export default function Button({text = "click", btnClass, icon, OnClick}) {
    return (
        <button className={`btn ${btnClass}`} onClick={OnClick}>
            {icon}
            {text}
        </button>
    );
}