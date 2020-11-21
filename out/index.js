"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const _01_1 = require("./2019/01");
const _02_1 = require("./2019/02");
const run = async () => {
    console.log('day 1 part 1 : ' + (await _01_1.day01part1()));
    console.log('day 1 part 2 : ' + (await _01_1.day01part2()));
    console.log('day 2 part 1 : ' + (await _02_1.day02part1()));
};
run();
//# sourceMappingURL=index.js.map