import { useContext, useState } from 'react';
import styles from '../basketComponents/style/BasketCreateCard.module.scss';
import img from '../../home/homeComponents/images/6.png';
import imgBaaket from '../basketComponents/style/images/1.svg';
import { AuthContext } from '../../../components/Context/Context';
interface IFormInput {
  id: string;
  name: string;
  price: number;
  priceNumber: number;
  type?: string;
  gost?: string;
}

function BasketCreateCard() {
  const { isArray, setisArray } = useContext(AuthContext);
  const { isNewArray, setisNewArray } = useContext(AuthContext);
  const [count, setCount] = useState<number>(0);

  function resetBasketCount(array: string) {
    const newAray = [...isArray];
    newAray.map((item, index: number) => {
      if (array === item.id) item.priceNumber = 0;
    });
    setisArray(newAray);
  }
  function addBasketCount(array: string) {
    const newAray = [...isArray];
    newAray.map((item: IFormInput, index: number) => {
      if (array === item.id) item.priceNumber += 1;
    });
    setisArray(newAray);
  }
  function minusBasketCount(array: string) {
    const newAray = [...isArray];
    newAray.map((item: IFormInput, index: number) => {
      if (array === item.id) item.priceNumber -= 1;
    });
    setisArray(newAray);
  }

  const listItems = isNewArray
    .filter((array: IFormInput) => array.priceNumber > 0)
    .map((item: IFormInput, index: number) => (
      <div className={styles.productsCardContent} key={item.id + Math.random().toString()}>
        <div className={styles.productsCardImg}>
          <img src={img} alt="" />
        </div>

        <div className={styles.productsCardTextConteiner}>
          <p className={styles.productsCardGost}>{item.gost}</p>
          <p className={styles.productsCardName}>{item.name}</p>
          <p className={styles.productsCardPrice}>{item.price} руб.</p>
        </div>
        <div className={styles.productsCardPriceHoverInput}>
          <button onClick={() => addBasketCount(item.id)}>+</button>
          <input
            type="number"
            defaultValue={item.priceNumber}
            onChange={(e) => setisArray(e.target.value)}
          />
          <button onClick={() => minusBasketCount(item.id)}>-</button>
        </div>
        <div className={styles.productsCardCountPrice}>{item.price * item.priceNumber} руб.</div>
        <div className={styles.productsCardHoverBtn}>
          <button onClick={() => resetBasketCount(item.id)}>
            <img src={imgBaaket} alt="" />
          </button>
        </div>
      </div>
    ));
  return <div className={styles.productsCardConteiner}>{listItems}</div>;
}

export default BasketCreateCard;
