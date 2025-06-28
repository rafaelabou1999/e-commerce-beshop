import React from 'react';

import styles from './styles.module.css';


export const CompSideNav = () => {
    return(
            <ul className={styles.container}>
                <li className={styles.active}>Hot Deals</li>
                <li>Beauty</li>
                <li>Fragrances</li>
            </ul>
    )

}