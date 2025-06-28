
import styles from './styles.module.css';
import { useProducts } from '../../context/ProductContext';
import type { IClickCart } from '../../context/ProductProvider';


//O QUE PRECISO
//------- dados do title,price do produto


export const CompShoppingCart = () => {
  const data = useProducts();
  console.log("Context do shopping cart: " + data);
  return (
    <div className={styles.container}>
      {data.map((product: IClickCart) => {
        return <p>{ product.product.price}</p>
      })}
    </div>
  )
}