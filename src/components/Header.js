import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        Trang chủ
      </Link>
      
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      <Link to="/cart" className={styles.linkgiohang} >
        Giỏ hàng
      </Link>
    </header>
  );
};


export default Header;