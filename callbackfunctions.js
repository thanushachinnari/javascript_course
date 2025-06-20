function dotask(fn, x) {
  fn(x * x);
}
dotask(function (num) {
  console.log("number is", num);
}, 9);

setTimeout(function exec() {
  //here settimeout is a hod funcrtin ,in the hod function passing a function so
  // it is a higher order function....
  console.log("execute after some time");
}, 5000);
