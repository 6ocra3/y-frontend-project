import {ProjectsList} from "../../components/ProjectsList";
// import styles from "./styles.module.css";
import {MakarProjects} from "../../static/project/MakarProjects";
import {GrigoriyProjects} from "../../static/project/GrigoriyProjects";

export const ProjectsPage = () => {

    return (
        <div>
            <ProjectsList projects={[...MakarProjects, ...GrigoriyProjects]}/>
        </div>
    )
}