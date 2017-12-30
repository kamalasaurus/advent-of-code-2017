function reallocate(banks) {

  console.assert((typeof banks === 'string'), 'banks is not a string, rather a', (typeof banks));

  let steps = 0;
  let history = {};

  let currentState = banks
    .split(/\s+/g)
    .map((num) => parseInt(num));

  while (!history[currentState.join('-')]) {
    [currentState, history] = distribute(currentState, history);
    ++steps;
  }

  return steps;

}

function maxAndIndex(arr) {
  const max = Math.max.apply(null, arr);
  const index = arr.indexOf(max);
  return {max, index};
}

function distribute(arr, hist) {

  const newHist = Object.assign({}, hist, {[arr.join('-')]: true});
  const newState = arr.slice();

  let {max, index} = maxAndIndex(arr);
  let idx = index;

  newState[idx] = 0;

  while (max > 0) {
    if (idx === index && max > 1) idx += 1;
    if (idx === newState.length) idx = 0;

    newState[idx] += 1;
    ++idx;
    --max;
  }

  return [newState, newHist];

}
