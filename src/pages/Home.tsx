import { CategoryRow } from "../components";

function Home() {
  return (
    <div className="flex flex-col mt-3 px-4 gap-3">
      <div className="bg-black w-full h-52 rounded-lg"></div>
      <CategoryRow />
      <CategoryRow />
    </div>
  );
}

export default Home;
