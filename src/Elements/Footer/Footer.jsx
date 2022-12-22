import styles from './styles.module.css';

let newYear = new Date("2022-12-31");
let now = new Date();
let to_NY = ((newYear - now) / 1000 / 3600 / 24).toFixed(5)
export const Footer = () => {
    return <footer className={styles.footer}>
        <p><span className={styles.footer__muted}>До нового года осталось </span> {to_NY} дней </p>
    </footer>
}
