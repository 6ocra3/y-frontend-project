import {Popover} from "../../Elements/Popover";
import styles from "./styles.module.css";
import {Button} from "../../Elements/Button";
import {useState} from "react";

export const TestPage = () => {
    const [modalActive, setModalActive] = useState(false);

    return <div className={styles.main}>
        <Button type="dark" onClick={() => setModalActive(true)}>Форма обратной связи</Button>
        <Popover active={modalActive} setActive={setModalActive}/>
    </div>
}