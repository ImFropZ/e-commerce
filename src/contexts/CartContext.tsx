import React, { createContext, useState } from "react";
import { useContext } from "react";

export type Product = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

interface ICartContext {
  items: Array<Product>;
  addItem: (item: Product) => void;
  removeItem: ({ id }: Product) => void;
}

const CartContext = createContext<ICartContext>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [items, setItems] = useState<Array<Product>>([]);

  const value = {
    items,
    addItem: (item: Product) => {
      const itemIndex = items.findIndex((_item) => _item.id === item.id);

      if (itemIndex !== -1) {
        setItems((prev) => {
          prev[itemIndex].quantity++;
          return prev;
        });
        return;
      }
      setItems((prev) => {
        return [...prev, item];
      });
    },
    removeItem: ({ id }: Product) => {
      const itemIndex = items.findIndex((_item) => _item.id === id);

      if (itemIndex !== -1 && items[itemIndex].quantity !== 1) {
        setItems((prev) => {
          prev[itemIndex].quantity--;
          return prev;
        });
        return;
      }

      setItems((prev) => {
        return prev.filter((item) => item.id !== id);
      });
    },
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
