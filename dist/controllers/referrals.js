"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.referralSubmit = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const referralSubmit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const prisma = new client_1.PrismaClient();
    const formInput = zod_1.z.object({
        eferrer_name: zod_1.z.string().min(5),
        Referrer_email: zod_1.z.string().min(7),
        Referee_name: zod_1.z.string().min(5),
        Referee_email: zod_1.z.string().min(7),
        // refercode,
        courseName: zod_1.z.string().min(5),
    });
    const { success } = formInput.safeParse(req.body);
    if (!success) {
        res.status(411).json({ message: "Invlid input" });
    }
    const { Referrer_name, Referrer_email, Referee_name, Referee_email, 
    // refercode,
    courseName, } = req.body();
    // console.log(
    //   Referrer_name,
    //   Referrer_email,
    //   Referee_name,
    //   Referee_email,
    //   // refercode,
    //   courseName
    // );
    try {
        console.log("request recived");
        const resdata = yield prisma.refferalSchema.create({
            data: {
                Referrer_name,
                Referrer_email,
                Referee_name,
                Referee_email,
                courseName,
            },
        });
        console.log({ resdata });
        res.status(200).send({ success: true, resdata });
    }
    catch (e) {
        res.status(500).send(e);
    }
});
exports.referralSubmit = referralSubmit;
