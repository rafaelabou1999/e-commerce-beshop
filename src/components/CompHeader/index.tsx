import React from 'react';
import styles from './styles.module.css';
import { HeartIcon, ShoppingCartIcon } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export const CompHeader = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoLink}>
          <h1 className={styles.logo}>
            BeShop<span className={styles.dot}>.</span>
          </h1>
        </Link>

        <nav className={styles.navIcons}>
          <button 
            className={styles.iconButton}
            aria-label="Wishlist"
          >
            <HeartIcon className={styles.icon} />
            <span>Wishlist</span>
            <span className={styles.notification}>2</span>
          </button>
          
          <button 
            className={styles.iconButton}
            onClick={() => navigate('/cart')}
            aria-label="Your cart"
          >
            <ShoppingCartIcon className={styles.icon} />
            <span>Your cart</span>
          </button>
        </nav>
      </div>
    </header>
  );
};