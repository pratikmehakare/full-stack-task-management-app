import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const calculatedTotalAmount = cart.reduce((acc, curr) => {
      const itemPrice = parseFloat(curr.price);
      return !isNaN(itemPrice) ? acc + itemPrice : acc;
    }, 0);
    setTotalAmount(calculatedTotalAmount);
  }, [cart]);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl text-gray-600 font-mono font-semibold mb-4 text-center">Your Cart</h1>
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4  bg-gray-100 p-6 rounded-lg">
            {cart.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
          </div>
          <div className="flex flex-col gap-2 bg-gray-100 p-6 rounded-lg ">
            <div className="font-bold text-green-700 text-5xl mb-4">Summary</div>
            <div className="text-gray-700 mb-2">Total Items: {cart.length}</div>
            <div className="text-gray-700 mb-4">Total Amount: ₹ {totalAmount}</div>
            <Link to='/order'>
            <button
              className="w-full bg-green-700 text-white rounded font-semibold text-sm py-2 uppercase hover:bg-gray-800 transition duration-300 ease-in"
            >
              Check Out Now
            </button>
            </Link>
            <Link to='/home'>
            <button
              className="w-full bg-green-700 text-white rounded font-semibold text-sm py-2 uppercase hover:bg-gray-800 transition duration-300 ease-in"
            >
              Shop More
            </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-lg mb-4">Your cart is empty.</p>
          <Link
            to="/"
            className="w-2/12 bg-green-700 text-white rounded font-semibold text-sm py-2 uppercase hover:bg-gray-800 transition duration-300 ease-in"
          >
            Shop Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;

