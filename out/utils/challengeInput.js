"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChallengeInput = void 0;
const axios_1 = __importDefault(require("axios"));
exports.getChallengeInput = async function (year, day) {
    const URL = `https://adventofcode.com/${year}/day/${day}`;
    const header = {
        Cookie: process.env['COOKIE'],
    };
    const web = axios_1.default.create({
        baseURL: URL,
        headers: header,
    });
    const response = await web.get('/input');
    return response.data;
};
//# sourceMappingURL=challengeInput.js.map