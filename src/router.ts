import express from "express";
const router = express.Router();
import membercontroller from "./controllers/member.controller";

/** Member **/
router.post("/member/login", membercontroller.login);
router.post("/member/signup", membercontroller.signup);
router.post(
    "/member/logout",
    membercontroller.verifyAuth,
    membercontroller.logout
);
router.get(
    "/member/detail",
    membercontroller.verifyAuth,
    membercontroller.getMemberDetail);

/**Product **/

/** Order **/
export default router;