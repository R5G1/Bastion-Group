import styles from '../homeComponents/style/HomeContentCard.module.scss';
import ProductsCard from './HomeProductsCard';

function HomeContentCard() {
  return (
    <div className={styles.conteiner}>
      <div className={styles.homeContentMenuGostConteiner}>
        <button className={styles.hCMGBtn}>ГОСТ 14911-82</button>
        <button className={styles.hCMGBtn}>ОСТ 36-146-88</button>
        <button className={styles.hCMGBtn}>НТС 65-06</button>
        <button className={styles.hCMGBtn}>ОСТ 36-146-88</button>
        <button className={styles.hCMGBtn}>НТС 65-06</button>
      </div>
      <div className={styles.homeContentCardConteiner}>
        <ProductsCard />
      </div>
    </div>
  );
}
export default HomeContentCard;
