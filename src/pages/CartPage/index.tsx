import { Trash2Icon } from 'lucide-react';
import type { IProduct } from '../../context/ProductProvider';
import styles from './styles.module.css';
import React, { type MouseEventHandler } from 'react';

export const CartPage = () => {
  const stored = localStorage.getItem('product');
  const [cart, setCart] = React.useState<IProduct[]>(stored ? JSON.parse(stored) : []);
 
  const handleUpdate = (idToDelete: number): IProduct[] | void=> {
    setCart(prevCart => {
      const updatedCart = prevCart.filter((item) => idToDelete !== item.id);
      return updatedCart;
    });

  }

  React.useEffect(() => {
       localStorage.setItem('product', JSON.stringify(cart));

 }, [cart])
  return (
    <div className={styles.container}>
      <div>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div  className={styles.all} key={`${item.id}-${index}`}>
              <div className={`${styles.product}` }>
                <div>
                  <p>{item.title}</p>
                  <p>R$ {item.price}</p>
                </div>

                <div className={styles.containerQuantity}>
                  <button className={styles.minus}>-</button>
                  <p className={styles.quantity}>1</p>
                  <button className={styles.plus}>+</button>
                </div>
                <div className={styles.trashIcon} onClick={() => handleUpdate(item.id)}>
                  <Trash2Icon />
              </div>
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
