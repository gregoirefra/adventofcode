import { getChallengeInput } from '../utils/challengeInput';

export async function day03part1() {
  let input = await getChallengeInput('2019', '3');
  input = input.split('\n');
  let path1 = input[0].split(',');
  let path2 = input[1].split(',');
  let coord: [number, number];
  let x: number = 0;
  let y: number = 0;
  for (let move in path1) {
    switch (move[0]) {
      case 'R':
        for (let index = 0; index < +move.substring(1); index++) {
          let newX = index + x;
          coord = [x + index, y];
        }
        break;
      case 'L':
        break;
      case 'D':
        break;
      case 'U':
        break;
    }
  }
}
