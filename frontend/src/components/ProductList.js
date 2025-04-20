import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product._id} className="bg-white p-4 rounded shadow">
          <Link to={`/product/${product._id}`}>
            <img src={product.imageUrl || 'https://via.placeholder.com/300'} alt={product.name} className="w-full h-48 object-cover rounded" />
            <h2 className="mt-2 font-semibold text-lg">{product.name}</h2>
          </Link>
          <p className="mt-1 text-gray-700">${product.price.toFixed(2)}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
