let turns = 0;
let user_score = 0;
let choices = ["stone", "paper", "scissor"];
let min = 0;
let max = 2;

do {
    // Generate computer's choice
    let computer_answer = choices[Math.floor(Math.random() * (max - min + 1))];

    // Get user's choice
    let user_answer = prompt("Enter stone, paper, or scissor").toLowerCase();

    if (user_answer === computer_answer) {
        // Tie condition
        alert(`It's a tie! Both chose ${computer_answer}`);
    } 
    else if (
        (user_answer === "scissor" && computer_answer === "paper") ||
        (user_answer === "paper" && computer_answer === "stone") ||
        (user_answer === "stone" && computer_answer === "scissor")
    ) {
        // User wins
        user_score++;
        alert(`You win this round! Computer chose ${computer_answer}`);
    } 
    else if (
        (computer_answer === "scissor" && user_answer === "paper") ||
        (computer_answer === "paper" && user_answer === "stone") ||
        (computer_answer === "stone" && user_answer === "scissor")
    ) {
        // Computer wins
        user_score--;
        alert(`You lose this round! Computer chose ${computer_answer}`);
    } 
    else {
        // Invalid input
        alert("Invalid choice. Please enter stone, paper, or scissor.");
        continue; // Skip incrementing turns for invalid input
    }

    turns++;
} while (turns < 10);

// Determine the winner
user_score > 5 ? alert("You won the game!") : alert("Computer won the game!");
