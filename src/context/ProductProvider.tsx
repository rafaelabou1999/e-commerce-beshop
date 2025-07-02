import React from "react";
import { ProductContext } from "./ProductContext"

export interface IProductContext extends IProduct{
  products: IProduct[];
  cart: number;
  handleCart: (product: IProduct) => void;
  loading: boolean;
  error: string | null;
}


export interface IProduct {  
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    category: string;
};

export const ProductProvider = ({children}: React.PropsWithChildren) => {
  const [products, setProducts] = React.useState<IProduct[]>([]);
    const [cart, setCart] = React.useState<IProduct[]>([]);
 const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
 
 const handleCart = (product: IProduct) => {
    setCart(prevCart => [...prevCart, product]);
  };

  console.log(typeof products);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://dummyjson.com/products/');
        const json = await response.json();

        setProducts(json.products);
      } catch (error) {
        setError('Error fetching data')
        console.log("Error fetching data ", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  
  const value: IProductContext[] = {
    products,
    cart,
    handleCart,
  };

  return (
    <ProductContext.Provider value={value}>
        {children}
      </ProductContext.Provider>
  )
}