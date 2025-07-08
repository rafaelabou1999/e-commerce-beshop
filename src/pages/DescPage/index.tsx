import styles from './styles.module.css';

import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../../context/ProductContext';
import { toast } from 'react-toastify';
import { ArrowLeftCircle } from 'lucide-react';

export const DescPage = () => {
  const { products, handleCart } = useProducts();
  const { itemTitle } = useParams();
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  }
  return (
    <div>
      {products
        .filter(
          (product) => product.title.toLowerCase() === itemTitle?.toLowerCase()
        )
        .map((product) => (
          <div className={styles.container}>
            <div className={styles.left}>
              <img className={styles.image} src={product.thumbnail} />
              <button
                className={styles.btn}
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
                Add to cart
              </button>
            </div>
            <div className={styles.right}>
              <h2 className={styles.title}>{product.title}</h2>
              <p className={styles.desc}>{product.description}</p>

              <div className={styles.more}>
                <h4 className={styles.price}>$ {product.price}</h4>
                <p className={styles.tags}>
                  <span className={styles.tag}>#{product.tags[0]}</span> <span className={styles.tag}>#{product.tags[1]}</span>
                 
                </p>
              </div>
            </div>
            <button className={styles.back} onClick={handleHome}><ArrowLeftCircle size={33} /></button>
          </div>
        ))}
    </div>
  );
};
