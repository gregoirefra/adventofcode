import { getChallengeInput } from '../utils/global/challengeInput';
import { intCode } from '../utils/2019/intCode';

export async function day02part1() {
  const input = await getChallengeInput('2019', '2');
  let memory = input
    .split('\n')[0]
    .split(',')
    .map((n: string) => Number(n));
  let result = intCode(12, 2, memory);
  return result;
}

export async function day02part2() {
  const input = await getChallengeInput('2019', '2');
  let memory = input
    .split('\n')[0]
    .split(',')
    .map((n: string) => Number(n));
  for (let noun = 1; noun < 100; noun++) {
    for (let verb = 1; verb < 100; verb++) {
      if (intCode(noun, verb, memory) == 19690720) {
        return 100 * noun + verb;
      } else {
        memory = input
          .split('\n')[0]
          .split(',')
          .map((n: string) => Number(n));
      }
    }
  }
}
