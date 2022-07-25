import BasketContentForm from './BasketContentForm';
import BasketCreateCard from './BasketCreateCard';
import style from './style/BasketContent.modyle.scss';

function BasketContentCard() {
  return (
    <div className={style.conteiner}>
      <div className={style.basketTitle}>
        <p></p>
        <p>Заказ</p>
      </div>
      <div className={style.basketContentConteiner}>
        <BasketCreateCard />
        <BasketContentForm />
      </div>
    </div>
  );
}

export default BasketContentCard;
