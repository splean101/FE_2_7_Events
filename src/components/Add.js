import React,{useState} from 'react';
import { v4 as uuid } from 'uuid';

const Add = (props) => {
  const [newProducts, setNewProducts] = useState({
    name: '',
    price: '',
    id: uuid(),
  });
  const [isValidName, setisValidName] = useState(false);
  const [isValidPrice, setisValidPrice] = useState(false);

  const changeName = (e) => {
    setNewProducts({ ...newProducts, name: e.target.value });
  };

  const changePrice = (e) => {
    setNewProducts({ ...newProducts, price: e.target.value });
  };

  const addProducts = () => {
    props.onAddProduct(
      setNewProducts,
      newProducts,
      isValidName,
      isValidPrice,
      setisValidName,
      setisValidPrice
    );
  };

  const validateName = () => {
    newProducts.name.trim().length > 1
      ? setisValidName(true)
      : setisValidName(false);
  };
  const validatePrice = () => {
    newProducts.price > 0
      ? setisValidPrice(true)
      : setisValidPrice(false);
  };
  return (
    <div className="add">
      <label>Product name</label>
      <input
        onBlur={validateName}
        onInput={changeName}
        value={newProducts.name}
        type="text"
      />
      <label>Product price</label>
      <input
        onBlur={validatePrice}
        onInput={changePrice}
        value={newProducts.price}
        type="number"
      />
      <button onClick={addProducts} type="button">
        Add
      </button>
    </div>
  );
};

export default Add;
