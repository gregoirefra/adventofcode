import { getChallengeInput } from '../utils/global/challengeInput';

export async function day02part1() {
  const input = await getChallengeInput('2020', '2');
  let valid: number = 0;
  for (let password of input.split('\n').filter(item => item)) {
    let m = password.split(':')[0].split(' ')[1];
    let min = +password.split(':')[0].split(' ')[0].split('-')[0];
    let max = +password.split(':')[0].split(' ')[0].split('-')[1];
    let pass = +password.split(':')[1].split(m).length - 1;
    if (min <= pass && pass <= max) {
      valid++;
    }
  }
  return valid;
}

function checkPolicy(x: string) {
  let pass = x
    .split(':')[1]
    .split('')
    .filter(i => i != ' ');
  let p1 = +x.split(':')[0].split(' ')[0].split('-')[0];
  let p2 = +x.split(':')[0].split(' ')[0].split('-')[1];
  let c = x.split(':')[0].split(' ')[1];
  if ((pass[p1 - 1] === c || pass[p2 - 1] === c) && pass[p1 - 1] != pass[p2 - 1]) {
    return 1;
  } else {
    return 0;
  }
}

export async function day02part2() {
  const input = await getChallengeInput('2020', '2');
  return input
    .split('\n')
    .filter(i => i)
    .map((x: string) => checkPolicy(x))
    .filter(i => i === 1).length;
}
