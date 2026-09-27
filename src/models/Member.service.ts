import MemberModel from "../schema/Member.model";
import { Member, MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/types/Errors";
import { MemberType } from "../libs/enums/member.enum";

class MemberService {
    private readonly memberModdel;

    constructor() {
        this.memberModdel = MemberModel;
    }

    public async processSignup(input: MemberInput): Promise<Member> {
        const exist = await this.memberModdel
            .findOne({ memberType: MemberType.RESTAURANT });
        exec();
        console.log("exist:", exist);
        if (exist) {
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        }

        try {
            const result = await this.memberModdel.create(input);
            result.memberPassword = "";
            return result;
        } catch (err) {
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        }
    }
}

export default MemberService;

function exec() {
    throw new Error("Function not implemented.");
}
