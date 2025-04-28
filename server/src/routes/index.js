import express from "express";
const router = express.Router();

import scrapperRoutes from "./scrapper.routes.js";
import productRoutes from "./products.routes.js";
import authRoutes from "./auth.routes.js";
import adminRoutes from "./admin.routes.js";
import couponRoutes from "./coupon.routes.js";

router.use("/scrape", scrapperRoutes);
router.use("/products", productRoutes);
router.use("/auth", authRoutes);
router.use("/admin", adminRoutes);
router.use("/coupons", couponRoutes);

export default router;
