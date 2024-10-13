import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../contexts/cartContext';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://v2.api.noroff.dev/online-shop/${id}`);
        setProduct(response.data.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div className="text-center py-8">Loading...</div>;

  const discount = product.price - product.discountedPrice;
  const discountPercentage = ((discount / product.price) * 100).toFixed(2);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img src={product.image.url} alt={product.title} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-white-600 mb-4">{product.description}</p>
          <p className="text-2xl font-bold mb-2">Price: ${product.discountedPrice}</p>
          {discount > 0 && (
            <p className="text-green-600 mb-4">Discount: {discountPercentage}% off (You save ${discount.toFixed(2)})</p>
          )}
          <button 
            onClick={() => addToCart(product)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add to Cart
          </button>
          {product.reviews && product.reviews.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Reviews</h2>
              {product.reviews.map((review, index) => (
                <div key={index} className="border-b pb-4 mb-4 last:border-b-0">
                  <p className="font-bold">{review.username}</p>
                  <p>{review.description}</p>
                  <p className="text-yellow-500">Rating: {review.rating}/5</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;