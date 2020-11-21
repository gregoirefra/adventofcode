require('dotenv').config();
import { day01part1, day01part2 } from './2019/01';
import { day02part1 } from './2019/02';

const run = async () => {
  console.log('day 1 part 1 : ' + (await day01part1()));
  console.log('day 1 part 2 : ' + (await day01part2()));
  console.log('day 2 part 1 : ' + (await day02part1()));
};
run();
