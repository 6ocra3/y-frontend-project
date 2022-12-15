import s from './DeveloperCard.module.scss';
import github_icon from '../../static/icons/github.svg'
import telegram_icon from '../../static/icons/telegram.svg'

export function DeveloperCard({info}) {
  const { image, name, github, telegram, bio } = info
  return (
    <section className={s.developer}>
      <img className={s.developer__img} src={image} alt="Фото разработчика" />
      <div className={s.developer__contacts}>
        <h2 className={s.contacts__name}>{name}</h2>
        <div className="contacts__social">
          <a href={github}><img className={s.icon} src={github_icon} alt="Гитхаб" /></a>
          <a href={telegram}><img className={s.icon} src={telegram_icon} alt="Телеграм" /></a>
        </div>
      </div>
      <article className={s.developer__bio}>{bio}</article>
    </section>
  )
}