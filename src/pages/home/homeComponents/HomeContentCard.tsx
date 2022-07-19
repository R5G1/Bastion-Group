import { useContext } from 'react';
import { AuthContext } from '../../../components/Context/Context';
import { IFormInput } from '../../../components/Type/Type';
import styles from '../homeComponents/style/HomeContentCard.module.scss';

function HomeContentCard() {
  function ProductsCard() {
    const { isArray, setisArray } = useContext(AuthContext);
    const listItems = isArray.map((item: IFormInput, index: number) => (
      <div key={item.id + Math.random().toString()}>
        <div>{item.id}</div>
        <div>{item.name}</div>
        <div>{item.type}</div>
        <div>{item.price}</div>
        <div>{item.gost}</div>
      </div>
    ));
    return <div>{listItems}</div>;
  }

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
