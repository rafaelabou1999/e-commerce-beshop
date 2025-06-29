import styles from './styles.module.css';
import { useProducts } from '../../context/ProductContext';
import type { IProduct, IProductContext } from '../../context/ProductProvider';

export const CompShoppingCart = () => {
  const { products, handleCart, loading, error } = useProducts();
  
  return (
    <div className={styles.container}>
      {products.map((product: IProduct) => {
        return (
          <p key={product.id}>{product.price}</p>
        );
      })}
    </div>
  );
};