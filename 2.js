function checkSum(spreadsheet) {

  console.assert((typeof spreadsheet === 'string'), 'captcha is not a string but rather a', (typeof spreadsheet));

  return spreadsheet
    .split('\n')
    .map((row) => {
      return row
        .split('\t')
        .map((num) => parseInt(num))
        .sort((a, b) => a - b)
        .filter((a, i, arr) => [arr.length, 1].includes(i + 1))
        .reduce(((difference, arg) => Math.abs(difference - arg)), 0);
    })
    .reduce(((sum, check) => sum + check), 0);

}

