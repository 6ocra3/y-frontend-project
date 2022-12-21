import { ProjectCard } from "../../Elements/ProjectCard";
import styles from "./styles.module.css";
import { useState, useEffect, useRef } from "react";


export const ProjectsList = ({ projects, theme }) => {
    const listRef = useRef(null)
    const cardRef = useRef(null)
    const [searchValue, setValue] = useState('');
    const [cnt, setCnt] = useState(4)
    const filteredProjects = projects.filter((project) => {
        return project.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            project.description.toLowerCase().includes(searchValue.toLowerCase())
    })
    function incBtn() {
        if ((cnt + 4) <= filteredProjects.length) {
            console.log("Первео")
            setCnt(cnt + (listRef.current.offsetWidth < 800 ? 2 : 4))
        }
        else {
            setCnt(filteredProjects.length)
        }
    }
    useEffect(() => {
        setCnt(4);
    }, [searchValue])

    return (
        <section className={styles.projects}>
            <header className={styles.projects__header}>Наши проекты:</header>
            <div className={styles.projects__search}>
                <input type="text" placeholder="Введите поисковый запрос" className={styles['projects__search-input']}
                    onChange={(event) => setValue(event.target.value)} autoComplete="off" />

            </div>

            <ul ref={listRef} className={styles.projects__list}>
                {
                    filteredProjects.slice(0, cnt).map((project) => <li key={project.id} className={styles.projects__element}><ProjectCard ref={cardRef} theme={theme} props={project} /></li>)
                }
            </ul>
            {cnt < filteredProjects.length && <button onClick={incBtn}>Увеличить количество проектов</button>}
        </section >
    )
}