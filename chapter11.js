// progrm 1
// class complex{
//     constructor(real,imaginary){
//         this.real = real
//         this.imaginary=imaginary
//     }
//     add(num){
//         this.real = this.real+num.real
//         this.imaginary=this.imaginary+num.imaginary
//     }
// }

// let a = new complex(2,4)
// let b = new complex(6,2)
// a.add(b);
// console.log(`${a.real}+${a.imaginary}i`);


// program2
class human{
    tell(){
        console.log("i am human");
    }
}

class student extends human{
    tell(){
        console.log("i am student");
    }
}

let obj = new student;
obj.tell()

console.log(obj instanceof human)