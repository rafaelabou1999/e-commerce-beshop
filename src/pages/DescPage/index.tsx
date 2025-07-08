import styles from './styles.module.css';

import { useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";

export const DescPage = () => {
  const { products,handleCart } = useProducts();
  const { itemTitle } = useParams();
  console.log(products)
 
  return (
    <div>
      {products
        .filter(product => product.title.toLowerCase() === itemTitle?.toLowerCase())
        .map(product =>  (
          <div className={styles.container}>
            <div className={styles.left}>
              <img className={styles.image} src={product.thumbnail} />
               <button className={styles.btn} onClick={() => handleCart(product)}>Add to cart</button>
            </div>
            <div className={styles.right}>
              <h2 className={styles.title}>{product.title}</h2>
              <p className={styles.desc}>{product.description}</p>
              
              <div className={styles.more}>
                <h4 className={styles.price}>$ {product.price}</h4>
                <p className={styles.tags}><span className={styles.tag}>#{ product.tags[0]}</span> <span className={styles.tag}>#{ product.tags[1]}</span></p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
    
  );
};
