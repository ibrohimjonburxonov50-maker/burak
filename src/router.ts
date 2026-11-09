import express from "express";
const router = express.Router();
import membercontroller from "./controllers/member.controller";
import uploader from "./libs/utils/uploader";
import productController from "./controllers/product.controller";
import memberController from "./controllers/member.controller";
import orderController from "./controllers/order.controller";

/** Member **/
router.get("/member/restaurant", membercontroller.getRestaurant);
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
router.get("/product/all", productController.getProducts);
router.get("/product/:id",
    memberController.retrieveAuth,
    productController.getProduct
);

/** Order **/
router.post("/order/create",
    memberController.verifyAuth,
    orderController.createOrder
);
router.get("/order/all", memberController.verifyAuth,
    orderController.getMyOrders
);



export default router;