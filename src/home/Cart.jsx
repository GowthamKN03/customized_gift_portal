
<<<<<<< HEAD


import React, { useContext } from 'react';
import { ShopContext } from '../context/Product1_context';
=======
import React, { useContext } from 'react';
import { ShopContext } from '../context/Product1_context';
import { FRAME } from '../components/Frame';
>>>>>>> 32c962d494cf8cd29227d09cbf5b1af7c2dbd723
import CartItem from '../home/Cartitem';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import Lottie from 'lottie-react';
import animationData from '../animations/animation.json';

const Cart = () => {
<<<<<<< HEAD
  const { cartItems, getTotalCartAmount, products } = useContext(ShopContext);
=======
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
>>>>>>> 32c962d494cf8cd29227d09cbf5b1af7c2dbd723
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
<<<<<<< HEAD
      <div className="bg-slate-100 flex flex-col items-center p-10 min-h-screen bg-cover bg-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">Your Cart Items</h1>
=======
      <div 
        className="bg-slate-100 flex flex-col items-center p-10 min-h-screen bg-cover bg-center"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">Your Cart Items</h1>
          
>>>>>>> 32c962d494cf8cd29227d09cbf5b1af7c2dbd723
          <p className="text-lg text-gray-900 mt-2">Review and manage your cart items below.</p>
        </div>
        <div className="w-full max-w-4xl">
          <div className="flex flex-col items-center">
<<<<<<< HEAD
            {products.map((product) => {
=======
            {FRAME.map((product) => {
>>>>>>> 32c962d494cf8cd29227d09cbf5b1af7c2dbd723
              if (cartItems[product.id] !== 0) {
                return <CartItem key={product.id} data={product} />;
              }
            })}
          </div>
        </div>
        {totalAmount > 0 ? (
          <div className="text-center mt-8 space-y-4">
            <p className="text-2xl font-bold text-gray-800">Subtotal: ₹{totalAmount}</p>
            <div className="flex justify-center space-x-4">
<<<<<<< HEAD
              <button
                className="w-44 h-12 bg-[#2874f0] text-white border-none rounded-lg cursor-pointer text-lg transition-colors duration-300 hover:bg-[#0056b3]"
                onClick={() => navigate("/")}
              >
                Continue Shopping
              </button>
              <button
                className="w-44 h-12 bg-[#2874f0] text-white border-none rounded-lg cursor-pointer text-lg transition-colors duration-300 hover:bg-[#0056b3]"
                onClick={() => navigate("/pay", { state: { price: totalAmount }})}
              >
                Pay Now
              </button>
=======
              <button className="w-44 h-12 bg-[#2874f0] text-white border-none rounded-lg cursor-pointer text-lg transition-colors duration-300 hover:bg-[#0056b3]" onClick={() => navigate("/")}>Continue Shopping</button>
              <button className="w-44 h-12 bg-[#2874f0] text-white border-none rounded-lg cursor-pointer text-lg transition-colors duration-300 hover:bg-[#0056b3]" onClick={() => navigate("/")}>Pay Now</button>
>>>>>>> 32c962d494cf8cd29227d09cbf5b1af7c2dbd723
            </div>
          </div>
        ) : (
          <h1 className="text-3xl font-semibold text-gray-700">Your Shopping Cart is Empty</h1>
        )}
      </div>
    </div>
  );
}

export default Cart;
