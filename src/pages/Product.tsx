import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BackIcon, ShareIcon } from "../assets/svg";
import { Hero } from "../components/card";
import { useAuthContext } from "../contexts/AuthContext";
import { useCartContext } from "../contexts/CartContext";
import { useProductContext } from "../contexts/ProductContext";
import useAlert from "../hooks/useAlert";

function Product() {
  const { id } = useParams();
  const { addItem } = useCartContext();
  const { user } = useAuthContext();
  const { Alert, updateAlert } = useAlert({ type: "FADE" });
  const { product } = useProductContext();

  const _product = product.find((prod) => prod.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCart = () => {
    if (!id) return;
    if (!user) {
      updateAlert({
        type: "ERROR",
        message: "You need to login before add product to your cart.",
      });
      return;
    }
    addItem({
      id: _product?.id || 0,
      name: _product?.title || "",
      quantity: 1,
      price: _product?.price || 0,
    });
    updateAlert({
      type: "SUCCESS",
      message: "The product has been added to the cart.",
    });
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
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
          <div className="h-96 bg-white py-5 rounded-xl shadow-md">
            <Hero image={_product?.image || ""} />
          </div>
          <h1 className="text-2xl">{_product?.title}</h1>
          {/* <div className="flex gap-3 items-center">
            <p>Type:</p>
            <p className="px-4 rounded-md bg-secondary cursor-pointer">Red</p>
          </div> */}
          <div className="mt-2">
            <p className="bg-secondary px-2 py-1 rounded-md sm:min-h-[14rem]">
              {_product?.description}
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
