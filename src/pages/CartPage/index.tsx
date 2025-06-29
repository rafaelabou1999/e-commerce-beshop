import { Trash2Icon } from 'lucide-react';
import type { IProduct } from '../../context/ProductProvider';
import styles from './styles.module.css';
import React from 'react';

export const CartPage = () => {
  const [isDeleted, setDelete] = React.useState(false);
  const stored = localStorage.getItem('product');
  const cartItems: IProduct[] = stored ? JSON.parse(stored) : [];

  const handleDelete = () => {
    setDelete(prev => !prev);
  }
  return (
    <div className={styles.container}>
      <div>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div  className={styles.all}>
              <div className={`${styles.product} ${isDeleted ? styles.hidden : styles.display}` } key={index}>
                <div>
                  <p>{item.title}</p>
                  <p>R$ {item.price}</p>
                </div>

                <div className={styles.containerQuantity}>
                  <button className={styles.minus}>-</button>
                  <p className={styles.quantity}>1</p>
                  <button className={styles.plus}>+</button>
                </div>
              </div>
              <div className={`${styles.trashIcon} ${isDeleted ? styles.hidden : styles.display}` } onClick={handleDelete}>
                <Trash2Icon />
              </div>
            </div>
          ))
        ) : (
          <p>No products</p>
        )}
      </div>
    </div>
  );
};
