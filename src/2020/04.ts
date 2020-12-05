import { getChallengeInput } from '../utils/global/challengeInput';

export async function day04part1() {
  const input = await getChallengeInput('2020', '4');
  let valid: number = 0;
  let password = {};

  for (let line of input.split('\n')) {
    if (line != '') {
      for (let i of line.split(' ')) {
        password[i.split(':')[0]] = i.split(':')[1];
      }
    } else {
      if (
        password['byr'] &&
        password['iyr'] &&
        password['eyr'] &&
        password['hgt'] &&
        password['hcl'] &&
        password['ecl'] &&
        password['pid']
      ) {
        valid++;
        password = {};
      } else {
        password = {};
      }
    }
  }
  return valid;
}

function check(x): boolean {
  try {
    if (
      +x['byr'] >= 1920 &&
      +x['byr'] <= 2002 &&
      +x['iyr'] <= 2020 &&
      +x['iyr'] >= 2010 &&
      +x['eyr'] <= 2030 &&
      +x['eyr'] >= 2020 &&
      ((+x['hgt'].split('cm')[0] >= 150 && +x['hgt'].split('cm')[0] <= 193) ||
        (+x['hgt'].split('in')[0] >= 59 && +x['hgt'].split('in')[0] <= 76)) &&
      x['hcl'].split('').indexOf('#') === 0 &&
      x['hcl'].split('').slice(1).length === 6 &&
      ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].indexOf(x['ecl']) > -1 &&
      typeof +x['pid'] === 'number' &&
      x['pid'].length === 9
    ) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

function checkPassport(x: string): boolean {
  return false;
}
export async function day04part2() {
  const input = await getChallengeInput('2020', '4');
  let valid: number = 0;
  let passports = input.split('\n\n');
  for (let passport of passports) {
    for (let y of passport.split(' ').map(x => x.split('\n'))) {
      for (let yy of y) {
        // checkPassport(([yy.split(':')[0]] = yy.split(':')[1]));
      }
    }
  }
  return valid;
}
