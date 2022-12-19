import {ProjectCard} from "../../Elements/ProjectCard";
import styles from "./styles.module.css";

export const ProjectsList = ({projects, theme}) => {

    return (
        <section className={styles.projects}>
            <header className={styles.projects__header}>Наши проекты:</header>
            <ul className={styles.projects__list}>
                {
                    projects.map((project) => <li key={project.id} className={styles.projects__element}><ProjectCard theme={theme} props={project} /></li>)
                }
            </ul>
        </section>
    )
}