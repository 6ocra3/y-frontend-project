import styles from "./styles.module.css";
import closeImage from "../../static/image/close.png";

export const FeedbackForm = () => {

    return (
        <form className={styles.form}>
            <button className={styles.form__close}>
                <img src={closeImage} alt="Закрыть" className={styles["form__close-img"]}/>
            </button>

            <h2 className={styles.form__title}>Форма для связи с нами</h2>

            <div className={styles.form__row}>
                <p className={styles.form__text}>Как вас зовут</p>
                <input type="text" className={styles.form__input} required/>
            </div>

            <div className={styles.form__row}>
                <p className={styles.form__text}>Ваш Email</p>
                <input type="email" className={styles.form__input} required/>
            </div>

            <div className={styles.form__row}>
                <p>Ваше сообщение</p>
                <textarea className={styles.form__textarea} required></textarea>
            </div>

            <p className={styles.form__agreement}>
                <input type="checkbox" className={styles.form__checkbox} required/>
                <p>Даю согласие на обработку персональных данных</p>
            </p>

            <button className={styles.form__submit}>Отправить</button>
        </form>
    )
}



