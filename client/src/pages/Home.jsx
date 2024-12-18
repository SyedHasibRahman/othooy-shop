// import BannerProduct from "../components/BannerProduct";
import CategoryList from "../components/CategoryList";
import Hero from "../components/Hero";
import HorizontalCardProduct from "../components/HorizontalCardProduct";
import VerticalCardProduct from "../components/VerticalCardProduct";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <CategoryList />
      <Hero />
      {/* <BannerProduct /> */}
      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpods"} />
      <HorizontalCardProduct
        category={"earphones"}
        heading={"Top's Earphones"}
      />

      <VerticalCardProduct category={"trimmers"} heading={"Trimmers"} />
      <Services />
    </div>
  );
};

export default Home;
