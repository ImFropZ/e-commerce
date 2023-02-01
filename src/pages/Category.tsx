import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Item } from "../components/card";
import { RootState } from "../redux";
import { connect, ConnectedProps } from "react-redux";

function Category({ products, categories }: PropsFromRedux) {
  const { name } = useParams();
  const nav = useNavigate();

  const cateName = name?.split("+").join(" ") || "";

  useEffect(() => {
    if (categories.findIndex((category) => category === cateName) === -1)
      return nav("/");
  }, []);

  return (
    <>
      <h1 className="capitalize font-bold text-xl pl-3 my-2">- {cateName}</h1>
      <div className="flex flex-grow flex-wrap justify-center gap-5">
        {products.map((product) => {
          return product.category === cateName ? (
            <Item product={product} key={product.id} />
          ) : null;
        })}
      </div>
    </>
  );
}

const mapState = (state: RootState) => {
  return {
    products: state.product.data.products,
    categories: state.product.data.categories,
  };
};

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Category);
