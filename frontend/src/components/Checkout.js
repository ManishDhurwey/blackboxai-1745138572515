import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Checkout({ cartItems }) {
  const navigate = useNavigate();
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!customerName || !customerEmail || !shippingAddress) {
      setError('Please fill in all fields');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const order = {
        products: cartItems.map(item => ({ product: item._id, quantity: item.quantity })),
        totalPrice,
        customerName,
        customerEmail,
        shippingAddress,
      };
      await axios.post('/api/orders', order);
      setSuccess('Order placed successfully!');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (err) {
      setError('Failed to place order');
    } finally {
      setLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">Your cart is empty.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      {success && <p className="text-green-600 mb-4">{success}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Shipping Address</label>
          <textarea
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows="3"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? 'Placing Order...' : 'Place Order'}
        </button>
      </form>
    </div>
  );
}

export default Checkout;
