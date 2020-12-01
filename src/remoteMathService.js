export const remoteMathService = (cb) => {
  var one, two;
  callOneService(function (err, num) {
    one = num;
  });
  callTwoService(function (err, num) {
    two = num;
  });

  //values of one and two are not available untill both timeouts have executed so using another setTimeout to make sure service 1 and 2 have executed.
  //better way to handle this would be to rewrite callOneService and callTwoService funcitons to use Promises that resolve,
  // and then  remoteMathService function can be used as 'async', where it can 'await' callOneService and callTwoService to resolve
  //before calling the main callback with summed value.

  setTimeout(function () {
    return cb(undefined, one + two);
  }, 2000);
};

function callOneService(cb) {
  setTimeout(function () {
    return cb(undefined, 1);
  }, 1000);
}

function callTwoService(cb) {
  setTimeout(function () {
    return cb(undefined, 2);
  }, 1500);
}

remoteMathService(function (err, answer) {
  if (err) console.log("error ", err);
  if (answer !== 3) {
    console.log("wrong answer", answer);
  } else {
    console.log("correct");
  }
});
