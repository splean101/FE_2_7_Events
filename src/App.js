App.js;
import React, { useState } from 'react';
import Product from './components/Product';
import { v4 as uuid } from 'uuid';
import Add from './components/Add';

function App() {
  const productsList = [
    { name: 'Iphone', price: 800, id: uuid() },
    { name: 'Watch', price: 100, id: uuid() },
  ];
  const [products, setProducts] = useState(productsList);

  const addProducts = (
    setNewProducts,
    newProducts,
    isValidateName,
    isValidatePrice,
    setIsValidateName,
    setIsValidatePrice
  ) => {
    if (isValidateName && isValidatePrice) {
      setNewProducts({ ...newProducts, id: uuid() });
      setProducts([...products, newProducts]);
      setNewProducts({ ...newProducts, name: '', price: '' });
      setIsValidateName(false);
      setIsValidatePrice(false);
    }
  };

  const removeProduct = (id) => {
    const newList = products.filter((product) => product.id !== id);
    setProducts(newList);
  };

  return (
    <div className="wrapper">
      <Add onAddProduct={addProducts} />
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
