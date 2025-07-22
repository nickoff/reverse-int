module.exports = function reverse(num) {
  return Number(
    num > 0
      ? String(num).split('').reverse().join('')
      : String(num * -1)
          .split('')
          .reverse()
          .join('')
  );
};
