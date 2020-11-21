import { getChallengeInput } from '../utils/challengeInput';

export async function day01part1() {
  const input = await getChallengeInput('2019', '1');
  let fuel: number = 0;
  for (let module of input.split('\n')) {
    fuel += Math.floor(module / 3) - 2;
  }
  return fuel;
}

function xfuel(i: number): number {
  const f = Math.max(Math.floor(i / 3) - 2, 0);
  return f + (f > 0 ? xfuel(f) : 0);
}

export async function day01part2() {
  let input = await getChallengeInput('2019', '1');

  return input
    .split('\n')
    .map((n: number) => xfuel(n))
    .reduce((s: number, n: number) => s + n, 0);
}
