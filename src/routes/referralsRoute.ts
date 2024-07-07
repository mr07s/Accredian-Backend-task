import express from "express";
import { referralSubmit } from "../controllers/referrals";

const router = express.Router();
router.post("/submit", referralSubmit);

export default router;
