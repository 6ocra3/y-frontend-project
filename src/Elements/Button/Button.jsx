import React from "react";
import s from "./Button.module.scss"
export function Button(props) {
    const { type, disable, children, onClick, modificateStyles, ...restProps } = props
    const styles = {
        "bright": s.brightBlue,
        "dark": s.darkBlue,
        "light": s.light,
        "ghost": s.ghost,
    }
    const elemStyles = modificateStyles ? modificateStyles.concat([s.button, type && styles[type]]) : [s.button, type && styles[type]]
    return (
        <button type='button' aria-label='Кнопка' className={elemStyles.join(" ")} onClick={onClick} disabled={disable || false} {...restProps}>{children}</button>
    )
}