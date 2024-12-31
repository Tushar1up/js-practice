// problem 1
console.log("har\"".length);

// problem2
 const str = "hello world  ";

 console.log(str.includes("hello"));
 console.log(str.startsWith("hello"));
 console.log(str.endsWith("hello"));

 // problem 3

 let word =" Venom";

 const uppertolower=(word)=>{
  return  word.toLowerCase().trim();
}

console.log(uppertolower(word)); 

//problem 4

let words = "please give rs 1000"

console.log(words.trim().slice(14));

//problem 5

let boy = "rahul";

boy[4]="h";
console.log(boy);
