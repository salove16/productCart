import React from "react";
import { useState } from "react";
import { Cart } from "./Cart";
import "./Product.css";

export const Product = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product-1", price: 100 },
    { id: 2, name: "Product-2", price: 200 },

    { id: 3, name: "Product-3", price: 300 },
  ]);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const addDataCount = (e,c) => {
    setCount((count) => count + 1);
    setData(()=>[...data,e,{count:count+c}]);
  };

  //   console.log(count)
  return (
    <div id="flex">
      <div className="container">
        <h2>Products</h2>
        {products.map((e) => (
          <div className="product_flex" key={e.id}>
            <div>{e.name}</div>
            <div>{e.price}</div>
            <div>
              <button
                onClick={() => addDataCount(e,-1)}
              >
                -
              </button>
              <span>{count}</span>
              <button onClick={() => addDataCount(e,+1)}>+</button>
            </div>
          </div>
        ))}
      </div>
      <Cart count={count} data={data} />
    </div>
  );
};
