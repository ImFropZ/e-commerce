function Item() {
  return (
    <div className="bg-black w-28 h-36 flex-shrink-0 rounded-lg overflow-hidden relative cursor-pointer">
      <img src="" alt="" />
      <div className="text-black text-xs text-center h-7 w-full bg-secondary absolute bottom-0 grid place-items-center">
        Product Name
      </div>
    </div>
  );
}

export default Item;
