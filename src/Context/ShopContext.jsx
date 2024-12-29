/* eslint-disable react/prop-types */
import all_products from "../data/products.json";
import { createContext } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { all_products };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
