import {ProjectsList} from "../../components/ProjectsList";
// import styles from "./styles.module.css";
import {ProjectsListData} from "../../static/project/ProjectsList";

export const ProjectsPage = () => {

    return (
        <div>
            <ProjectsList projects={ProjectsListData}/>
        </div>
    )
}