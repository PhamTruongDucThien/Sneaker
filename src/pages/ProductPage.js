import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import styles from '../styles/ProductPage.module.css';

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2>Sản phẩm không tồn tại</h2>;
  }

  return (
    <div className={styles.productPage}>
      <div className={styles.productContainer}>
        <div className={styles.imageContainer}>
          <img src={`${process.env.PUBLIC_URL}/${product.image}`} alt={product.name} className={styles.productImage} />
        </div>
        <div className={styles.productInfo}>
          <h1 className={styles.productName}>{product.name}</h1>
          <p className={styles.productCode}>Mã sản phẩm: {product.code}</p>
          <p className={styles.productBrand}>Thương hiệu: {product.brand}</p>
          <p className={styles.productPrice}>${product.price}</p>
          <button 
            className={styles.addToCartButton}
            onClick={() => addToCart(product)}
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;