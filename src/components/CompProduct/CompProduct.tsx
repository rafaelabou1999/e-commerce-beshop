import React from 'react';
import styles from './styles.module.css';
import { PlusCircleIcon } from 'lucide-react';
import { useProducts } from '../../context/ProductContext';
import type { IProduct } from '../../context/ProductProvider';

export const CompProduct = () => {
  const {products, cart, handleCart,loading,error,setCart} = useProducts();
  
  React.useEffect(() => {
     localStorage.setItem("product", JSON.stringify(cart));
  }, [cart])
  if (!products) return <div>Loading products...</div>;



  return (
    <div className={styles.popular}>
      <div className={styles.containerImgPopular}>
        {products
          .filter((product:  IProduct) => product.category === 'beauty')
          .map((product: IProduct) => (
            <div className={styles.image} key={product.id}>
              <div className={styles.shape}></div>
              <img src={product.thumbnail} alt={String(product.title)} /> 
              <h3 className={styles.productName}>{product.title}</h3>
              <h4 className={styles.productPrice}>R$ {product.price}</h4>
              <button
                className={styles.add}
                onClick={() => handleCart(product)}
              >
                <PlusCircleIcon />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};