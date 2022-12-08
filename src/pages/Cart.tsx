import { CartItem } from "../components/card";
import { useCartContext } from "../hooks/useCartContext";

function Cart() {
  const { itemsId } = useCartContext();
  console.log(itemsId.length);
  return (
    <>
      <div className="flex flex-col pt-3 items-center px-4">
        <input
          type="text"
          placeholder="Search"
          className="rounded-lg w-72 px-2 bg-secondary placeholder:text-black"
        />
        <div className="w-full h-[70vh] overflow-y-auto mt-2 flex flex-col gap-2">
          {Array.from(Array(20), (v, i) => {
            return <CartItem id={i.toString()} />;
          })}
        </div>
      </div>

      <div className="absolute bottom-28 left-0 right-0 flex justify-between px-8 max-w-2xl bg-secondary sm:mx-auto mx-6 py-3 rounded-lg items-center">
        <div>Total: 50$</div>
        <button
          className="px-4 bg-slate-600 text-white rounded-md disabled:opacity-40"
          disabled={itemsId.length === 0}
        >
          Checkout
        </button>
      </div>
    </>
  );
}

export default Cart;
