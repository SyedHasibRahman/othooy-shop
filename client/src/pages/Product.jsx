import HorizontalCardProduct from "../components/HorizontalCardProduct";
import VerticalCardProduct from "../components/VerticalCardProduct";

const Product = () => {
  // http://localhost:8080/api/get-categoryProduct
  return (
    <div>
      <HorizontalCardProduct category={"airpodes"} heading={"Airpods"} />
      <HorizontalCardProduct category={"earphones"} heading={"Earphones"} />
      <VerticalCardProduct category={"trimmers"} heading={"Trimmers"} />
      <VerticalCardProduct category={"Mouse"} heading={"Mouse"} />
      <VerticalCardProduct category={"camera"} heading={"Camera"} />
      <VerticalCardProduct category={"mobiles"} heading={"Mobiles"} />
      <VerticalCardProduct category={"printers"} heading={"Printers"} />
      <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"} />
      <VerticalCardProduct category={"speakers"} heading={"Speakers"} />
      <VerticalCardProduct category={"televisions"} heading={"Televisions"} />
      <VerticalCardProduct category={"watches"} heading={"Watcheh"} />
    </div>
  );
};

export default Product;
