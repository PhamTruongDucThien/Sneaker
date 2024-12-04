import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import styles from '../styles/CartPage.module.css';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCheckout = () => {
    setShowSuccess(true);
    clearCart();
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Giỏ hàng của bạn</h1>
      {cart.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img src={item.image} alt={item.name} className={styles.cartImage} />
            <div className={styles.productDetails}>
              <h3>{item.name}</h3>
              <p>{item.price} USD</p>
              <div className={styles.quantityControls}>
                <button
                  className={styles.button}
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className={styles.button}
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <button
                className={styles.button}
                onClick={() => removeFromCart(item.id)}
              >
                Xóa
              </button>
            </div>
          </div>
        ))
      )}
      <button className={styles.checkoutButton} onClick={handleCheckout}>Thanh toán</button>

      {showSuccess && (
        <div className="success-modal">
          <div className="success-content">
            <h2>Giao dịch thành công!</h2>
            <p>Cảm ơn bạn đã mua hàng</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;