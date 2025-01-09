// program 1

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const printer = async () => {
    await delay(2000);
    console.log("hello");
    await delay(2000);
    console.log("world");
}

// printer();

//program 2

const numbers=[5,5,5];

const average=(a,b,c)=>{
    console.log((a+b+c)/2);
}

// average(...numbers);

// program 3


function third(n) {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("i am resolved");
        }, n);
    }).then((value) => {
        console.log(value);
    });
}

third(2000);