App.js;
import React, { useState } from 'react';
import Product from './components/Product';
import { v4 as uuid } from 'uuid';

function App() {
  const productsList = [
    { name: 'Iphone', price: 800, id: uuid() },
    { name: 'Watch', price: 100, id: uuid() },
  ];
  const [products, setProducts] = useState(productsList);
  const [newProducts, setNewProducts] = useState({
    name: '',
    price: '',
    id: uuid(),
  });

  const nameChecker = (str) => {
    if (str.length < 3 || str.trim() === '') {
      return false;
    }
    return true;
  };

  const changeName = (e) => {
    nameChecker(e.target.value) &&
      setNewProducts({ ...newProducts, name: e.target.value });
  };

  const changePrice = (e) => {
    setNewProducts({ ...newProducts, price: e.target.value });
  };

  const addProducts = () => {
    setNewProducts({ ...newProducts, id: uuid() });
    setProducts([...products, newProducts]);
    setNewProducts({ name: '', price: '', id: uuid() });
  };

  const removeProduct = (id) => {
    const newList = products.filter((product) => product.id !== id);
    setProducts(newList);
  };

  return (
    <div className="wrapper">
      <div className="add">
        <label>Product name</label>
        <input onInput={changeName} type="text" value={newProducts.name} />
        <label>Product price</label>
        <input onInput={changePrice} type="number" value={newProducts.price} />
        <button onClick={addProducts} type="button">
          Add
        </button>
      </div>
      <div className="list">
        {products.map((product) => (
          <Product
            onRemove={removeProduct}
            key={product.id}
            id={product.id}
            name={product.name}
            price={`${product.price} $`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
