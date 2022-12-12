import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";


export const Header = () => {
    return (
        <div className={styles.root}>
            <NavLink to="/" className={
                ({isActive}) => isActive ? styles.active : styles.btn
            }
            >Первая страница</NavLink>

            <NavLink to="/2" className={
                ({isActive}) => isActive ? styles.active : styles.btn
            }
            >Вторая страница</NavLink>
        </div>
    )
}

