let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn")
let newGameBtn = document.querySelector("#new-btn")
let continueGameBtn = document.querySelector("#continue-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let game = document.querySelector("#games")
let xWin = document.querySelector("#x-wins")
let oWin = document.querySelector("#o-wins")
let overallWinner = document.querySelector("#overall-winner")
let mode1 = document.querySelector("#mode1")
let mode2 = document.querySelector("#mode2")
let mainGame = document.querySelector(".main-game")
let welcome = document.querySelector(".welcome-screen")
let turnO = true //playerX, playerO
let system = true //System as player
let score = [0, 0, 0] //[games,O-wins,X-wins]
const winPatterns = [
  //wining Patterns
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const checkOrder = [4, 0, 2, 6, 8, 1, 3, 5, 7] //System box choosing order
const resetGame = () => {
  //Brings you back toh welcome screen
  resetBoard()
  score[0] = 0
  score[1] = 0
  score[2] = 0
  system = false
  welcome.classList.remove("hide")
  mainGame.classList.add("hide")
}

const resetBoard = () => {
  //clears the game board without effecting scores
  enableBoxes()
  turnO = true
  msgContainer.classList.add("hide")
}

const winPossibility = (player) => {
  /**checks if someone is 1 move away from win
   * Logic used when System is the second player
   */
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText
    let pos2 = boxes[pattern[1]].innerText
    let pos3 = boxes[pattern[2]].innerText
    if (pos1 !== "" && pos2 !== "" && pos3 === "") {
      if (pos1 === pos2 && pos1 === player) {
        boxes[pattern[2]].innerText = "X"
        boxes[pattern[2]].classList.add("player-x")
        boxes[pattern[2]].disabled = true
        return true
      }
    } else if (pos1 !== "" && pos2 === "" && pos3 !== "") {
      if (pos1 === pos3 && pos1 === player) {
        boxes[pattern[1]].innerText = "X"
        boxes[pattern[1]].classList.add("player-x")
        boxes[pattern[1]].disabled = true
        return true
      }
    } else if (pos1 === "" && pos2 !== "" && pos3 !== "") {
      if (pos2 === pos3 && pos2 === player) {
        boxes[pattern[0]].innerText = "X"
        boxes[pattern[0]].classList.add("player-x")
        boxes[pattern[0]].disabled = true
        return true
      }
    }
  }
  return false
}
const playSystem = () => {
  //System Logic for its move
  if (winPossibility("X")) return
  else if (winPossibility("O")) return
  else {
    for (let val of checkOrder) {
      if (boxes[val].innerText === "") {
        boxes[val].innerText = "X"
        boxes[val].classList.add("player-x")
        boxes[val].disabled = true
        return
      }
    }
  }
}

boxes.forEach((box) => {
  //main game logic
  box.addEventListener("click", () => {
    if (turnO) {
      //Standard player O move
      box.innerText = "O"
      box.classList.add("player-o")
      box.disabled = true
      turnO = false //manual flip for standard-2player
      if (checkWinner()) return //checks if player O won
      if (system) {
        //System makes a move(mode 2)
        playSystem()
        checkWinner()
        turnO = true
      } else turnO = false
    } else {
      //Standard Player X move (for mode 1)
      box.innerText = "X"
      box.classList.add("player-x")
      turnO = true
      box.disabled = true
      checkWinner()
    }
  })
})

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true
  }
}
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false
    box.innerText = ""
    box.classList.remove("player-x", "player-o")
  }
}

const scoreBoard = (winner) => {
  //Updates Score Board
  score[0]++
  if (winner === "X") score[2]++
  else if (winner === "O") score[1]++
  game.innerText = `Games Played : ${score[0]}`
  xWin.innerText = `Games won by Player X : ${score[2]}`
  oWin.innerText = `Games won by Player O : ${score[1]}`
  if (score[1] > score[2]) {
    overallWinner.innerText = "Overall Game Winner : Player O"
  } else if (score[1] < score[2]) {
    overallWinner.innerText = "Overall Game Winner : Player X"
  } else {
    overallWinner.innerText = "Overall Game Winner : Game is currently Tied"
  }
  showWinner(winner)
}

const showWinner = (winner) => {
  //shows current winner when a game ends
  msg.innerText = `Congratulations, Current Game Winner is ${winner}`
  msgContainer.classList.remove("hide")
  disableBoxes()
}

const checkWinner = () => {
  //Game logic to check if someone has won
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText
    let pos2 = boxes[pattern[1]].innerText
    let pos3 = boxes[pattern[2]].innerText
    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos1 === pos3) {
        scoreBoard(pos1)
        return true
      }
    }
  }
  return false
}

newGameBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetBoard)
continueGameBtn.addEventListener("click", resetBoard)
mode1.addEventListener("click", () => {
  system = false
  welcome.classList.add("hide")
  mainGame.classList.remove("hide")
})
mode2.addEventListener("click", () => {
  system = true
  welcome.classList.add("hide")
  mainGame.classList.remove("hide")
})
