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
      <Route path="ourStory" element={<OurStory />} />
      <Route path="contactUs" element={<ContactUs />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
