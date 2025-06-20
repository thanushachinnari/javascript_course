function f(x, fn) {
  fn();
  console.log(x);
  console.log("this is a higher oder function");

  console.log(x);
}
f(10, function exec() {
  console.log("iam an expersion passed to a hof");
});
