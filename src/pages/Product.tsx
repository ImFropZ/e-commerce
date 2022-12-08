import { useParams, useNavigate } from "react-router-dom";
import { BackIcon, ShareIcon } from "../assets/svg";
import { Hero } from "../components/card";

function Product() {
  const nav = useNavigate();
  const { id } = useParams();

  return (
    <>
      <div className="flex justify-between py-2 px-4">
        <img
          src={BackIcon}
          alt="BackIcon"
          className="cursor-pointer"
          onClick={() => nav("/")}
        />
        <img
          src={ShareIcon}
          alt="ShareIcon"
          className="cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            alert(`The link has been copied.`);
          }}
        />
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
          <button className="button">Add to cart</button>
          <button className="button">Buy</button>
        </div>
      </div>
    </>
  );
}

export default Product;
