let x = 1;
console.log(Object.is(x, -0));
console.log(Object.is(x, 0));
console.log(Math.sign(x));

console.log(1 < 2 < 3);
console.log(1 > 2 > 3);
//NaN
let nanvar = "abc";
console.log((y = Number(nanvar)));
console.log(typeof y);
if (NaN != NaN) {
  console.log(nan);
}
