import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';
import styles from '../Header/Header.module.scss';
import imgLog from '../Header/images/1.svg';
import imgCatalog from '../Header/images/2.svg';
import imgInput from '../Header/images/3.svg';
import imgInput2 from '../Header/images/31.svg';
import imgSelect from '../Header/images/4.svg';
import imgBasket from '../Header/images/5.svg';
interface IFormInput {
  id?: string;
  name?: string;
  price?: string;
  priceNumber: number;
  type?: string;
  gost?: string;
}
const Header: FC = () => {
  const { isArray, setisArray } = useContext(AuthContext);
  function Basket() {
    let number = 0;
    isArray.map((item: IFormInput) => {
      if (item.priceNumber > 0) {
        return (number += 1);
      }
    });
    return number > 0 ? <div className={styles.headerBasketCount}>{number}</div> : <div></div>;
  }
  return (
    <div className={styles.conteiner}>
      <div className={styles.headerConteiner}>
        <img className={styles.headerLogo} src={imgLog} alt="" />
        <div className={styles.headerTitle}>Производитель металлических изделий №1</div>
        <button className={styles.headerCatalog}>
          <img className={styles.headerCatalogImg} src={imgCatalog} alt="" />
          <p>Каталог</p>
        </button>
        <div className={styles.headerInput}>
          <img src={imgInput} alt="" />
          <input placeholder="Поиск по названию..."></input>
          <img src={imgInput2} alt="" />
        </div>

        <button className={styles.headeSelect}>
          <img src={imgSelect} alt="" />
          <p>Избранное</p>
        </button>
        <Link to={'/basket'}>
          <button className={styles.headerBasket}>
            <Basket />
            <img src={imgBasket} alt="" />
            <p>Корзина</p>
          </button>
        </Link>
      </div>
      <div className={styles.headerNavConteiner}></div>
    </div>
  );
};

export default Header;
