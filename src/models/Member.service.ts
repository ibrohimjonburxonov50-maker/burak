import MemberModel from "../schema/Member.model";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/types/Errors";
import { MemberType } from "../libs/enums/member.enum";
import * as bcrypt from "bcryptjs";

class MemberService {
    // static processLogin(input: LoginInput) {
    //     throw new Error("Method not implemented.");
    // }
    private readonly memberModdel;

    constructor() {
        this.memberModdel = MemberModel;
    }

    public async processSignup(input: MemberInput): Promise<Member> {
        const exist = await this.memberModdel
            .findOne({ memberType: MemberType.RESTAURANT })
            .exec();
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
            const salt = await bcrypt.genSalt();
            input.memberPassword = await bcrypt.hash(input.memberPassword, salt);

        }

    }
    public static async processLogin(input: LoginInput): Promise<Member> {
        const member = await MemberModel
            .findOne(
                { memberNick: input.membernick },
                { memberPassword: 1, memberNick: 1, })
            .exec();
        if (!member) {
            throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

            const isMatch = await bcrypt.compare(
                input.memberPassword,
                member.memberPassword);
            if (!isMatch) {
                throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
            }
        }
        return await MemberModel
            .findById(member._id).exec();
    }
}

export default MemberService;