import { DeveloperCard } from '../DeveloperCard/DeveloperCard';
import s from './DeveloperList.module.scss';

import { MAKAR } from '../../static/bio/makar';
import { VLAD } from '../../static/bio/vlad';
import { Grisha } from '../../static/bio/grisha';
import { DENIS } from '../../static/bio/denis';

export const DeveloperList = () => {
  return (
    <div className={s.developers}>
      <div className={s.developers__header}>Наша команда:</div>
      <div className={s.developers__list}>
        <DeveloperCard info={MAKAR} />
        <DeveloperCard info={VLAD} />
        <DeveloperCard info={Grisha} />
        <DeveloperCard info={DENIS} />
      </div>
    </div>
  )
}