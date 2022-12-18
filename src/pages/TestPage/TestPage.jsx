import { useState } from "react";

import { DeveloperList } from '../../Elements/DeveloperList/DeveloperList';
import { Popover } from "../../Elements/Popover";
import { Feedback } from '../../components/Feedback/Feedback';
import { PromoBlock } from '../../components/PromoBlock/PromoBlock';
import { YandexMap } from '../../Elements/YandexApi/YandexMap';

import styles from "./styles.module.css";


export const TestPage = () => {
    const [modalActive, setModalActive] = useState(false);

    return <div className={styles.main}>
        <div className={styles.cityImage} />
        <PromoBlock />
        <DeveloperList />
        <Feedback setModalActive={setModalActive} />
        <Popover active={modalActive} setActive={setModalActive}/>
        <YandexMap />
        <div className={styles.leavesImage}></div>
    </div>
}