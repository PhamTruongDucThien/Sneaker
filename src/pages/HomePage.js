import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import styles from '../styles/HomePage.module.css';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['ALL', 'NIKE', 'ADIDAS', 'BALENCIAGA', 'PUMA', 'CONVERSE', 'MLB'];

  const filteredProducts = products
    .filter(product => selectedCategory === 'ALL' || product.brand === selectedCategory)
    .filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.code.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>Danh mục</h2>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <div className={styles.categoryList}>
          {categories.map(category => (
            <button
              key={category}
              className={selectedCategory === category ? styles.active : ''}
              onClick={() => setSelectedCategory(category.toUpperCase())}
            >
              {category}
            </button>
          ))}
        </div>
      </aside>
      <main className={styles.mainContent}>
        <div className={styles.productGrid}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;