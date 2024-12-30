const marks={
    harry:98,
    rohan:70,
    akash:7
}

//problem 1

for(let i=0; i<Object.keys(marks).length;i++){
    console.log("the marks of "+ Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]])
}

//problem 2 

for(key in marks){
    console.log ("the marks of "+key+" are "+marks[key])
}

//problem 3 

let correctnumber=10;
let i;
while(i!=correctnumber){
     i = prompt("enter correct number");
    console.log("try again");
}
console.log("entered correct number");

//problem 4 

const mean =(a,b,c,d,e)=>{
    return (a+b+c+d+e)/5;
}

result = mean(1,2,3,4,5);
console.log("the mean is " + result );