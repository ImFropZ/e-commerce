import { Dispatch, SetStateAction, useRef, useState } from "react";
import { Check } from "../../assets/svg";
import { Product } from "../../contexts/CartContext";

type CartItemsProps = {
  product: Product;
  isChecked: boolean;
  setCheckItems: Dispatch<SetStateAction<Array<Product>>>;
  image: string;
};

const CartItem = (props: CartItemsProps) => {
  const { image, product, isChecked, setCheckItems } = props;
  const checkRef = useRef<HTMLInputElement>(null);
  const [isCheck, setCheck] = useState<boolean>(isChecked);

  const handleCheck = () => {
    if (checkRef.current?.checked) {
      setCheckItems((prev) => {
        return [...prev, product];
      });
      setCheck(true);
      return;
    }

    setCheckItems((prev) => {
      return prev.filter((item) => item.id !== product.id);
    });
    setCheck(false);
  };

  return (
    <div className="w-full h-16 bg-secondary p-2 flex justify-between relative rounded-lg items-center">
      <div className="h-full flex items-center gap-3">
        <img
          src={image}
          alt={product.name}
          className="h-full bg-white aspect-square rounded-full overflow-hidden"
        />
        <p className="h-full w-2/3 overflow-hidden">{product.name}</p>
      </div>
      <div className="flex flex-col items-center ml-auto mx-3">
        <div>Quantity</div>
        <span>{product.quantity}</span>
      </div>
      <div className="flex flex-col items-center mx-3">
        <div>Price</div>
        <span>${product.price}</span>
      </div>
      <div>
        <input
          type="checkbox"
          className="opacity-0 absolute w-5 h-5 checkbox z-10 cursor-pointer"
          onChange={handleCheck}
          ref={checkRef}
          checked={isCheck}
        />
        <div className="w-5 h-5 bg-white rounded-full relative">
          <img
            src={Check}
            alt="CheckMark"
            className="absolute scale-150 opacity-0"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
