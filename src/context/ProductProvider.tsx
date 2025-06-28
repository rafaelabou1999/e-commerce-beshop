import React from "react";
import { ProductContext } from "./ProductContext"

export type IClickCart = {
  product: IProduct;
}

export type IProduct= {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    category: string;
};

export const ProductProvider = ({children}: React.PropsWithChildren) => {
   const [data, setData] = React.useState<IClickCart[]>([]);

 
  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://dummyjson.com/products/');
        const json = await response.json();

        setData(json.products);
      } catch (error) {
        console.log("Error fetching data ", error);
      }
    }
    fetchData();
  }, []);
  
  
  return (
    <ProductContext.Provider value={ data }>
        {children}
      </ProductContext.Provider>
  )
}