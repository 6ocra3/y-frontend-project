import React from "react";
import s from "./Button.module.scss"
export function Button(props) {
    const { type, disable, children, onClick, modificateStyles, ...restProps } = props
    const styles = {
        "bright": s.brightBlue,
        "dark": s.darkBlue,
        "ghost": s.ghost,
    }
    return (
        <button className={[s.button, type && styles[type], modificateStyles && modificateStyles].join(" ")} onClick={onClick} disabled={disable || false} {...restProps}>{children}</button>
    )
}