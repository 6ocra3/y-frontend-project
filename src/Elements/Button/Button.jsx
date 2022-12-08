import React from "react";
import s from "./Button.module.scss"
export function Button(props) {
    const { type, disable, children, ...restProps } = props
    return (
        <button className={[s.button, type].join(" ")} disabled={disable || false} {...restProps}>{children}</button>
    )
}