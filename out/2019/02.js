"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.day02part2 = exports.day02part1 = void 0;
const challengeInput_1 = require("../utils/challengeInput");
async function day02part1() {
    const input = await challengeInput_1.getChallengeInput('2019', '2');
    let intCode = input.split(',');
    intCode[1] = 12;
    intCode[2] = 2;
    // let intCode = [1, 1, 1, 4, 99, 5, 6, 0, 99];
    let index = 0;
    while (intCode[index] != 99) {
        if (intCode[index] == 1) {
            intCode[intCode[index + 3]] = intCode[intCode[index + 1]] + intCode[intCode[index + 2]];
        }
        else if (intCode[index] == 2) {
            intCode[intCode[index + 3]] = intCode[intCode[index + 1]] * intCode[intCode[index + 2]];
        }
        index += 4;
    }
    return intCode[0];
}
exports.day02part1 = day02part1;
async function day02part2() {
    const input = await challengeInput_1.getChallengeInput('2019', '2');
}
exports.day02part2 = day02part2;
//# sourceMappingURL=02.js.map