function outerFunction() {
  let outerVariable = "I'm in the outer environment";

  function innerFunction() {
    console.log(outerVariable); // Accessing the outerVariable
  }

  innerFunction();
}

outerFunction();
