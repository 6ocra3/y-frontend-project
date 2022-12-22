import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { ThemeSwitcher } from '../../Elements/ThemeSwitcher/ThemeSwitcher';


export const Header = ({theme, setTheme}) => {
    const [isOpened, setOpened] = useState(false);
    const toogleMenu = () => {
        setOpened(!isOpened);
    };
    return (
        <header className={styles.header}>
            <div className={isOpened ? styles.header__burger_open : styles.header__burger} onClick={toogleMenu}>
                <div className={theme == 'light' ? styles.burger__layer + " " + styles.burger__layer_light : styles.burger__layer}></div>
                <div className={theme == 'light' ? styles.burger__layer + " " + styles.burger__layer_light : styles.burger__layer}></div>
                <div className={theme == 'light' ? styles.burger__layer + " " + styles.burger__layer_light : styles.burger__layer}></div>
                <div className={theme == 'light' ? styles.burger__layer + " " + styles.burger__layer_light : styles.burger__layer}></div>
            </div>
            <div className={styles.header__btns}>
            {
                theme == 'light' ?
                    isOpened ? <NavLink to="/" className={
                        ({isActive}) => isActive ? styles.header__button + " " + styles.header__button_active + " " + styles.header__button_active_light:
                            styles.header__button
                    }
                    >Команда</NavLink> : <NavLink to="/" className={
                        ({isActive}) => isActive ? styles.header__button + " " + styles.header__button_active + " " + styles.hidden :
                            styles.header__button + " " + styles.hidden
                    }
                    >Команда</NavLink>
                   :
                    isOpened ? <NavLink to="/" className={
                        ({isActive}) => isActive ? styles.header__button + " " + styles.header__button_active:
                            styles.header__button
                    }
                    >Команда</NavLink> : <NavLink to="/" className={
                        ({isActive}) => isActive ? styles.header__button + " " + styles.header__button_active + " " + styles.hidden :
                            styles.header__button + " " + styles.hidden
                    }
                    >Команда</NavLink>
                }

{
                theme == 'light' ?
                    isOpened ? <NavLink to="/projects_page" className={
                        ({isActive}) => isActive ? styles.header__button + " " + styles.header__button_active + " " + styles.header__button_active_light:
                            styles.header__button
                    }
                    >Проекты</NavLink> : <NavLink to="/projects_page" className={
                        ({isActive}) => isActive ? styles.header__button + " " + styles.header__button_active + " " + styles.hidden :
                            styles.header__button + " " + styles.hidden
                    }
                    >Проекты</NavLink>
                   :
                    isOpened ? <NavLink to="/projects_page" className={
                        ({isActive}) => isActive ? styles.header__button + " " + styles.header__button_active:
                            styles.header__button
                    }
                    >Проекты</NavLink> : <NavLink to="/projects_page" className={
                        ({isActive}) => isActive ? styles.header__button + " " + styles.header__button_active + " " + styles.hidden :
                            styles.header__button + " " + styles.hidden
                    }
                    >Проекты</NavLink>
                }
                </div>
                <ThemeSwitcher theme={theme} setTheme={setTheme}/>
        </header>
    )
}

