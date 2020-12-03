require('dotenv').config();
import { day01part1, day01part2 } from './2020/01';
import { day02part1, day02part2 } from './2020/02';
import { day03part1, day03part2 } from './2020/03';

const run = async () => {
  console.log('day 1 part 1 : ' + (await day01part1()));
  console.log('day 1 part 2 : ' + (await day01part2()));
  console.log('day 2 part 1 : ' + (await day02part1()));
  console.log('day 2 part 2 : ' + (await day02part2()));
  console.log('day 3 part 1 : ' + (await day03part1()));
  console.log('day 3 part 2 : ' + (await day03part2()));
};
run();
