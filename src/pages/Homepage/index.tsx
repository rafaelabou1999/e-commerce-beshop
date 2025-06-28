import { CompHeader } from '../../components/CompHeader';
import { CompSideNav } from '../../components/CompSideNav';

import styles from './styles.module.css';
import { CompProduct } from '../../components/CompProduct/CompProduct';
import { CompShoppingCart } from '../../components/CompShoppingCart/CompShoppingCart';

export const Homepage = () => {
  return (
    <div>
      <div className={styles.containerHeader}>
        <CompHeader />
        <CompSideNav />

        <main className={styles.main}>
          <CompShoppingCart />
          <CompProduct/>
        </main>
      </div>
    </div>
  );
};
