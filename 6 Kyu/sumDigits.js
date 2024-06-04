function digitalRoot(n) {
  let sum = n.toString().split('').reduce((acc, curr) => Number(acc) + Number(curr), 0);
  while (sum > 9) {
    sum = sum.toString().split('').reduce((acc, curr) => Number(acc) + Number(curr), 0);
  }
  return sum;
}
console.log(digitalRoot(16))
console.log(digitalRoot(172930420))
console.log(digitalRoot(493193))

