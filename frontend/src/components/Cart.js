import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Cart({ cartItems, addToCart, removeFromCart }) {
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/" className="text-blue-600 underline">Go shopping</Link></p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item._id} className="flex items-center justify-between border-b py-4">
                <div className="flex items-center space-x-4">
                  <img src={item.imageUrl || 'https://via.placeholder.com/100'} alt={item.name} className="w-20 h-20 object-cover rounded" />
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={() => removeFromCart(item)} className="bg-red-600 text-white px-2 rounded">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item)} className="bg-green-600 text-white px-2 rounded">+</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between items-center">
            <p className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</p>
            <button
              onClick={() => navigate('/checkout')}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
