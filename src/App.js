import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage'; 

import { CartProvider } from './context/CartContext';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
  background-color: #333;
  padding: 10px;
  color: white;

  a {
    color: white;
    text-decoration: none;
    margin: 0 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const App = () => {
  return (
    <CartProvider>
      <Router basename="/PhamTruongDucThienSneaker">
        <StyledNavBar>
          <Link to="/">Trang chủ</Link>
          <Link to="/cart">Giỏ hàng</Link>
        </StyledNavBar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} /> 
          
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;