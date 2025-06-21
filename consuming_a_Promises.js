function createapromises() {
  return new Promise(function exec(resolve, reject) {
    console.log("staring...");
    setTimeout(function process() {
      console.log("this is inside the settimeout func", p);
    }, 10000);
    console.log("this is the promises inside");
    reject("DONE");
    resolve("DONE");
  });
}

let p = createapromises();
console.log("execting the promises...", p);
console.log("entering into the consumers promises...");
p.then(
  function fulfillHandler(value) {
    console.log("inside the fulfillhandeler", value);
  },
  function rejectionhandler(value) {
    console.log("inside the rejection handler", value);
  }
);
console.log("exiting the consuming promises");
console.log("ending...");
