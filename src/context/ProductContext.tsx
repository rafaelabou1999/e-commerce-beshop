import React from "react";
import type { IProductContext } from "./ProductProvider";

export const ProductContext = React.createContext<IProductContext | undefined>(undefined);

export const useProducts = () => {
  const context = React.useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
}