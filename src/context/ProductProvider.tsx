import React from 'react';
import { ProductContext } from './ProductContext';

export interface IProductContext {
  products: IProduct[];
  cart: IProduct[];
  handleCart: (product: IProduct) => void;
  loading: boolean;
  error: string | null;
  setCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
  quantity: number;
}

export const ProductProvider = ({ children }: React.PropsWithChildren) => {
  const stored = localStorage.getItem('product');

  const [products, setProducts] = React.useState<IProduct[]>([]);
  const [cart, setCart] = React.useState<IProduct[]>(() => {
    const parsed = stored ? JSON.parse(stored) : [];
    return parsed?.map((item: IProduct) => ({
      ...item,
      quantity: item.quantity || 1,
    }));
  });
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const handleCart = (product: IProduct) => {
    setCart((prevCart: IProduct[]) => {
      try {
        const exist = prevCart.find((item) => item.id === product.id);

        if (exist) {
          return prevCart.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: (item.quantity || 1) + 1,
                }
              : item
          );
        } else {
          return [...prevCart, { ...product, quantity: 1 }];
        }
      } catch (e) {
        console.log(e);
        return prevCart || [];
      }
    });
  };

  console.log(typeof products);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://dummyjson.com/products/');
        const json = await response.json();

        setProducts(json.products);
      } catch (error) {
        setError('Error fetching data');
        console.log('Error fetching data ', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, cart, handleCart, loading, error, setCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};
