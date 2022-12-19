import { Button } from '../../Elements/Button';
import FeatherIcon from 'feather-icons-react';
import styles from './Feedback.module.scss';

export const Feedback = ({theme, setModalActive}) => {
  return (
    <section className={styles.feedback}>
      <h2 className={styles.feedback__header}>Нужен сайт? Интернет-магазин? Другое?</h2>
      <h3 className={styles.feedback__subheader}>Мы с радостью готовы выполнить ваш заказ! <br /> Просто нажмите на кнопку ниже <br /> <FeatherIcon icon="arrow-down" className={styles.arrowDownIcon}/> </h3>
      <Button type={theme == 'light' ? "light" : "dark"} onClick={() => setModalActive(true)}>Форма обратной связи</Button>
    </section>
  )
}