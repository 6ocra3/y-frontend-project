import styles from "./styles.module.css";


export function ProjectCard({props}) {
    const { image, date, time, title, author, projectType, description, technologyStack, link } = props;

    return (
        <a className={link ? styles.root : styles.root + " " + styles["root-disabled"]} href={link} target="_blank" rel="noreferrer">
            <img src={image} alt="проект" className={styles.image}/>

            <div className={styles.date}>
                {time} {date}
            </div>

            <h1 className={styles.title}>{title}</h1>

            <div className={styles.project}>
                {author} • {projectType}
            </div>

            <p className={styles.description}>{description}</p>

            <p className={styles.muted}>{
                technologyStack.map((el) => el !== technologyStack[technologyStack.length - 1] ? `${el}, ` : el)
            }</p>
        </a>
    )
}

