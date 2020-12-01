require('dotenv').config();
import { day01part1, day01part2 } from './2020/01';

const run = async () => {
  console.log('day 1 part 1 : ' + (await day01part1()));
  console.log('day 1 part 2 : ' + (await day01part2()));
};
run();
