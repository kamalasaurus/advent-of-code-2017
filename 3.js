function spiralDistance(number) {

  console.assert((number > 0), 'number is not greater than zero');

  // calculate the next shell past the number coord
  let distance = number - 1; // starts at one, so set to zero
  let shell = 0;

  do {
    if (shell === 0)
      distance = distance - 1;
    else
      distance = distance - (8 * shell);
    ++shell;
  } while (distance > 0)

  // go backwards to get closest corner before coord
  // offset by one before the corner
  do {
    if (shell === 1)
      distance = distance + 1;
    else
      distance = distance + (2 * (shell - 1));
  } while (distance < 0)

  // set the shell distance of the coord since we went past
  --shell;
  // set the distance to a corner since we're offset by 1
  if (distance !== 0) ++distance;

  // this ends up being orthogonal distance + distance to nearest centerline
  return shell + Math.abs(distance - shell);

}
