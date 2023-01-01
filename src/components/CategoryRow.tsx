import { useProductContext } from "../contexts/ProductContext";
import { Item } from "./card";

interface ICategoryRow {
  name: string;
}

function CategoryRow(props: ICategoryRow) {
  const { name } = props;
  const { product } = useProductContext();

  const categoryProduct = product.filter((prod) => prod.category === name);

  return (
    <div className="flex flex-col gap-3">
      <div className="capitalize font-bold">{name}</div>
      <div className="flex gap-4 overflow-x-auto scrollbar-style flex-shrink-0 scroll-smooth pb-2">
        {categoryProduct.map((prod, i) => {
          return <Item key={i} product={prod} />;
        })}
      </div>
    </div>
  );
}

export default CategoryRow;
