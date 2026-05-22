# 🕹️ Tic-Tac-Toe: Terminal Edition

> This is a simple Tic Tac Toe game made with HTML, CSS, and JavaScript as a stepping stone project for me into Web Development.<br>
[🎮 Play the Live Game Here!](https://atul-tictactoe.surge.sh/)

## 📝 Overview

A fully functional, web-based Tic-Tac-Toe game featuring a sleek, developer-inspired "Clean Terminal" aesthetic. It includes both local multiplayer and a challenging rule-based AI opponent.

## ✨ Features

- **Two Game Modes:**
  - **Player vs Player:** Go head-to-head with a friend locally.
  - **Player vs System:** Test your skills against a custom rule-based AI that actively attempts to win and block your moves.
- **Intelligent AI (System Mode):** The computer evaluates the board state to prioritize winning moves, block immediate threats, and secure strategic placements (center and corners).
- **Dynamic Scoreboard:** Keeps track of total games played, Player X wins, Player O wins, and calculates the overall session leader.
- **Modern UI/UX:**
  - VS Code-inspired "Clean Terminal" dark theme using CSS variables.
  - Responsive layout that scales perfectly on mobile and desktop using `vmin` and Flexbox.
  - Interactive hover states, custom cursors, and distinct color-coding for X and O.
- **Game Controls:** Includes options to Reset the Board, Start a New Game, or End the Game early to view the final session scoreboard.

## 🛠️ Technologies Used

- **HTML5:** Semantic structure and layout.
- **CSS3:** Custom properties (variables), Flexbox, responsive units, and interactive pseudo-classes.
- **Vanilla JavaScript (ES6+):** DOM manipulation, event listeners, state management, and algorithmic game logic.

## 🧠 What I Learned

Building this project was a simple but profound stepping stone for me into Web Development. It was a deep dive into core JavaScript concepts. Key takeaways include:

- **State Management:** Learning how to track variables like whose turn it is, the current score array, and the active game mode without relying on external libraries.
- **DOM Manipulation:** Dynamically updating HTML text, injecting CSS classes for color coordination, and disabling elements based on real-time game conditions.
- **Algorithmic Logic:** Designing the `winPossibility` loop to evaluate array patterns and creating a hierarchical decision tree (Rule-based AI) for the computer opponent.
