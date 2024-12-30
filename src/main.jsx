import ShopContextProvider from "./Context/ShopContextProvider.jsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CartContextProvider from "./Context/CartContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ShopContextProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </ShopContextProvider>
);
