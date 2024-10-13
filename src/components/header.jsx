import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './cartIcon';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Suprise Stash</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
            <li><CartIcon /></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;