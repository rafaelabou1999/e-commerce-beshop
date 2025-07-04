import React from 'react';
import styles from './styles.module.css';
import { useProducts } from '../../context/ProductContext';
import type { IProduct } from '../../context/ProductProvider';
import { toast } from 'react-toastify';

export const CompProduct = () => {
  const { products, cart, handleCart } = useProducts();
  React.useEffect(() => {
    localStorage.setItem('product', JSON.stringify(cart));
  }, [cart]);
  if (!products) return <div>Loading products...</div>;

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
                onClick={() => {
                  handleCart(product);
                  toast.success(`Product added to cart!`, {
                    className: styles.myToast,
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                  });
                }}
              >
                +
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};
