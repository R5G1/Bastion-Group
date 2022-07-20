import { useContext } from 'react';
import { AuthContext } from '../../../components/Context/Context';
import { IFormInput } from '../../../components/Type/Type';
import styles from '../homeComponents/style/HomeProductsCard.module.scss';
import img from './images/6.png';
function ProductsCard() {
  const { isArray, setisArray } = useContext(AuthContext);
  const listItems = isArray.map((item: IFormInput, index: number) => (
    <div className={styles.productsCardContent} key={item.id + Math.random().toString()}>
      <div className={styles.productsCardImg}>{img}</div>
      <div className={styles.productsCardName}>{item.name}</div>
      <div className={styles.productsCardType}>{item.type}</div>
      <div className={styles.productsCardPrice}>{item.price}</div>
      <div className={styles.productsCardGost}>{item.gost}</div>
    </div>
  ));
  return <div className={styles.productsCardConteiner}>{listItems}</div>;
}

export default ProductsCard;
