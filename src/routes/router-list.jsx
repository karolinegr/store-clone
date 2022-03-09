import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/general/not-found";
import RequireAuth from "../pages/general/require-auth";
import Home from "../pages/home";
import Account from "../pages/account";
import ProductItem from "../pages/product-item";
import Signin from "../pages/SignIn/index";

const RouterList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/conta"
        element={
          <RequireAuth>
            <Account />
          </RequireAuth>
        }
      ></Route>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/produto/:slug" element={<ProductItem />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
};

export default RouterList;
