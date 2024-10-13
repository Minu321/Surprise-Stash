import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/cartContext';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const CartIcon = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/cart" className="relative">
      <ShoppingCartIcon className="h-6 w-6" />
      {cart.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {cart.length}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;