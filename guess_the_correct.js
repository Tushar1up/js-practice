let max=100 ,min=1;
let randomint =Math.floor(Math.random()*(max-min+1))+min;
console.log(randomint)
let chances =0;
let numberentered;

do {
     numberentered=prompt("enter correct number");
     if(numberentered!=randomint){
        chances++;
        console.log("wrong number");
     } 
   
} while (numberentered!=randomint);

console.log("correct answer");
console.log("score is :" + (100-chances));
