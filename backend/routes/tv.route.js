import express from "express";
import {
  getTrendingTv,
  getTvTrailers,
  getTvDetails,
  getSimilarTvs,
  getTvsByCategory,
  getTvByTopRated,
} from "../controllers/tv.controller.js";

const router = express.Router();

router.get("/trending", getTrendingTv);
router.get("/:id/trailers", getTvTrailers);
router.get("/:id/details", getTvDetails);
router.get("/:id/similar", getSimilarTvs);
router.get("/:category", getTvsByCategory);
router.get("/:top_rated", getTvByTopRated);

export default router;
