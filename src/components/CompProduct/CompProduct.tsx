import React from 'react';
import styles from './styles.module.css';
import { PlusCircleIcon } from 'lucide-react';
import { useProducts } from '../../context/ProductContext';
import type { IProduct } from '../../context/ProductProvider';

export const CompProduct = () => {
  
  const [cart, setCart] = React.useState<IProduct[]>(() => {
    const storedProduct = localStorage.getItem('product');
    return storedProduct ? JSON.parse(storedProduct) : [];
  });
  
  React.useEffect(() => {
     localStorage.setItem("product", JSON.stringify(cart));
  }, [cart])

  const { products }  = useProducts();
  if (!products) return <div>Loading products...</div>;

  
  const handleCart = (product: IProduct) => {
    setCart(prev => [...prev, product])
  };

  
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