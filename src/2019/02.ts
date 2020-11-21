import { getChallengeInput } from '../utils/challengeInput';

export async function day02part1() {
  const input = await getChallengeInput('2019', '2');
  let intCode = input.split(',');
  intCode[1] = 12;
  intCode[2] = 2;
  // let intCode = [1, 1, 1, 4, 99, 5, 6, 0, 99];
  let index: number = 0;
  while (intCode[index] != 99) {
    if (intCode[index] == 1) {
      intCode[intCode[index + 3]] = intCode[intCode[index + 1]] + intCode[intCode[index + 2]];
    } else if (intCode[index] == 2) {
      intCode[intCode[index + 3]] = intCode[intCode[index + 1]] * intCode[intCode[index + 2]];
    }
    index += 4;
  }
  return intCode[0];
}

export async function day02part2() {
  const input = await getChallengeInput('2019', '2');
}
