function gerrandom(max) {
  return Math.floor(Math.random() * max);
}
function createpromiseswithloop() {
  return new Promise(function exec(resolve, reject) {
    setTimeout(function exec() {
      let num = gerrandom(10);
      if (num % 2 == 0) {
        //when num is even...then it is fulfill
        resolve(num);
      } else {
        reject(num);
      }
    }, 0);
  });
}
let y = createpromiseswithloop();
console.log(y);
