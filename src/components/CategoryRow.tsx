import { Item } from "./card";

function CategoryRow() {
  return (
    <div className="flex flex-col gap-3">
      <div>CategoryName</div>
      <div className="flex gap-4 overflow-x-auto scrollbar-style flex-shrink-0 scroll-smooth pb-2">
        {Array.from(Array(20), (v, i) => {
          return <Item key={i} id={i.toString()} />;
        })}
      </div>
    </div>
  );
}

export default CategoryRow;
