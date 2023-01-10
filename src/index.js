module.exports = function reverse (n) {
  if (n < 0) {n = -n}
    n = n.toString(10);
  let m = '';
  for (let char of n) {
    m = char + m;
  };
  return m
}

