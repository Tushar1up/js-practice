let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 3000);
  });
  
  promise.then((value) => {
    console.log(value); // Output: "hello" after 3 seconds
  }).catch((error) => {
    console.log("Error:", error);
  });