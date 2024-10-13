import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={product.image.url} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{product.title}</h2>
        <p className="text-white-700 text-base mb-4">{product.description.substring(0, 100)}...</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">${product.discountedPrice}</span>
          <Link to={`/product/${product.id}`} className="bg-green-500 hover:bg-white-700 text-white font-bold py-2 px-4 rounded">
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
