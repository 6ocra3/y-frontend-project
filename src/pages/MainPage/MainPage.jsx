import { useState } from "react";

import { DeveloperList } from '../../Elements/DeveloperList/DeveloperList';
import { Popover } from "../../Elements/Popover";
import { Feedback } from '../../components/Feedback/Feedback';
import { PromoBlock } from '../../components/PromoBlock/PromoBlock';
import { YandexMap } from '../../Elements/YandexApi/YandexMap';
import { ThemeSwitcher } from '../../Elements/ThemeSwitcher/ThemeSwitcher';

import styles from "./styles.module.scss";


export const MainPage = ({ theme, setTheme }) => {
    const [modalActive, setModalActive] = useState(false);

    return <div className={theme == 'light' ? styles.main + " " + styles.light : styles.main}>
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
        <div className={theme == 'light' ? styles.cityImage + " " + styles.cityImage_light : styles.cityImage} />
        <PromoBlock />
        <DeveloperList theme={theme} />
        <Feedback theme={theme} setModalActive={setModalActive} />
        <Popover theme={theme} active={modalActive} setActive={setModalActive} />
        <YandexMap theme={theme} />
        <div className={styles.leavesImage}></div>
    </div>
}