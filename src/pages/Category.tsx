import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";
import { Item } from "../components/card";

function Category() {
  const { name } = useParams();
  const { product, category } = useProductContext();
  const nav = useNavigate();

  const cateName = name?.split("+").join(" ") || "";

  useEffect(() => {
    if (category.findIndex((cate) => cate === cateName) === -1)
      return nav("/");
  }, []);

  return (
    <>
      <h1 className="capitalize font-bold text-xl pl-3 my-2">
        - {cateName}
      </h1>
      <div className="flex flex-grow flex-wrap justify-center gap-5">
        {product.map((prod) => {
          return prod.category === cateName ? <Item product={prod} /> : null;
        })}
      </div>
    </>
  );
}

export default Category;
