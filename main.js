function returningFunc(str) {
  return "This function returns: " + str;
}

function loggingFunc(str) {
  console.log("This function logs: " + str);
}

var someVar = returningFunc("string cheese");
// console.log("someVar = " + someVar);

if (someVar !== undefined)
  console.log("someVar is defined!")

loggingFunc("cheddar cheese");
