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

let run = true;

while (run) {
  let age = prompt("enter your age");
  age=Number.parseInt(age);
  age >= 18 ? alert("you can drive") : alert("you cannot drive");
  confirm("want to see prompt again")
    ? prompt("enter your age")
    : (run = false);
}

