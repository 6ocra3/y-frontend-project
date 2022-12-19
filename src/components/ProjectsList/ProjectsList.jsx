import {ProjectCard} from "../../Elements/ProjectCard";
import styles from "./styles.module.css";

export const ProjectsList = ({projects}) => {

    return (
        <section className={styles.projects}>
            <ul className={styles.projects__list}>
                {
                    projects.map((project) => <li key={project.id} className={styles.projects__element}><ProjectCard props={project} /></li>)
                }
            </ul>
        </section>
    )
}
