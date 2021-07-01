import { getChallengeInput } from '../utils/global/challengeInput';

export async function day05part1() {
  const input = await getChallengeInput('2020', '5');
  return input
    .split('\n')
    .filter((i: any) => i)
    .map(x => getId(x))
    .reduce((p, c) => (p > c ? p : c));
}

function getId(x: string): number {
  let rowm: number = 0;
  let rowM: number = 127;
  let columnL: number = 0;
  let columnR: number = 7;
  for (let i of x.split('')) {
    switch (i) {
      case 'F':
        rowM = rowM - (rowM - rowm + 1) / 2;
        break;
      case 'B':
        rowm = rowm + (rowM - rowm + 1) / 2;
        break;
      case 'L':
        columnR = columnR - (columnR - columnL + 1) / 2;
        break;
      case 'R':
        columnL = columnL + (columnR - columnL + 1) / 2;
        break;
    }
  }
  return rowm * 8 + columnL;
}
export async function day05part2() {
  const input = await getChallengeInput('2020', '5');
  let p = input
    .split('\n')
    .filter((i: any) => i)
    .map(x => getId(x))
    .sort((a, b) => a - b);
  for (let index = 0; index < p.length; index++) {
    if (p[index + 1] - p[index] === 2) {
      return p[index] + 1;
    }
  }
}
