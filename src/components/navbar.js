import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'All',
    'Nike',
    'Adidas',
    'Jordan',
    'Puma'
  ];

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.categories}>
          {categories.map(category => (
            <button
              key={category}
              className={`${styles.categoryButton} ${selectedCategory === category.toLowerCase() ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category.toLowerCase())}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
