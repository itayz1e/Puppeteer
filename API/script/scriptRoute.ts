import express from "express";
const router = express.Router();

import { getImages} from "./scriptControl";



router
  .get("/get-images", getImages)

export default router;
