import styles from "./styles.module.css";


export function ProjectCard({props}) {

    return (
        <div className={styles.root}>
            <img src={props.image} alt="проект" className={styles.image}/>

            <div className={styles.date}>
                {props.time} {props.date}
            </div>

            <h1 className={styles.title}>{props.title}</h1>

            <div className={styles.project}>
                {props.author} • {props.projectType}
            </div>

            <p className={styles.description}>{props.description}</p>

            <p className={styles.muted}>{props.technologyStack}</p>
        </div>
    )
}

