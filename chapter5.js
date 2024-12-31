// problem 1
// let numbers=[];

// while(numbers.length<5){
//     answer=prompt("enter elements for array");
//     numbers.push(answer);
//     console.log("number entered");

// }
// console.log(numbers);

// problem 2
// let numbers = [];
// let a;
// do {
//   a = prompt("enter a number");
//   a = Number.parseInt(a);
//   console.log(a);
//   numbers.push(a);
// } while (a != 0);

// console.log(numbers);

//problem 3
// let numbers=[10,20,30,5,6,7];
// let answer =numbers.filter((items,index)=> items%10==0);
// console.log(answer)

//problem 4

// let numbers=[1,2,3,4];

// const answer=numbers.map((items)=>items*items);

// console.log(answer);

//problem 5

let numbers=[1,2,3,4,5];

let total =numbers.reduce((accumlator,currentvalue)=> currentvalue*accumlator);

console.log(total);





