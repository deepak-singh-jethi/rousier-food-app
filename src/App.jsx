import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import Root from "./RouterLayout/Root";
import Home from "./components/Home/Home";
import LetsCook from "./RouterLayout/LetsCook";
import Community from "./RouterLayout/Community";
import OurStory from "./RouterLayout/OurStory";
import ContactUs from "./RouterLayout/ContactUs";
import Blogs from "./components/Blogs";
import Recipie from "./components/Recipie";
import ShopLayout from "./RouterLayout/ShopLayout";
import Cart from "./components/Cart";
import ProductDetail from "./RouterLayout/ProductDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="letsCook">
        <Route index element={<LetsCook />}></Route>
        <Route path=":id" element={<Recipie />} />
      </Route>
      <Route path="community">
        <Route index element={<Community />}></Route>
        <Route path=":id" element={<Blogs />} />
      </Route>
      <Route path="shop">
        <Route index element={<ShopLayout />} />
        <Route path=":category" element={<ShopLayout />} />
        <Route path="product/:id" element={<ProductDetail />} />
      </Route>

      <Route path="ourStory" element={<OurStory />} />
      <Route path="contactUs" element={<ContactUs />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
