import mongoose, { Schema } from "mongoose";
import { OrderStatus } from "../libs/enums/order.enum";

const OrderSchema = new Schema({
    orderTotal: {
        type: Number,
        required: true
    },
    orderDelivery: {
        type: Number,
        required: true
    },
    orderStatus: {
        type: String,
        enum: OrderStatus,
        default: OrderStatus.PROCESS
    },
    memberId: {
        type: Schema.Types.ObjectId,
        ref: "Member",
    },

}, { timestamps: true, collection: "orders" }
);

export default mongoose.model("Order", OrderSchema);