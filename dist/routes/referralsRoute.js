"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const referrals_1 = require("../controllers/referrals");
const router = express_1.default.Router();
router.post("/submit", referrals_1.referralSubmit);
exports.default = router;
