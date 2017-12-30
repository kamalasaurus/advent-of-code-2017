function jump(list) {

  console.assert((typeof list === 'string'), 'list is not a string but rather a', (typeof list));

  let instructions = list
    .split('\n')
    .map((num) => parseInt(num))

  let index = 0;
  let steps = 0;

  while (instructions[index] !== undefined) {
    let prevIndex = index;
    [index, steps] = stepAndChange(index, steps, instructions);
    ++instructions[prevIndex];
  }

  return steps;

}

function stepAndChange(index, steps, arr) {

  const nextIndex = index + arr[index];
  const stepsSoFar = steps + 1;

  return [nextIndex, stepsSoFar];

}
