import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";


export const Header = () => {
    return (
        <header className={styles.header}>
            <NavLink to="/" className={
                ({isActive}) => isActive ? styles.header__button + " " + styles.header__button_active :
                    styles.header__button
            }
            >Первая страница</NavLink>

            <NavLink to="/2" className={
                ({isActive}) => isActive ? styles.header__button + " " + styles.header__button_active :
                    styles.header__button
            }
            >Вторая страница</NavLink>
        </header>
    )
}

