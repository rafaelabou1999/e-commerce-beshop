import React from 'react';
import styles from './styles.module.css';
import { PlusCircleIcon } from 'lucide-react';
import { useProducts } from '../../context/ProductContext';
import type { IProduct, IProductContext } from '../../context/ProductProvider';

export const CompProduct = () => {
  const { products }  = useProducts();
  const [cart, setCart] = React.useState<string[]>((): string[]=> {
    const storedProduct = localStorage.getItem('product');
    return storedProduct ? JSON.parse(storedProduct) : [];
  });
  
  if (!products) return <div>Loading products...</div>;

  const handleCart = (product: IProduct) => {
    setCart((prevCart) => {
      const newCart = [...prevCart, product]
      localStorage.setItem("product", JSON.stringify(newCart));
      return newCart;
    })
  };

  return (
    <div className={styles.popular}>
      <div className={styles.containerImgPopular}>
        {products
          .filter((product:  IProduct) => product.category === 'beauty')
          .map((product) => (
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