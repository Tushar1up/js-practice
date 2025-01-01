// problem 1

// let age = prompt("enter your age");
// age >= 18 ? alert("you can drive") : alert("you cannot drive");

//problem 2

// let run = true;

// while (run) {
//   let age = prompt("enter your age");
//   age=Number.parseInt(age);
//   age >= 18 ? alert("you can drive") : alert("you cannot drive");
//   confirm("want to see prompt again")
//     ? prompt("enter your age")
//     : (run = false);
// }

//problem 3

// let run = true;

// while (run) {
//   let age = prompt("enter your age");
//   age = Number.parseInt(age);
//   age >= 18
//     ? alert("you can drive")
//     : age < 0
//     ? console.error("the number entered is  negative ")
//     : alert("you cannot drive");
//   confirm("want to see prompt again")
//     ? prompt("enter your age")
//     : (run = false);
// }

//program 4 

// let age =prompt("enter a number");
//  age = Number.parseInt(age);

//  if(age>4){
//     location.href="https://www.google.com/";
//  }
//  else{
//     console.log("number smaller than 4 ");
//  }

// program 5

let color=prompt("enter a color");
document.body.style.backgroundColor = `${color}`
