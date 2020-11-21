"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.day01part2 = exports.day01part1 = void 0;
const challengeInput_1 = require("../utils/challengeInput");
async function day01part1() {
    const input = await challengeInput_1.getChallengeInput('2019', '1');
    let fuel = 0;
    for (let module of input.split('\n')) {
        fuel += Math.floor(module / 3) - 2;
    }
    return fuel;
}
exports.day01part1 = day01part1;
function xfuel(i) {
    const f = Math.max(Math.floor(i / 3) - 2, 0);
    return f + (f > 0 ? xfuel(f) : 0);
}
async function day01part2() {
    let input = await challengeInput_1.getChallengeInput('2019', '1');
    return input
        .split('\n')
        .map((n) => xfuel(n))
        .reduce((s, n) => s + n, 0);
}
exports.day01part2 = day01part2;
//# sourceMappingURL=01.js.map