import {Popover} from "../../Elements/Popover";
import styles from "./styles.module.css";
import { Feedback } from '../../components/Feedback/Feedback';
import { PromoBlock } from '../../components/PromoBlock/PromoBlock';
import {useState} from "react";

import { DeveloperList } from '../../Elements/DeveloperList/DeveloperList';

export const TestPage = () => {
    const [modalActive, setModalActive] = useState(false);

    return <div className={styles.main}>
        <div className={styles.cityImage} />
        <PromoBlock />
        <DeveloperList />
        <Feedback setModalActive={setModalActive} />
        <Popover active={modalActive} setActive={setModalActive}/>
        <div className={styles.leavesImage}></div>
    </div>
}