import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <h3 className={styles.title}>{product.name}</h3>
      <p className={styles.price}>{product.price} USD</p>
    </div>
  );
};

export default ProductCard;