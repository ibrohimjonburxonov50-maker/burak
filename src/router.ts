import express from "express";
const router = express.Router();
import membercontroller from "./controllers/member.controller";
import uploader from "./libs/utils/uploader";

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
    membercontroller.getMemberDetail
);
router.post("/member/update",
    membercontroller.verifyAuth,
    uploader("members").single("memberImage"),
    membercontroller.updateMember
);

router.get("/member/top-users", membercontroller.getTopUsers);

/**Product **/

/** Order **/
export default router;