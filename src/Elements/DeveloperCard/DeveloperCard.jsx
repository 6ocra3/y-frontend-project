import s from './DeveloperCard.module.scss';
import github_icon from '../../static/icons/github.svg'
import telegram_icon from '../../static/icons/telegram.svg'

export function DeveloperCard({info}) {
  const { image, name, github, telegram, bio } = info
  return (
    <div className={s.developer}>
      <img className={s.developer__img} src={image} alt="Фото разработчика" />
      <div className={s.developer__contacts}>
        <div className="contacts__name">{name}</div>
        <div className="contacts__social">
          <a href={github}><img className={s.icon} src={github_icon} alt="Гитхаб" /></a>
          <a href={telegram}><img className={s.icon} src={telegram_icon} alt="Телеграм" /></a>
        </div>
      </div>
      <div className={s.developer__bio}>{bio}</div>
    </div>
  )
}