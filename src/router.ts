import express from "express";
const router = express.Router();
import membercontroller from "./controllers/member.controller";

router.post("/login/process", membercontroller.login);
router.post("/signup", membercontroller.signup);

export default router;