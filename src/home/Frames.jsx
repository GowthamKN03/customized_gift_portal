
<<<<<<< HEAD
// import React, { useContext } from 'react';
// import { ShopContext } from '../context/Product1_context';
// import { FiHeart } from "react-icons/fi";
// import { AiFillHeart } from "react-icons/ai";
// import { Link, useNavigate } from 'react-router-dom';

// const Frames = (props) => {
//   const { id, productname, price, productimage } = props.data;
//   const { addToCart, cartItems, favItems, toggleFavorite } = useContext(ShopContext);
//   const navigate = useNavigate();

//   const cartItemAmount = cartItems[id];
//   const isFavorite = favItems.includes(id);

//   const handleStartPersonalizing = () => {
//     navigate('/personalize', { state: { price, productname, productimage } });
//   };

//   return (
//     <div className='card bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between items-center mx-2 my-4 overflow-hidden max-w-sm w-90 h-full'>
//       <Link to={`/product/${id}/review`}>
//         <img src={productimage} alt={productname} className='w-full h-64 object-cover rounded-t-lg' />
//       </Link>
//       <div className='p-4 flex flex-col justify-between w-full'>
//         <div className='text-left text-gray-800'>
//           <p className='text-lg font-semibold mb-1'>{productname}</p>
//           <p className='text-xl font-bold text-gray-900'>₹{price}</p>
//         </div>
//         <div className='flex justify-between items-center mt-4'>
//           <button
//             className='bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium text-base py-2 px-2 rounded-full transition-transform transform hover:scale-105'
//             onClick={() => addToCart(id)}
//           >
//             Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
//           </button>
//           <button
//             className='text-sm bg-blue-600 hover:bg-blue-700 text-white font-medium text-base py-2 px-2 rounded-full transition-transform transform hover:scale-105'
//             onClick={handleStartPersonalizing}
//           >
//             Start Personalizing
//           </button>
//           <button
//             onClick={() => toggleFavorite(id)}
//             className={`p-2 rounded-full transition-transform transform hover:scale-105 ${isFavorite ? 'text-red-600' : 'text-gray-600'}`}
//           >
//             {isFavorite ? <AiFillHeart className="text-xl" /> : <FiHeart className="text-xl" />}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Frames;
=======
>>>>>>> 32c962d494cf8cd29227d09cbf5b1af7c2dbd723

import React, { useContext } from 'react';
import { ShopContext } from '../context/Product1_context';
import { FiHeart } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
<<<<<<< HEAD
import { Link, useNavigate } from 'react-router-dom';

const Frames = (props) => {
  const { id, productname, price, productimage, rating } = props.data;
  const { addToCart, cartItems, favItems, toggleFavorite } = useContext(ShopContext);
  const navigate = useNavigate();
=======

const Frames = (props) => {
  const { id, productname, price, productimage } = props.data;
  const { addToCart, cartItems, favItems, toggleFavorite } = useContext(ShopContext);
>>>>>>> 32c962d494cf8cd29227d09cbf5b1af7c2dbd723

  const cartItemAmount = cartItems[id];
  const isFavorite = favItems.includes(id);

<<<<<<< HEAD
  const handleStartPersonalizing = () => {
    navigate('/custom', { state: { price, productname, productimage } });
  };

  return (
    <div className='card bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between items-center mx-2 my-4 overflow-hidden max-w-sm w-90 h-full'>
      <Link to={`/product/${id}/review`}>
        <img src={productimage} alt={productname} className='w-full h-64 object-cover rounded-t-lg' />
      </Link>
      <div className='p-4 flex flex-col justify-between w-full'>
        <div className='text-left text-gray-800 flex items-center justify-between'>
          <div>
            <p className='text-lg font-semibold mb-1'>{productname}</p>
            <p className='text-xl font-bold text-gray-900'>₹{price}</p>
          </div>
          <div className='flex items-center space-x-2'>
            <button className='bg-green-500 text-white text-xs font-semibold py-1 px-2 rounded-full'>
              {rating}★
            </button>
          </div>
        </div>
        <div className='flex justify-between items-center mt-4'>
          <button
            className='bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium text-base py-2 px-2 rounded-full transition-transform transform hover:scale-105'
            onClick={() => addToCart(id)}
          >
            Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
          <button
            className='text-sm bg-blue-600 hover:bg-blue-700 text-white font-medium text-base py-2 px-2 rounded-full transition-transform transform hover:scale-105'
            onClick={handleStartPersonalizing}
          >
            Start Personalizing
          </button>
          <button
            onClick={() => toggleFavorite(id)}
            className={`p-2 rounded-full transition-transform transform hover:scale-105 ${isFavorite ? 'text-red-600' : 'text-gray-600'}`}
          >
            {isFavorite ? <AiFillHeart className="text-xl" /> : <FiHeart className="text-xl" />}
          </button>
        </div>
=======
  return (
    <div className='bg-white rounded-lg shadow-md transition-transform transform hover:translate-y-1 hover:shadow-lg flex flex-col justify-between items-center mx-2 my-4 overflow-hidden max-w-xs w-full'>
      <img src={productimage} alt={productname} className='w-full h-auto rounded-t-lg object-cover' />
      <div className='p-4 text-left text-gray-700 text-sm flex-grow w-full'>
        <p className='font-bold'>{productname}</p>
        <p>₹{price}</p>
      </div>
      <div className='flex justify-center'>
        <button className='text-sm bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-full m-2 transition-transform transform hover:translate-y-1' onClick={() => addToCart(id)}>
          Add To Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
        <button className='text-sm bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2 transition-transform transform hover:translate-y-1'>
          Buy Now
        </button>
        <button onClick={() => toggleFavorite(id)} className={`p-2 m-2 rounded-full transition-transform transform hover:translate-y-1 ${isFavorite ? 'text-red-600' : 'text-gray-600'}`}>
          {isFavorite ? <AiFillHeart className="text-2xl" /> : <FiHeart className="text-2xl" />}
        </button>
>>>>>>> 32c962d494cf8cd29227d09cbf5b1af7c2dbd723
      </div>
    </div>
  );
};

export default Frames;
<<<<<<< HEAD
=======


>>>>>>> 32c962d494cf8cd29227d09cbf5b1af7c2dbd723
