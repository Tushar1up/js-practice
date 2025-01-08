class Password {
    constructor(word) {
      this.word = word;
    }
  
    generate_strongpassword() {
      console.log(this.word.toUpperCase()); // Corrected to toUpperCase
    }
  
    generate_weakpassword() {
      console.log(this.word.toLowerCase());
    }
  
    generate_superstrongpassword() {
      const specialChars = "!@#$%^&*()_+";
      const randomSpecialChar = specialChars[Math.floor(Math.random() * specialChars.length)];
      const superStrongPassword = this.word.toUpperCase() + randomSpecialChar + Math.floor(Math.random() * 1000);
      console.log(superStrongPassword);
    }
  
    generate_funnypassword() {
      const funnyWords = ["banana", "monkey", "chicken", "nugget"];
      const randomFunnyWord = funnyWords[Math.floor(Math.random() * funnyWords.length)];
      const funnyPassword = this.word + randomFunnyWord;
      console.log(funnyPassword);
    }
  }
  
  let obj = new Password("world");
  obj.generate_strongpassword(); // WORLD
  obj.generate_weakpassword(); // world
  obj.generate_superstrongpassword(); // WORLD@123 (example)
  obj.generate_funnypassword(); // worldbanana (example)