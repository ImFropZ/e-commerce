import { createContext, useContext, useEffect, useState } from "react";
import { fetchCategories, fetchProducts } from "../config/axios";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const ProductContext = createContext<{
  product: Array<Product>;
  category: Array<string>;
}>({
  product: [],
  category: [],
});

export function useProductContext() {
  return useContext(ProductContext);
}

function ProductContextProvider({ children }: { children: React.ReactNode }) {
  const [product, setProduct] = useState<Array<Product>>([]);
  const [category, setCategory] = useState<Array<string>>([]);

  useEffect(() => {
    Promise.all([fetchProducts(), fetchCategories()]).then(
      ([products, categories]) => {
        setProduct(products);
        setCategory(categories);
      }
    );
  }, []);

  const value = { product, category };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export default ProductContextProvider;
