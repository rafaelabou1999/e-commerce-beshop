import React, { createContext, type PropsWithChildren } from "react";

export type IProduct = {
    id: number;
    title:string;
    price:number;
    thumbnail:string;
    category: string;
}

export const DataContext = createContext<IProduct[] | null>(null);

export const DataContextProvider = ({children}: PropsWithChildren) => {
  const [data, setData] = React.useState<IProduct[] | null>(null);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://dummyjson.com/products/');
      const json = await response.json();

      setData(json.products);
  }

  fetchData();
  },[])



  return (
    <div>
    <DataContext.Provider value={data}>
        {children}
      </DataContext.Provider>
    </div>
  )
}
