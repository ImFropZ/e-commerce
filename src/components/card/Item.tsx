import { Link } from "react-router-dom";
import { Product } from "../../contexts/ProductContext";

function Item({ product }: { product: Product }) {
  const { id, title, image } = product;

  return (
    <Link to={`/product/${id}`}>
      <div className="w-28 h-36 flex-shrink-0 rounded-lg overflow-hidden relative cursor-pointer">
        <img src={image} alt="" className="h-full w-full bg-black" />
        <div className="text-black text-xs text-center h-7 w-full bg-secondary absolute bottom-0 grid place-items-center">
          {title}
        </div>
      </div>
    </Link>
  );
}

export default Item;
