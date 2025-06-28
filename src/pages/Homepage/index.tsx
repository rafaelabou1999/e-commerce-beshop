import React from 'react';
import { CompHeader } from '../../components/CompHeader';
import { CompSideNav } from '../../components/CompSideNav';

import styles from './styles.module.css';

export const Homepage = () => {
   return(
    <>
    <div className={styles.containerHeader}>
        <CompHeader/>
        <CompSideNav/>
    </div>
  
    </>
   )
}