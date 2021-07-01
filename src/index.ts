import { day01part1, day01part2 } from './2020/01';
import { day02part1, day02part2 } from './2020/02';
import { day03part1, day03part2 } from './2020/03';
import { day04part1, day04part2 } from './2020/04';
import { day05part1, day05part2 } from './2020/05';

const run = async () => {
  console.log('day 1 part 1 : ' + (await day01part1()));
  console.log('day 1 part 2 : ' + (await day01part2()));
  console.log('day 2 part 1 : ' + (await day02part1()));
  console.log('day 2 part 2 : ' + (await day02part2()));
  console.log('day 3 part 1 : ' + (await day03part1()));
  console.log('day 3 part 2 : ' + (await day03part2()));
  console.log('day 4 part 1 : ' + (await day04part1()));
  console.log('day 4 part 2 : ' + (await day04part2()));
  console.log('day 5 part 1 : ' + (await day05part1()));
  console.log('day 5 part 2 : ' + (await day05part2()));
};
run();
