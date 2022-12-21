import { useState } from "react";

import { DeveloperList } from '../../components/DeveloperList';
import { Popover } from "../../Elements/Popover";
import { Feedback } from '../../components/Feedback';
import { PromoBlock } from '../../components/PromoBlock';
import { YandexMap } from '../../components/YandexApi/YandexMap';

import styles from "./styles.module.scss";


export const TeamPage = ({theme}) => {
    const [modalActive, setModalActive] = useState(false);

    return <div className={theme === 'light' ? styles.main + " " + styles.light : styles.main}>
        <div className={theme === 'light' ? styles.cityImage + " " + styles.cityImage_light : styles.cityImage} />
        <PromoBlock />
        <DeveloperList theme={theme} />
        <Feedback theme={theme} setModalActive={setModalActive} />
        <Popover theme={theme} active={modalActive} setActive={setModalActive}/>
        <YandexMap theme={theme}/>
        <div className={styles.leavesImage}></div>
    </div>
}