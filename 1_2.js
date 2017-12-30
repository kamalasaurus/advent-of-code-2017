function inverseCaptcha(captcha) {

  console.assert((typeof captcha === 'string'), 'captcha is not a string but rather a', (typeof captcha));

  return captcha
    .split('')
    .reduce((sum, arg, i, arr) => {
      let idx = i + arr.length / 2;
      if (idx >= arr.length)
        idx = idx - arr.length;
      let next = arr[idx];
      return next === arg ?
        sum + +arg :
        sum;
    }, 0);

}

