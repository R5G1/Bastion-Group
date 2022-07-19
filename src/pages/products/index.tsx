import { useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthContext } from '../../components/Context/Context';
import { IFormInput } from '../../components/Type/Type';
import Button from '../../components/UI/button/Button';
import style from '../products/index.module.scss';
import ProductsSelect from './productsComponents/ProductsSelect';
// enum GostEnum {
//   gost1 = 'ГОСТ 14911-82',
//   gost2 = 'ОСТ 36-146-88',
//   gost3 = 'НТС 65-06',
//   gost4 = 'ОСТ 36-146-88',
//   gost5 = 'НТС 65-06',
// }
function Products() {
  // interface IFormInput {
  //   id?: string;
  //   name?: string;
  //   price?: string;
  //   gost?: GostEnum;
  // }

  const { isType, setIsType, isArray, setisArray } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [type, setType] = useState<IFormInput[]>([]);
  console.log(isArray);

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput, event: any) => {
    setisArray([...isArray, data]);
    event.target.reset();
  };

  return (
    <div className={style.conteiner}>
      <div className={style.product}>
        <h3 className={style.productTitle}>Продукты</h3>
        <form className={style.productForm} action="get" onSubmit={handleSubmit(onSubmit)}>
          <input
            min={0}
            className="input"
            placeholder="идентификатор id"
            type="number"
            {...register('id')}
            required
          ></input>
          <input
            className="input"
            placeholder="Название"
            type="text"
            {...register('name')}
            required
          ></input>

          <select className="input" {...register('type')} required>
            {isType.length > 0 ? ProductsSelect() : <option value="disabled">Тип не указан</option>}
          </select>
          <input
            min={0}
            className="input"
            placeholder="Цена"
            type="number"
            {...register('price')}
            required
          ></input>
          <select className="input" {...register('gost')} required>
            <option value="gost1">ГОСТ 14911-82</option>
            <option value="gost2">ОСТ 36-146-88</option>
            <option value="gost3">НТС 65-06</option>
            <option value="gost4">ОСТ 36-146-88</option>
            <option value="gost5">НТС 65-06</option>
          </select>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default Products;
