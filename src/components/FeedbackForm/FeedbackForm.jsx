import styles from "./styles.module.css";
import FeatherIcon from 'feather-icons-react';
import {Button} from "../../Elements/Button";
import { useState } from 'react';
import axios from 'axios';

export const FeedbackForm = ({setActive}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')

    const sendForm = async () => {
        if (name != '' && email != '' && text != '') {

            let sendData = {
                name: '',
                email: '',
                text: '',
            };

            sendData.name = await name;
            sendData.email = await email;
            sendData.text = await text;

            axios.post('http://localhost:7700/form', sendData)
            .then(function (response) {
                console.log(response);
                setActive(false);
            })
            .catch(function (error) {
                console.log(error);
                setActive(false);
            });
        };
    };

    return (
        <form className={styles.form} onClick={e => e.stopPropagation()} onSubmit={e => e.preventDefault()}>
            <div className={styles.form__close}>
                <Button type="ghost" onClick={() => setActive(false)}>
                    <FeatherIcon icon="x"/>
                </Button>
            </div>

            <h2>Форма для связи с нами</h2>

            <div className={styles.form__row}>
                <label className={styles.form__text} htmlFor="name">Как вас зовут</label>
                <input type="text" className={styles.form__input} value={name} onChange={(e) => setName(e.target.value)} required id="name"/>
            </div>

            <div className={styles.form__row}>
                <label className={styles.form__text} htmlFor="email">Ваш Email</label>
                <input type="email" className={styles.form__input} value={email} onChange={(e) => setEmail(e.target.value)} required id="email"/>
            </div>

            <label className={styles.form__row}>
                Ваше сообщение
                <textarea className={styles.form__textarea} value={text} onChange={(e) => setText(e.target.value)} required></textarea>
            </label>


            <label className={styles.form__agreement}>
                <input type="checkbox" className={styles.form__checkbox} required/>
                Даю согласие на обработку персональных данных
            </label>

            <Button type="dark" onClick={sendForm}>Отправить</Button>
        </form>
    )
}



