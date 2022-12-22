import { NavLink } from 'react-router-dom';

import styles from './NotFoundPage.module.scss';

export const NotFoundPage = ({theme}) => {
  return (
    <div className={theme == 'light' ? styles.main + " " + styles.main_l : styles.main}>
      <header className={styles.main__header}>
        Страница не найдена :( Может, вернуться домой?
        <NavLink className={styles.homeLink} to='/'>На главную</NavLink>
      </header>
    </div>
  )
}