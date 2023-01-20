import { connect, ConnectedProps } from "react-redux";
import { CategoryRow } from "../components";
import { Hero } from "../components/card";
import { RootState } from "../redux";

function Home({ categories }: PropsFromRedux) {
  return (
    <div className="flex flex-col mt-3 px-4 gap-3">
      <div className="shadow-md w-fit self-center">
        <Hero image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.x9IcQEcpuUxuVmubvvHsIwHaE8%26pid%3DApi&f=1&ipt=a1da1a3678207ed5c4139bbc6657702887218c703fa7bde982106c5b754a1333&ipo=images" />
      </div>
      {categories.map((category, i) => (
        <CategoryRow key={i} name={category} />
      ))}
    </div>
  );
}

const mapState = (state: RootState) => {
  return { categories: state.product.data.categories };
};

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Home);
