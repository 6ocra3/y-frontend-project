import s from './DeveloperCard.module.scss';
import github from './icons/github.svg'
import telegram from './icons/telegram.svg'

export function DeveloperCard(props) {
  return (
    <div className={s.developer}>
      <img className={s.developer__img} src={props.bio.image} alt="Фото разработчика" />
      <div className={s.developer__contacts}>
        <div className="contacts__name">{props.bio.name}</div>
        <div className="contacts__social">
          <a href={props.bio.github}><img className={s.icon} src={github} alt="Гитхаб" /></a>
          <a href={props.bio.telegram}><img className={s.icon} src={telegram} alt="Телеграм" /></a>
        </div>
      </div>
      <div className={s.developer__bio}>{props.bio.bio}</div>
    </div>
  )
}