let a = new Date();
let h = a.getHours();
let m= a.getMinutes();
let s = a.getSeconds();
console.log(h,m,s);

setInterval(()=>{
  let a = new Date();
  let h = a.getHours();
  let m= a.getMinutes();
  let s = a.getSeconds();
  console.log(h,m,s);
},1000)