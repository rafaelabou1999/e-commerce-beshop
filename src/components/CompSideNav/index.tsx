import React from 'react';

import styles from './styles.module.css';


export const CompSideNav = () => {
    return(
            <ul className={styles.container}>
                <li className={styles.active}>Home</li>
                <li>Hot Deals</li>
                <li>Categories</li>
                <li>Laptops</li>
                <li>Smartphones</li>
                <li>Cameras</li>
                <li>Accessories</li>
            </ul>
    )

}