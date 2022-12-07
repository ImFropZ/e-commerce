import { CategoryRow } from "../components";
import { Hero } from "../components/card";

function Home() {
  return (
    <div className="flex flex-col mt-3 px-4 gap-3">
      <Hero className="sm:h-96 h-60"/>
      <CategoryRow />
      <CategoryRow />
    </div>
  );
}

export default Home;
