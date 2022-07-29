import React, { useState } from "react";
import { useEffect } from "react";
import "./Cart.css";
export const Cart = ({ count ,data}) => {
  console.log("props", count);
//   const [products, setProducts] = useState([
//     { id: 1, name: "Product-1", price: 100 },
    
//   ]);
  console.log("data",data)
  useEffect(()=>{
    totalPrice()
  },[count])

  const [total,setTotal]=useState(0)
  const totalPrice=()=>{
   data.map((e)=>setTotal(e.price*count))
  }

// console.log(total)
  return (
    <div>
      <div className="container">
        <h2>Cart</h2>
        
        {
           count>0 ? data.map((e)=><div className='product_flex' key={e.id}>
            <div>{e.name}</div>
           <div>{count}<span>x</span> {e.price}</div>
            </div>):
            "No product in the cart"
            
        }
        <div style={{backgroundColor:"grey", display:"flex", justifyContent:"space-evenly"}}>
            <h3>Total:</h3>
            <h3>{total}</h3>
        </div>
      </div>
    </div>
  );
};
