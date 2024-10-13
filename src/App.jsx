import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/cartContext';
import Layout from './components/layout';
import HomePage from './pages/homePage';
import ProductPage from './pages/productPage';
import CartPage from './pages/cartPage';
import CheckoutSuccessPage from './pages/checkoutSuccessPage';
import ContactPage from './pages/contactPage';
import './App.css'


  function App() {
    return (
      <Router>
        <CartProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutSuccessPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Layout>
        </CartProvider>
      </Router>
    );
  }

export default App
