//WHOOPS:  did not read the problem closely enough -- the following would always be short if the string
//were all the same value -- the actual problem was a lot simpler than what I imagined

function inverseCaptcha(captcha) {

  console.assert((typeof captcha === 'string'), 'captcha is not a string but rather a', (typeof a));

  let endMatch = /(\d)\1{0,}$/; //  match the final digits, group if same
  let groupMatch = /(\d)\1{1,}/g; // match repeating groups of 2 throughout

  return captcha
    .match(endMatch)
    .slice(0,1)
    .join() // extract final digits
    .concat(
      captcha.replace(endMatch, '')
    ) // shift final digits to beginning for clean circular barrier
    .match(groupMatch) // collect groups
    .reduce((sum, arg) => {
      console.log(arg);
      return sum + (+arg.substring(0,1) * (arg.length - 1));
    }, 0); // default argument in case no matches

}
