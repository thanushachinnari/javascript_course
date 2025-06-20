function timesumingbyloop() {
  console.log("loop starts"); //in the call stack  when we call the function...
  // line 2 will execute first after exeute the call pop in that call stack
  for (let i = 0; i < 100; i++) {
    // some task
    console.log("hello");
  }
  console.log("loop ends");
}
timesumingbyloop();
