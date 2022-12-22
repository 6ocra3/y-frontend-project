import {ProjectsList} from "../../components/ProjectsList";
import styles from "./styles.module.css";
import {ProjectsListData} from "../../static/project/ProjectsList";

export const ProjectsPage = ({theme}) => {

    return (
        <div>
            <div className={theme === 'light' ? styles.projectCityImage + " " + styles.projectCityImage_light : styles.projectCityImage}></div>
            <ProjectsList theme={theme} projects={ProjectsListData}/>
        </div>
    )
}