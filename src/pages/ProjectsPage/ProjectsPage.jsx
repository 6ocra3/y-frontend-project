import {ProjectsList} from "../../components/ProjectsList";
import { ThemeSwitcher } from '../../Elements/ThemeSwitcher/ThemeSwitcher';
import styles from "./styles.module.css";
import {ProjectsListData} from "../../static/project/ProjectsList";

export const ProjectsPage = ({theme, setTheme}) => {

    return (
        <div>
            <ThemeSwitcher theme={theme} setTheme={setTheme} />
            <div className={theme == 'light' ? styles.projectCityImage + " " + styles.projectCityImage_light : styles.projectCityImage}></div>
            <ProjectsList theme={theme} projects={ProjectsListData}/>
        </div>
    )
}