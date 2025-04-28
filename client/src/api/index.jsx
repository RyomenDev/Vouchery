import { fetchProduct } from "./scrapperApi.jsx";
import { saveProduct, fetchAllSavedProducts } from "./productsApi.jsx";

import { registerUser, loginUser } from "./authApi.jsx";
import { addNewCoupon, getAllCoupons, updateCoupon } from "./adminApi.jsx";
import { claimSingleCoupon, getCoupons } from "./couponsApi.jsx";

export {
  registerUser,
  loginUser,
  //
  addNewCoupon,
  getAllCoupons,
  updateCoupon,
  //
  claimSingleCoupon,
  getCoupons,
  //
  fetchProduct,
  saveProduct,
  fetchAllSavedProducts,
};
