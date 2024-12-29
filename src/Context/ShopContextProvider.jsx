/* eslint-disable react/prop-types */

import all_products from "../Components/Assets/Frontend_Assets/all_product";
import ShopContext from "./ShopContext";

const ShopContextProvider = ({ children }) => {
  const contextValue = { all_products };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
