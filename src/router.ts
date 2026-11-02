import express from "express";
const router = express.Router();
import membercontroller from "./controllers/member.controller";

/** Member **/
router.post("/member/login", membercontroller.login);
router.post("/member/signup", membercontroller.signup);
router.get("/member/detail", membercontroller.verifyAuth);

/**Product **/

/** Order **/
export default router;