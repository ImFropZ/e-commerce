import { useParams } from "react-router-dom";
import { BackIcon, ShareIcon } from "../assets/svg";
import { Hero } from "../components/card";
import { useCartContext } from "../hooks/useCartContext";

function Product() {
  const { id } = useParams();
  const { addItem } = useCartContext();

  const handleCart = () => {
    if (!id) return;
    addItem({ id, name: "Product " + id, quantity: 1, price: 1 });
  };

  return (
    <>
      <div className="flex justify-between py-2 px-4">
        <img
          src={BackIcon}
          alt="BackIcon"
          className="cursor-pointer"
          onClick={() => window.history.back()}
        />
        {/* TODO: Check on Share show URL modal */}
        <img src={ShareIcon} alt="ShareIcon" className="cursor-pointer" />
      </div>
      <div className="px-3 flex flex-col">
        <Hero className="h-96 shrink-0" />
        <h1 className="text-2xl">Product Name {id}</h1>
        <div className="flex gap-3 items-center">
          <p>Type:</p>
          <p className="px-4 rounded-md bg-secondary cursor-pointer">Red</p>
        </div>
        <div className="mt-2">
          <p className="bg-secondary px-2 py-1 rounded-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            itaque sed nulla asperiores! Molestiae numquam porro iure dolorem
            nobis. Architecto!
          </p>
        </div>
        <div className="self-end flex gap-3 mt-2">
          <button className="button" onClick={handleCart}>
            Add to cart
          </button>
          <button className="button">Buy</button>
        </div>
      </div>
    </>
  );
}

export default Product;
