import React from 'react';
import styles from './styles.module.css';
import { PlusCircleIcon } from 'lucide-react';
import { useProducts } from '../../context/ProductContext';


//O QUE PRECISO
//------- dados do produto por completo
//- useProducts()



export const CompProduct = () => {
  const {products, handleCart, loading, error} = useProducts();
  if (!products) return <div>Loading products...</div>;

  return (
    <div className={styles.popular}>
      <div className={styles.containerImgPopular}>
        {products
          .filter(product  => product.category === 'beauty')
          .map( product => {
            {
              return (
                <div className={styles.image} key={product.id}>
                  <div className={styles.shape}></div>
                  <img src={product.thumbnail} alt={product.title} />
                  <h3 className={styles.productName}>{product.title}</h3>
                  <h4 className={styles.productPrice}>R$ {product.price}</h4>
                  <button
                    className={styles.add}
                    onClick={() =>handleCart(product)}
                  >
                    <PlusCircleIcon />
                  </button>
                </div>
              );
            }
            return null;
          })}
      </div>
    </div>
  );
};
