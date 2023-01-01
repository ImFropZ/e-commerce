import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BackIcon, ShareIcon } from "../assets/svg";
import { Hero } from "../components/card";
import { fetchProduct } from "../config/axios";
import { useAuthContext } from "../contexts/AuthContext";
import { useCartContext } from "../contexts/CartContext";
import { Product as TypeProduct } from "../contexts/ProductContext";
import useAlert from "../hooks/useAlert";

function Product() {
  const { id } = useParams();
  const { addItem } = useCartContext();
  const { user } = useAuthContext();
  const { Alert, updateAlert } = useAlert({ type: "FADE" });
  const [product, setProduct] = useState<TypeProduct>();

  const handleCart = () => {
    if (!id) return;
    if (!user) {
      updateAlert({
        type: "ERROR",
        message: "You need to login before add product to your cart.",
      });
      return;
    }
    addItem({ id, name: "Product " + id, quantity: 1, price: 1 });
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

  useEffect(() => {
    fetchProduct(Number(id)).then((res) => {
      setProduct(res);
    });
  }, []);

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
          <Hero className="h-96 shrink-0" image={product?.image || ""} />
          <h1 className="text-2xl">{product?.title}</h1>
          <div className="flex gap-3 items-center">
            <p>Type:</p>
            <p className="px-4 rounded-md bg-secondary cursor-pointer">Red</p>
          </div>
          <div className="mt-2">
            <p className="bg-secondary px-2 py-1 rounded-md sm:min-h-[14rem]">
              {product?.description}
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
