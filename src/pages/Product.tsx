import { useParams } from "react-router-dom";
import { BackIcon, ShareIcon } from "../assets/svg";
import { Hero } from "../components/card";
import { useCartContext } from "../hooks/useCartContext";
import useAlert from "../hooks/useAlert";

function Product() {
  const { id } = useParams();
  const { addItem } = useCartContext();
  const { Alert, updateAlert } = useAlert();

  const handleCart = () => {
    if (!id) return;
    addItem({ id, name: "Product " + id, quantity: 1, price: 1 });
    setTimeout(() => updateAlert(), 3000);
    updateAlert({
      type: "SUCCESS",
      message: "The product has been added to the cart.",
    });
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setTimeout(() => updateAlert(), 3000);
        updateAlert({
          type: "INFO",
          message: "The product link has been copied to your clipboard.",
        });
      })
      .catch(() => {
        alert("Something went wrong.");
      });
  };

  return (
    <>
      <Alert />
      <div className="flex justify-between py-2 px-4 self-start">
        <img
          src={BackIcon}
          alt="BackIcon"
          className="cursor-pointer"
          onClick={() => window.history.back()}
        />
        <img
          src={ShareIcon}
          alt="ShareIcon"
          className="cursor-pointer"
          onClick={handleCopy}
        />
      </div>
      <div className="flex flex-col items-center mb-24">
        <div className="px-3 flex flex-col sm:w-[40rem]">
          <Hero className="h-96 shrink-0" />
          <h1 className="text-2xl">Product Name {id}</h1>
          <div className="flex gap-3 items-center">
            <p>Type:</p>
            <p className="px-4 rounded-md bg-secondary cursor-pointer">Red</p>
          </div>
          <div className="mt-2">
            <p className="bg-secondary px-2 py-1 rounded-md sm:min-h-[14rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              itaque sed nulla asperiores! Molestiae numquam porro iure dolorem
              nobis. Architecto!Lorem ipsum dolor, sit amet consectetur
            </p>
          </div>
          <div className="self-end flex gap-3 mt-2">
            <button className="button" onClick={handleCart}>
              Add to cart
            </button>
            <button className="button">Buy</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
