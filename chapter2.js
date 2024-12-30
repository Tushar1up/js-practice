//problem 1
let age = 10;

age >= 10 && age <= 20
  ? console.log("age lies between 10 and 20")
  : console.log("age not valid");

//problem 2

let day = "monday";

switch (day) {
  case "monday":
    console.log("today is monday");
    break;
  case "tuesday":
    console.log("today is tuesday");
    break;
  case "wednesday":
    console.log("today is wednesday");
    break;
  case "thursday":
    console.log("today is  thursday");
    break;
  case "friday":
    console.log("today is friday");
    break;
  case "saturday":
    console.log("today is saturday");
    break;
  default:
    console.log("today is sunday");
}

//program 3
let number = 6;
number % 2 == 0 && number % 3 == 0
  ? console.log("number divisible by both 2 and 3")
  : console.log("not divisible by 2 and 3");

//progrma 4
let thisnumber = 2;
number % 2 == 0 || number % 3 == 0
  ? console.log("number divisible either  2 or 3")
  : console.log("not divisible by 2 and 3");

//program 5
let thisage =18;
(thisage>=18? console.log("you can drive"):console.log("you cannot drive"));