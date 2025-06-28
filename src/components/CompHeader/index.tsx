import React from 'react';

import styles from './styles.module.css';
import { HeartIcon, ShoppingCartIcon } from 'lucide-react';

export const CompHeader = () => {
   return(
    <div style={{backgroundColor: "var(--gray-12)", color: "var(--indigo-1)"}}>
        <div>
            <div className={styles.container}>
                <div>
                    <h1>Electro<span className={styles.dot}>.</span></h1>
                </div>
               
               <div className={styles.containerInput}>
                   <input type="text"/>
                   <button>Search</button>
                </div>
            
                <div className={styles.icons}>
                   <div className={styles.containerIcon}><HeartIcon/> Wishlist <div className={styles.notification}>2</div></div>
                   <div className={styles.containerIcon}><ShoppingCartIcon/> Your cart</div>
                </div>
            </div>
        </div>
        
    </div>
   )
}