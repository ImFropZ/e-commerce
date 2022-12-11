import { createContext } from "react";

export type Product = {
  id: string;
  quantity: number;
  price: number;
};

interface ICartContext {
  items: Array<Product>;
  addCheck: (item: Product) => void;
  removeCheck: ({ id }: Product) => void;
}

export const CartContext = createContext<ICartContext>({
  items: [],
  addCheck: () => {},
  removeCheck: () => {},
});
