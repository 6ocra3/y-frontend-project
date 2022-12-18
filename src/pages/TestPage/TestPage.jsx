import {Popover} from "../../Elements/Popover";
import styles from "./styles.module.css";
import { Feedback } from '../../components/Feedback/Feedback';
import {useState} from "react";

import { DeveloperList } from '../../Elements/DeveloperList/DeveloperList';

export const TestPage = () => {
    const [modalActive, setModalActive] = useState(false);

    return <div className={styles.main}>
        <div className={styles.cityImage} />
        <DeveloperList />
        <Feedback setModalActive={setModalActive} />
        <Popover active={modalActive} setActive={setModalActive}/>
    </div>
}