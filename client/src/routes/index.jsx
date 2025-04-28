import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../Layout";

import {
  LoginPage,
  RegisterPage,
  //
  CouponsPage,
  AdminPage,
  CouponsCapture,
  //
  ScrapperPage,
} from "../container";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<ScrapperPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="admin" element={<AdminPage />} />
        {/* <Route path="coupons" element={<CouponsPage />} /> */}
        {/* <Route path="coupon-capture" element={<CouponsCapture />} /> */}
        <Route path="coupons" element={<CouponsCapture />} />
      </Route>
    </Route>
  )
);

export { router };
