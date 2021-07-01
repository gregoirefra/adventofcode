import { getChallengeInput } from '../utils/global/challengeInput';

export async function day01part1() {
  const input = await getChallengeInput('2020', '1');
  const expenses = input.split('\n').map(Number);
  for (let expense of expenses) {
    if (expenses.indexOf(2020 - expense) > -1) {
      return (2020 - expense) * expense;
    }
  }
}

export async function day01part2() {
  const input = await getChallengeInput('2020', '1');
  const expenses = input.split('\n').map(Number);
  for (let a of expenses) {
    for (let b of expenses) {
      if (expenses.indexOf(2020 - a - b) > -1) {
        return a * b * (2020 - a - b);
      }
    }
  }
}
