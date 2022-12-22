import { useState } from 'react';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';

import styles from './PromoBlock.module.scss';

export const PromoBlock = () => {
  const [activeBenefit, setActiveBenefit] = useState(1);
  return (
    <section className={styles.promoBlock}>
      <header className={styles.promoBlock__header}><h2><nobr>Веб-студия</nobr> Котики</h2><h3 className={styles.promoBlock__subheader}>сделаем ваш сайт настолько красивым, что вы будете мурчать от удовольствия :)</h3></header>
      <section className={styles.promoBlock__benefits}>
        <div className={activeBenefit === 1 ? styles.behefits__benefit + " " + styles.behefits__benefit_active : styles.behefits__benefit} onClick={() => setActiveBenefit(1)}><FeatherIcon icon="code" />4 <nobr>веб-разработчика</nobr></div>
        <div className={activeBenefit === 2 ? styles.behefits__benefit + " " + styles.behefits__benefit_active : styles.behefits__benefit} onClick={() => setActiveBenefit(2)}><FeatherIcon icon="box" />быстрота выполнения</div>
        <div className={activeBenefit === 3 ? styles.behefits__benefit + " " + styles.behefits__benefit_active : styles.behefits__benefit} onClick={() => setActiveBenefit(3)}><FeatherIcon icon="coffee" />слаженная работа</div>
      </section>
    </section>
  )
}