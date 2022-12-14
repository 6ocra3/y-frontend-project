import s from './DeveloperCard.module.scss';

export function DeveloperCard({theme, info}) {
  const { image, name, github, telegram, bio } = info
  return (
    <section className={theme == 'light' ? s.developer + " " + s.developer_light : s.developer}>
      <img className={s.developer__img} src={image} alt="Фото разработчика" />
      <div className={s.developer__contacts}>
        <h2 className={s.contacts__name}>{name}</h2>
        <div className={s.contacts__social}>
          <a target="_blank" rel="noopener noreferrer" href={github}><div className={s.icon + " " + s.githubIcon}></div></a>
          <a target="_blank" rel="noopener noreferrer" href={telegram}><div className={s.icon + " " + s.telegramIcon}></div></a>
        </div>
      </div>
      <article className={s.developer__bio}>{bio}</article>
    </section>
  )
}