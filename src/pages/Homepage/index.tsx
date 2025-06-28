import React from 'react';
import { CompHeader } from '../../components/CompHeader';
import { CompSideNav } from '../../components/CompSideNav';

import styles from './styles.module.css';
import { DataContext, type IProduct } from '../../DataContextProvider';
import { PlusCircleIcon } from 'lucide-react';

export const Homepage = () => {
   const data = React.useContext(DataContext);

    console.log(data)

   return(
    <div>
        <div className={styles.containerHeader}>
            <CompHeader/>
            <CompSideNav/>

    <main className={styles.main}>
    {!data ?  (<p>Loading...</p>) : (
        <div className={styles.popular}>
                <div className={styles.containerImgPopular}>
                    
                   
                {data.map((product: IProduct) => {
                const chosenCategory = "beauty";
                
                if(product.category === chosenCategory){
                 return (
                 <div className={styles.image} key={product.id}>
                    <div className={styles.shape}></div>
                     <img src={product.thumbnail}/>
                     <h3 className={styles.productName}>{product.title}</h3>
                     <h4 className={styles.productPrice}>R$ {product.price}</h4>
                     <div className={styles.add}><PlusCircleIcon/></div>
                 </div>
                 )
                } 
               })} 
        
                </div>
        </div>
    )}
    </main>
            
            
        </div>
    </div>
   )
}