import { createContext } from "react";

export type Product = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

interface ICartContext {
  items: Array<Product>;
  addItem: (item: Product) => void;
  removeItem: ({ id }: Product) => void;
}

export const CartContext = createContext<ICartContext>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});
