import React, { useState } from 'react';

import styles from '../styles/Navbar.module.css';
   

const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'ALL',
    'NIKE',
    'ADIDAS',
    'BALENCIAGA',
    'PUMA',
    'CONVERSE',
    'MLB'
  ];

  // Xoá biến này nếu không sử dụng
  // const filteredProducts = products.filter(product => 
  //   selectedCategory === 'all' || product.category === selectedCategory
  // );

  return (
    <nav className={styles.navbar}>
      <div className={styles.categories}>
        {categories.map(category => (
          <button
            key={category}
            className={selectedCategory === category ? styles.active : ''}
            onClick={() => setSelectedCategory(category.toLowerCase())}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Nếu bạn không sử dụng ProductCard, xoá phần này */}
      {/* 
      <div className={styles.productGrid}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      */}
    </nav>
  );
};

export default Navbar;