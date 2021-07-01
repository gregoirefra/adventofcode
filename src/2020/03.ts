import { getChallengeInput } from '../utils/global/challengeInput';

export async function day03part1() {
  const input = await getChallengeInput('2020', '3');
  return checkTree(
    3,
    1,
    input.split('\n').filter((i: any) => i),
  );
}

function checkTree(x: number, y: number, map: any): number {
  let tree: number = 0;
  let xc: number = x;
  for (let i = y; i < map.length; i = i + y) {
    if (map[i].split('')[xc] === '#') {
      tree++;
    }
    if (map[i].split('').length - x > xc) {
      xc = xc + x;
    } else {
      xc = xc + x - map[i].split('').length;
    }
  }
  return tree;
}

export async function day03part2() {
  const input = await getChallengeInput('2020', '3');
  return (
    checkTree(
      1,
      1,
      input.split('\n').filter((i: any) => i),
    ) *
    checkTree(
      3,
      1,
      input.split('\n').filter((i: any) => i),
    ) *
    checkTree(
      5,
      1,
      input.split('\n').filter((i: any) => i),
    ) *
    checkTree(
      7,
      1,
      input.split('\n').filter((i: any) => i),
    ) *
    checkTree(
      1,
      2,
      input.split('\n').filter((i: any) => i),
    )
  );
}
