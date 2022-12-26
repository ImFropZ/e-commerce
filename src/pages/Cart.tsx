import { useState } from "react";
import { Link } from "react-router-dom";
import { CartItem } from "../components/card";
import { Product } from "../contexts/cartContext";
import { useCartContext } from "../hooks/useCartContext";

function Cart() {
  const { items } = useCartContext();
  const [checkItems, setCheckItems] = useState<Array<Product>>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value || "");
  };

  return (
    <>
      <div className="flex flex-col pt-3 items-center px-4">
        <input
          type="text"
          placeholder="Search"
          className="rounded-lg w-72 px-2 bg-secondary placeholder:text-black"
          value={searchValue}
          onChange={handleSearch}
        />
        <div className="overflow-y-auto absolute sm:top-32 top-28 bottom-48 px-5 flex flex-col w-full gap-3 sm:w-[40em]">
          {items.map((item) => {
            return item.name
              .toLowerCase()
              .includes(searchValue.toLowerCase()) ? (
              <CartItem
                product={item}
                isChecked={
                  checkItems.findIndex((_item) => _item.id === item.id) !== -1
                }
                key={item.id}
                setCheckItems={setCheckItems}
              />
            ) : null;
          })}
        </div>
      </div>

      <div className="fixed bottom-28 left-0 right-0 flex justify-between px-8 max-w-2xl bg-secondary sm:mx-auto mx-6 py-3 rounded-lg items-center">
        <div>
          Total: $
          {checkItems.reduce((total, item) => {
            return total + item.price * item.quantity;
          }, 0)}
        </div>
        <Link to="/check-out">
          <button
            className="px-4 bg-slate-600 text-white rounded-md disabled:opacity-40"
            disabled={checkItems.length === 0}
          >
            Checkout
          </button>
        </Link>
      </div>
    </>
  );
}

export default Cart;
