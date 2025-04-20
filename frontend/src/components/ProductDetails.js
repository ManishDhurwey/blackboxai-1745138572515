import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
      <img src={product.imageUrl || 'https://via.placeholder.com/600'} alt={product.name} className="w-full h-96 object-cover rounded" />
      <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
      <p className="mt-2 text-gray-700">{product.description}</p>
      <p className="mt-4 text-xl font-semibold">${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
