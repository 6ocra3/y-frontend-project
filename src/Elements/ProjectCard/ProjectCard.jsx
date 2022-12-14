import styles from "./styles.module.css";


export function ProjectCard({props}) {
    const { image, date, time, title, author, projectType, description, technologyStack, link } = props;

    return (
        <div className={styles.root} >
            <a href={link} target="_blank" rel="noreferrer"
               className={link ? "" : styles.disabled}>

                <img src={image} alt="проект" className={styles.image}/>
            </a>

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
        </div>
    )
}

