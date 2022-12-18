import styles from "./styles.module.css";
import FeatherIcon from 'feather-icons-react';
import { Button } from "../../Elements/Button";
import { Loader } from '../../Elements/Loader/Loader';
import { useState } from 'react';
import axios from 'axios';
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu

export const FeedbackForm = ({ setActive }) => {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')
    const [checkbox, setCheckbox] = useState(false)

    const sendForm = async () => {
        if (name != '' && email != '' && text != '' && EMAIL_REGEXP.test(email) && checkbox) {

            setLoading(true)

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
                    setLoading(false)
                    setActive(false);
                })
                .catch(function (error) {
                    console.log(error);
                    setActive(false);
                });
        };
    };
    return (
        loading ? <Loader /> :
            <form className={styles.form} onClick={e => e.stopPropagation()} onSubmit={e => e.preventDefault()}><div className={styles.form__close}>
                <Button type="ghost" onClick={() => setActive(false)}>
                    <FeatherIcon icon="x" />
                </Button>
            </div><h2>Форма для связи с нами</h2><div className={styles.form__row}>
                    <label className={styles.form__text} htmlFor="name">Как вас зовут</label>
                    <input type="text" className={styles.form__input} value={name} onChange={(e) => setName(e.target.value)} required id="name" />
                </div><div className={styles.form__row}>
                    <label className={styles.form__text} htmlFor="email">Ваш Email</label>
                    <input type="email" className={styles.form__input} value={email} onChange={(e) => setEmail(e.target.value)} required id="email" />
                </div><label className={styles.form__row}>
                    Ваше сообщение
                    <textarea className={styles.form__textarea} value={text} onChange={(e) => setText(e.target.value)} required></textarea>
                </label><label className={styles.form__agreement}>
                    <input type="checkbox" onChange={() => setCheckbox(!checkbox)} className={styles.form__checkbox} required />

                    Даю согласие на обработку персональных данных
                </label><Button type="dark" onClick={sendForm}>Отправить</Button>
            </form>
    )
};
