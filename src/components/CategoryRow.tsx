import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../redux";
import { Item } from "./card";

interface ICategoryRow extends PropsFromRedux {
  name: string;
}

function CategoryRow(props: ICategoryRow) {
  const { name, products } = props;

  return (
    <div className="flex flex-col gap-3">
      <div className="capitalize font-bold">{name}</div>
      <div className="flex gap-4 overflow-x-auto scrollbar-style flex-shrink-0 scroll-smooth pb-2">
        {products.map((product, i) => {
          return product.category === name ? (
            <Item key={i} product={product} />
          ) : null;
        })}
      </div>
    </div>
  );
}

const mapState = (state: RootState) => {
  return {
    products: state.product.data.products,
  };
};

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CategoryRow);
