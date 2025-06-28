import React from 'react';
import styles from './styles.module.css';
import { PlusCircleIcon } from 'lucide-react';
import { useProducts } from '../../context/ProductContext';
import type { IProduct } from '../../context/ProductProvider';


//O QUE PRECISO
//------- dados do produto por completo
//- useProducts()



export const CompProduct = () => {
  const [cart, setCart] = React.useState<IProduct[]>([]);

  const handleCart = (product: IProduct) => {
    setCart((prev) => [...prev, product]);
  };

  console.log(cart);

  const data = useProducts();
  if (!data) return <div>Loading products...</div>;

  return (
    <div className={styles.popular}>
      <div className={styles.containerImgPopular}>
        {data
          .filter(product  => product.product.category === 'beauty')
          .map( product => {
            {
              return (
                <div className={styles.image} key={product.product.id}>
                  <div className={styles.shape}></div>
                  <img src={product.product.thumbnail} alt={product.product.title} />
                  <h3 className={styles.productName}>{product.product.title}</h3>
                  <h4 className={styles.productPrice}>R$ {product.product.price}</h4>
                  <button
                    className={styles.add}
                    onClick={() => handleCart(product.product)}
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
