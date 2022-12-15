// A closure is a way of writing a function inside another function that can access and manipulate variables defined
// outside the closure function. Closures are useful because they enable powerful programming techniques, such as
// creating private data and functions that can only be accessed within a certain scope.

// Currying allows you to transform a function that takes multiple arguments into functions that takes each argument one at a time.
// For example, you can convert:

function add_strings(str1, st2) {
  return str1 + st2;
}

// into:

function outer_add_strings(st1) {
  return function inner_add_strings(st2) {
    return st1 + st2;
  };
}

// If you call outer_add_strings('hello')('world'), it will return 'helloworld'. After outer_add_strings is called with the
// first argument, "hello", it will return another function, inner_add_strings, that will take the second argument, "world".
// The second function will remember what the first argument was and will return the concatenation of the two arguments.

// The problem with the count function is that the setTimeout is not being called immediately.
// The for loop will finish executing before the setTimeout function is called, which in return will make the counter variable 3.
// The solution is to call the function immediately in each iteration of the for loop.
// To call the setTimeout function immediately, you will need to create a new closure function that will contain the setTimeout function.
// The new closure function will also takes the argument of the counter variable.
// The code will look like this:

function count() {
  for (let counter = 0; counter < 3; counter++) {
    (function (currentCounter) {
      setTimeout(function () {
        console.log("counter value is " + currentCounter);
      }, 100);
    })(counter);
  }
}

count();

// The for loop will not continue until the setTimeout function is finished being called.