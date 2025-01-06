# Rock, Paper & Scissors Game

## **Overview**
This is a simple **Rock, Paper & Scissors Game** implemented using HTML, CSS, and JavaScript. Players can choose between Rock, Paper, or Scissors, and play against the computer. The game keeps track of the scores and displays the winner of each round with a result message.

---

## **Features**
- User-friendly interface.
- Keeps track of both player and computer scores.
- Displays result messages for each round (Win, Lose, or Draw).
- Real-time interactivity with JavaScript.

---

## **Technologies Used**
- **HTML**: To structure the web page.
- **CSS**: To style the user interface.
- **JavaScript**: To handle game logic and interactivity.

---

## **How to Play**
1. Choose one of the options: **Rock**, **Paper**, or **Scissors** by clicking the corresponding icon.
2. The computer will randomly select its choice.
3. The game compares the player’s and computer’s choices to determine the winner:
   - Rock beats Scissors.
   - Scissors beat Paper.
   - Paper beats Rock.
   - If both choices are the same, it’s a draw.
4. The score and result message are updated after each round.

---

## **File Structure**

- `index.html`: The main HTML file that defines the structure of the web page.
- `style.css`: The CSS file for styling the game interface.
- `app.js`: The JavaScript file that implements the game logic.
- `img/`: Folder containing the images for Rock, Paper, and Scissors.

---

## **Code Explanation**

### **1. HTML Structure**
The HTML defines the layout of the game, including the title, player choices, score display, and result message.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock, Paper & Scissors Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 class="h1">Rock, Paper & Scissors</h1>
    <div class="choices">
        <div class="choice" id="rock">
            <img src="./img/rock.png" alt="rock">
        </div>
        <div class="choice" id="paper">
            <img src="./img/paper.png" alt="paper">
        </div>
        <div class="choice" id="scissor">
            <img src="./img/scissors.png" alt="scissor">
        </div>
    </div>

    <div class="score-board">
        <div class="score">
            <p id="my">0</p>
            <p>YOU</p>
        </div>
        <div class="score">
            <p id="computer">0</p>
            <p>Computer</p>
        </div>
    </div>

    <div class="msg-container">
        <p id="msg">Play Your Move</p>
    </div>
    <script src="app.js"></script>
</body>
</html>
```

---

### **2. CSS Styling**
The CSS provides the visual appearance, making the game more engaging.

```css
* {
    margin: 0;
    padding: 0;
    text-align: center;
}
.h1 {
    background-color: rgb(7, 7, 9);
    color: white;
    height: 5rem;
    line-height: 5rem;
}
.choices {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin-top: 100px;
}
.choice {
    height: 165px;
    width: 165px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.choice:hover {
    background-color: rgb(7, 7, 9);
    cursor: pointer;
}
img {
    height: 150px;
    width: 150px;
    object-fit: cover;
    border-radius: 50%;
}

.score-board {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    margin-top: 3rem;
    gap: 5rem;
}
#my, #computer {
    font-size: 4rem;
}
.msg-container {
    margin-top: 5rem;
}
#msg {
    background-color: rgb(7, 7, 9);
    color: white;
    font-size: 2rem;
    padding: 1rem;
    border-radius: 2rem;
    display: inline;
}
```

---

### **3. JavaScript Logic**
The JavaScript adds interactivity, enabling the player to compete against the computer.

```javascript
let myScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const my = document.querySelector ("#my")
const computer = document.querySelector ("#computer")

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const playGame = (userChoice) => {
    // Generate computer choice
    const computerChoice = genComputerChoice();

    if (userChoice === computerChoice) {
        // Draw Game
        msg.innerText = "Game was Draw. Play Again";
        msg.style.backgroundColor = "gray";
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin === true) {
        myScore++;
        my.innerText = myScore;
        msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computer.innerText = computerScore;
        msg.innerText = `You Lose. ${computerChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
```

---

## **Screenshots**
- **Initial Screen**: User sees Rock, Paper, and Scissors options.
- **After Round**: Score updates and a message is displayed showing the winner.

---

## **How to Run the Game**
1. Clone the repository or download the files.
2. Open the `index.html` file in any web browser.
3. Play the game!
