import React from "react";
import { useSelector } from "react-redux/es/exports";

const Cart = () => {
  const cartList = useSelector((state) => state.cart.cart);
  console.log(cartList);

  return <div>Cart </div>;
};

export default Cart;
