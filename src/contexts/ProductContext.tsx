import { createContext, useContext, useEffect, useState } from "react";
import { fetchProducts } from "../config/axios";

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
    fetchProducts().then((res) => {
      let categoryTmp: Array<string> = [];

      res.forEach((prod) => {
        if (categoryTmp.findIndex((val) => val === prod.category) === -1) {
          categoryTmp = [...categoryTmp, prod.category];
        }
      });

      setProduct(res);
      setCategory(categoryTmp);
    });
  }, []);

  const value = { product, category };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export default ProductContextProvider;
