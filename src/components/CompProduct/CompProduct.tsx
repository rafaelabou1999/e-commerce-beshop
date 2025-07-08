import React from 'react';
import styles from './styles.module.css';
import { useProducts } from '../../context/ProductContext';
import type { IProduct } from '../../context/ProductProvider';
import { useNavigate } from 'react-router-dom';

export const CompProduct = () => {
  const { products, cart } = useProducts();
  const navigate = useNavigate();

  React.useEffect(() => {
    localStorage.setItem('product', JSON.stringify(cart));
  }, [cart]);
  if (!products) return <div>Loading products...</div>;

  const handleNavigation = (itemTitle: string) => {
    navigate(`/description/${itemTitle}`);
  };
  return (
    <div className={styles.popular}>
      <div className={styles.containerImgPopular}>
        {products
          .filter((product: IProduct) => product.category === 'beauty')
          .map((product: IProduct) => (
            <div className={styles.image} key={product.id}>
              <div className={styles.shape}></div>
              <img
                className={styles.thumbnail}
                src={product.thumbnail}
                alt={String(product.title)}
              />
              <h3 className={styles.productName}>{product.title}</h3>
              <h4 className={styles.productPrice}>$ {product.price}</h4>

              <button
                className={styles.add}
                onClick={() => handleNavigation(product.title)}
              >
                +
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};
