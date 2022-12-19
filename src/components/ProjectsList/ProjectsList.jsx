import {ProjectCard} from "../../Elements/ProjectCard";
import styles from "./styles.module.css";
import {useState} from "react";


export const ProjectsList = ({projects}) => {
    const [searchValue, setValue] = useState('');

    const filteredProjects = projects.filter((project) => {
        return project.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            project.description.toLowerCase().includes(searchValue.toLowerCase())
    })

    return (
        <section className={styles.projects}>
            <div className={styles.projects__search}>
                <input type="text" placeholder="Введите поисковый запрос" className={styles['projects__search-input']}
                       onChange={(event) => setValue(event.target.value)} autoComplete="off"/>

            </div>

            <ul className={styles.projects__list}>
                {
                    filteredProjects.map((project) => <li key={project.id} className={styles.projects__element}><ProjectCard props={project} /></li>)
                }
            </ul>
        </section>
    )
}
