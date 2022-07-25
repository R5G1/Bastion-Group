import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormInput } from '../../../components/Type/Type';
import Button from '../../../components/UI/button/Button';
import style from './style/BasketContentForm.modyle.scss';
function BasketContentForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput, event: any) => {
    event.target.reset();
  };

  return (
    <div className={style.basketForm}>
      <p className={style.basketFormTitle}></p>
      <form className={style.basketFormConteiner} onSubmit={handleSubmit(onSubmit)}>
        <input
          min={0}
          className="input"
          placeholder="ФИО"
          type="number"
          {...register('price')}
          required
        ></input>
        <input
          min={0}
          className="input"
          placeholder="Цена"
          type="number"
          {...register('price')}
          required
        ></input>
        <input
          min={0}
          className="input"
          placeholder="Цена"
          type="number"
          {...register('price')}
          required
        ></input>
        <input
          min={0}
          className="input"
          placeholder="Цена"
          type="number"
          {...register('price')}
          required
        ></input>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
export default BasketContentForm;
