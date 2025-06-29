import type { IProduct } from '../../context/ProductProvider';
import styles from './styles.module.css';

export const CompShoppingCart = () => {
  
  const stored = localStorage.getItem('product');
  const cartItems: IProduct[] = stored ? JSON.parse(stored) : [];
  return (
    <div className={styles.container}>
      
        <div>
        {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index}>
            <p>{item.title}</p>
            <p>R$ {item.price}</p>
          </div>
        ))
      ) : (  <p>No products</p>)
          }
        </div>
      
    </div>
  );
};