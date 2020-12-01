export const intCode = function (noun: number, verb: number, memory: Array<number>) {
  memory[1] = noun;
  memory[2] = verb;
  let index: number = 0;
  while (memory[index] != 99) {
    if (memory[index] == 1) {
      memory[memory[index + 3]] = memory[memory[index + 1]] + memory[memory[index + 2]];
    } else if (memory[index] == 2) {
      memory[memory[index + 3]] = memory[memory[index + 1]] * memory[memory[index + 2]];
    }
    index += 4;
  }
  return memory[0];
};
