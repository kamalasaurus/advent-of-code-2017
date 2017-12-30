function inverse(captcha) {

  console.assert((typeof captcha === 'string'), 'captcha is not a string but rather a', (typeof a));

  return captcha
    .split('')
    .reduce((sum, arg, i, arr) => {
      let next = arr[i + 1] || arr[0];
      return next === arg ?
        sum + +arg :
        sum;
    }, 0);

}

