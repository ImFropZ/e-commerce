import { createContext } from "react";

interface ICartContext {
  itemsId: Array<string>;
  addCheck: (Id: string) => void;
  removeCheck: (Id: string) => void;
}

export const CartContext = createContext<ICartContext>({
  itemsId: [],
  addCheck: () => {},
  removeCheck: () => {},
});
