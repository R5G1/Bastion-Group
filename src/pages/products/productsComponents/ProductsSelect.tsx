import { useContext } from 'react';
import { AuthContext } from '../../../components/Context/Context';
import { IFormInput } from '../../../components/Type/Type';

function ProductsSelect() {
  const { isType, setIsType } = useContext(AuthContext);
  const listItems = isType.map((item: IFormInput, index: number) => (
    <option value={item.name} key={item.id + Math.random().toString()}>
      {item.name}
    </option>
  ));
  return listItems;
}
export default ProductsSelect;
