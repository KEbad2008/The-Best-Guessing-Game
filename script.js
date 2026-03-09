let secretNumber = Math.floor(Math.random() * 1000) + 1;
let guesses = 0;
const maxGuesses = 6; // Set your desired maximum number of guesses

function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuess").value);
    const resultElement = document.getElementById("result");

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 1000) {
        resultElement.textContent = "Please enter a valid number between 1 and 1000.";
        resultElement.style.color = "black"; // Reset color
    } else {
        guesses++;

        if (userGuess === secretNumber) {
            resultElement.textContent = `Congratulations! You guessed the correct number in ${guesses} ${guesses === 1 ? 'guess' : 'guesses'}!`;
            resultElement.style.color = "lime";
            resetGame();
        } else {
            const hint = userGuess < secretNumber ? "too low" : "too high";
            resultElement.innerHTML = `Try again! Your guess is ${hint}.<br>Guesses left: ${maxGuesses - guesses}.`;
            resultElement.style.color = "gold";

            if (guesses === maxGuesses) {
                resultElement.textContent = `Sorry, you've run out of guesses. The correct number was ${secretNumber}. Better luck next time!`;
                resultElement.style.color = "black";
                resetGame();
            }
        }
    }
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 1000) + 1;
    guesses = 0;
}