import { createContext, useContext, useEffect, useState } from "react";
import { Loading } from "../components";
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
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    Promise.all([fetchProducts(), fetchCategories()]).then(
      ([products, categories]) => {
        setProduct(products);
        setCategory(categories);
        setLoading(false);
      }
    );
  }, []);

  const value = { product, category };

  return (
    <ProductContext.Provider value={value}>
      {isLoading ? <Loading /> : children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
