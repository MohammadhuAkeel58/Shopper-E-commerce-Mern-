import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" component={<Shop />} />
          <Route path="/mens" component={<ShopCategory category="men" />} />
          <Route path="/womens" component={<ShopCategory category="women" />} />
          <Route path="/kids" component={<ShopCategory category="kid" />} />

          <Route path="/product" component={<Product />}>
            <Route path=":productId" component={<Product />} />
          </Route>
          <Route path="/cart" component={<Cart />} />
          <Route path="/login" component={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
