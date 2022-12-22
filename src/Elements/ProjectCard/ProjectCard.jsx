import styles from "./styles.module.css";


export function ProjectCard({ props, theme }) {
    const { image, date, time, title, author, projectType, description, technologyStack, link } = props;

    return (
        <section className={theme == 'light' ? styles.root + "" + styles.root_light : styles.root} >
            <a href={link} target="_blank" rel="noopener noreferrer"
                className={link ? "" : styles.disabled}>
                    <img src={image} alt="проект" className={styles.image}/>
            </a>

            <div className={styles.date}>
                {time} {date}
            </div>

            <h2 className={styles.title}>{title}</h2>

            <div className={styles.project}>
                {author.name} • {projectType}
            </div>

            <article className={styles.description}>{description}</article>
            <ul className={styles.stackList}>
                {technologyStack.map((el) => <li className={styles.muted} key={el.id}>{el.name}</li>)}
            </ul>
        </section>
    )
}

