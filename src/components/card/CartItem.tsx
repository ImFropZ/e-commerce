import { Dispatch, SetStateAction, useRef, useState } from "react";
import { Check } from "../../assets/svg";
import { Product } from "../../contexts/CartContext";

type CartItemsProps = {
  product: Product;
  isChecked: boolean;
  setCheckItems: Dispatch<SetStateAction<Array<Product>>>;
};

const CartItem = (props: CartItemsProps) => {
  const { product, isChecked, setCheckItems } = props;
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
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.4d7Emr_d4fJnEE6zK7pj_wHaFK%26pid%3DApi&f=1&ipt=cb3186191d8e9e542c4887aea3360b5a83cfc6aa3afbd4b24254091d4fa09d18&ipo=images"
          alt=""
          className="h-full bg-white aspect-square rounded-full overflow-hidden"
        />
        <p>{product.name}</p>
      </div>
      <div className="flex flex-col items-center">
        <div>Quantity</div>
        <span>{product.quantity}</span>
      </div>
      <div className="flex flex-col items-center">
        <div>Price</div>
        <span>${product.price}</span>
      </div>
      <div>
        <input
          type="checkbox"
          className="opacity-0 absolute w-5 h-5 checkbox z-10 cursor-pointer"
          onClick={handleCheck}
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
