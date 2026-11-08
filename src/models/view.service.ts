import Errors, { HttpCode, Message } from "../libs/types/Errors";
import { View, ViewInput } from "../libs/types/view";
import ViewModel from "../schema/view.model";

class ViewService {
    private readonly viewModel;

    constructor() {
        this.viewModel = ViewModel;
    }

    public async checkViewExistence(input: ViewInput): Promise<View> {
        const view = await this.viewModel
            .findOne({ memberId: input.memberId, viewRefId: input.viewRefId, })
            .exec();
        if (!view) throw new Error("View not found");
        return view;
    }

    public async insertMemberView(input: ViewInput): Promise<View> {
        const newView = new this.viewModel(input);
        try {
            return await this.viewModel.create(newView);
        } catch (err) {
            console.error("Error saving view:", err);
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        }
    }
}


export default ViewService;