import { getChallengeInput } from '../utils/challengeInput';

export async function day01part1() {
  const input = await getChallengeInput('2020', '1');
  const expenses = input.split('\n').map((n: number) => +n);
  for (let expense of expenses) {
    let s = 2020 - expense;
    if (expenses.indexOf(s) > -1) {
      return s * expense;
    }
  }
}

export async function day01part2() {
  const input = await getChallengeInput('2020', '1');
  const expenses = input.split('\n').map((n: number) => +n);
  for (let a of expenses) {
    for (let b of expenses) {
      let c = 2020 - a - b;
      if (expenses.indexOf(c) > -1) {
        return a * b * c;
      }
    }
  }
}
