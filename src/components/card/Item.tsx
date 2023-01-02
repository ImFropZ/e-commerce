import { Link } from "react-router-dom";
import { Product } from "../../contexts/ProductContext";

function Item({ product }: { product: Product }) {
  const { id, title, image } = product;

  return (
    <Link to={`/product/${id}`}>
      <div className="sm:w-36 sm:h-60 w-28 h-36 flex-shrink-0 rounded-lg overflow-hidden relative cursor-pointer">
        <div className="h-full w-full bg-white grid place-items-center">
          <img src={image} alt={title} className="sm:h-1/2 h-3/4 mx-auto" />
        </div>
        <div className="text-black text-lg text-center h-7 w-full bg-secondary absolute bottom-0 grid place-items-center overflow-hidden">
          {title}
        </div>
      </div>
    </Link>
  );
}

export default Item;
