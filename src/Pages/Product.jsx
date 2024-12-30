import { useContext } from "react";

import { useParams } from "react-router-dom";

import ShopContext from "../Context/ShopContext";
import BreadScrum from "../Components/BreadScrum/BreadScrum";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  return (
    <div>
      <BreadScrum product={product} />
    </div>
  );
};

export default Product;
