import { Router } from "express";
import sendEmail from "./sendEmail.js";

const router = Router();

router.post("/email", sendEmail);

export default router;
