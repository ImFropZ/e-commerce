import { CartContext } from "../contexts/cartContext";
import { useContext } from "react";

export const useCartContext = () => {
  return useContext(CartContext);
};
