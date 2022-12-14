import { DeveloperCard } from '../../Elements/DeveloperCard';
import s from './DeveloperList.module.scss';

import { devList } from '../../static/bio/devList';

export const DeveloperList = ({theme}) => {
  return (
    <section className={s.developers}>
      <h1 className={s.developers__header}>Наша команда:</h1>
      <ul className={s.developers__list}>
        {
          devList.map(developer => <li key={developer.id}><DeveloperCard theme={theme} info={developer} /></li>)
        }
      </ul>
    </section>
  )
}