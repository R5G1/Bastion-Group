import { useContext, useState } from 'react';
import { AuthContext } from '../../../components/Context/Context';
import styles from '../homeComponents/style/HomeProductsCard.module.scss';
import img from './images/6.png';
interface IFormInput {
  id?: string;
  name: string;
  price?: string;
  priceNumber: number;
  type?: string;
  gost?: string;
}

function ProductsCard() {
  const { isArray, setisArray } = useContext(AuthContext);
  const [count, setCount] = useState<number>(0);
  console.log(isArray);

  function aadhit(array: string) {
    if (array.toLowerCase().includes('о')) {
      return <div className={styles.productsCardActionName}>хит</div>;
    }
  }
  function aadAction(array: string) {
    if (array.toLowerCase().includes('а')) {
      return <div className={styles.productsCardActionName}>акция</div>;
    }
  }
  function addNumber() {
    return setCount(count + 1);
  }
  function minusNumber() {
    if (count === 0) {
      return setCount(count);
    }
    return setCount(count - 1);
  }
  function addBasketCount(number: number) {
    const newAray = [...isArray];
    newAray.forEach((item, index: number) => {
      if (number === index) {
        item.priceNumber = count;
      }
    });
    setisArray(newAray);
    setCount(0);
  }

  const listItems = isArray.map((item: IFormInput, index: number) => (
    <div className={styles.productsCardContent} key={item.id + Math.random().toString()}>
      <div className={styles.productsCardAction}>
        {aadhit(item.name)}
        {aadAction(item.name)}
      </div>
      <img className={styles.productsCardImg} src={img} alt="" />

      <div className={styles.productsCardGost}>{item.gost}</div>
      <div className={styles.productsCardName}>{item.name}</div>
      <div className={styles.productsCardType}>{item.type}</div>
      <div className={styles.productsCardPrice}>{item.price} руб.</div>
      <div className={styles.productsCardHoverConteiner}>
        <div className={styles.productsCardHoverContent}>
          <p>{item.price} руб.</p>
          <div className={styles.productsCardPriceHoverInput}>
            <button onClick={addNumber}>+</button>
            <input
              type="number"
              defaultValue={count}
              onChange={(e) => setisArray(e.target.value)}
            />
            <button onClick={minusNumber}>-</button>
          </div>
        </div>
        <div className={styles.productsCardHoverBtn}>
          <button onClick={() => addBasketCount(index)}>В корзину</button>
          <button>Подробнее</button>
        </div>
      </div>
    </div>
  ));
  return <div className={styles.productsCardConteiner}>{listItems}</div>;
}

export default ProductsCard;
