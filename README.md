# Ludo Board Game

This is a reproduction of the original Ludo Board game as part of my Web Development Bootcamp at IronHack Brazil.

## Acknowledgments

First of all I would like to say THANKS to all my colleagues, my teacher and all IronHack staff to help me achieve the goal of publishing my first iterative game. It was a real challenge for me and all support and fun times shared between us all made all the difference, and for that I'll be aways gratefull!!

## Getting Started

This game works at the browser and does not need any installation.

* Link to run the game in your browser => [HERE](https://henriquegmendes.github.io/Ludo-Game-by-Henrique/).

## Prerequisites

No hardware prerequisites needed. Just run the game and have fun!

## Introduction to the game

Ludo is a strategy board game for two to four players, in which the players race their four tokens from start to finish according to the rolls of a single die. Like other cross and circle games, Ludo is derived from the Indian game [Pachisi](https://en.wikipedia.org/wiki/Pachisi), but simpler. The game and its variations are popular in many countries and under various names.

## Game rules

Since it's my first project, I made adaptations of the original game in order to make it work. Below are the rules for this particular Ludo game and I am also adding a link with the original rules. More details about it in the "Improvements" section of this read.me.

* The game starts with four colors, each one having 4 pieces (pawns).
* Blue color starts the game, being followed by colors yellow, green and red, respectively.
* The game will be played with just one dice.
* In each color's turn, the player must roll the dice and then click in the chosen pawn in order to make the move. A player can only take a piece from the base and put into the game if the dice rolls 1 or 6.
* Once in the board, each piece must run across the board until get to it's "home column squares" (ex.: blue's team "home column squares" is the path in blue color).
* After making it to the "home column squares", the player must roll the dice and get a 6 to move the piece to the home triangle, independent of which square it's located.
* The first player who moves all 4 pieces to the home triangle wins the game.

* Original Rules (there are other rules with some variations, but this one is the most commonly used): [link](https://www.mastersofgames.com/rules/ludo-rules-instructions-guide.htm).

## Game and Coding Improvements

During the project I had to make some adaptations in order to present a functional game. Other implementations couldn't be implemented so far due to the short schedule. Although, there are many improvements that can be made in the came itself and in it's code. Below are some examples:

### GAME IMPROVEMENTS

* Implement a functionality to let players choose how many colors will play before the beginning of the game.
* Implementation of dice rolling function in order to decide which color plays first.
* Fix an issue where a player can move another player's piece after rolling the dice.
* Implement rule of returning a piece to the base if another color's piece stops if the same square.
* Implement rule of blocking the path if a player get 2 pieces (of the same color of course) in the same square. Blocking the path means that the other colors became blocked and won't be able to move along.
* Improve the method to move each piece into the home triangle . If the dice returns a number bigger than the number of steps left to the home triangle, the piece must move inside the home triangle and then go back the remaining steps, until the player rolls the exact number needed.
* Add responsiveness to the game page to improve mobile experience.

### CODE IMPROVEMENTS

* I made the best to write an organized code. Since my initial proposal was to implement this game applying only DOM manipulation methods, my logic is not object oriented and has no use of any frameworks or tools, such as jQuery or Canvas. Probably because of that, I faced many challenges to manipulate all elements properly and made all logic works in the way I wanted (that's why I changed/adapted/ignored some rules). The base of this game was matrix of "DIV" elements placed on a Ludo's Board Image, and all other elements created, such as the buttons pawns and dice, were made in CSS and them manipulated with Javascript.
* The Logic may become simpler if we think about an object oriented solution and use some tools such as Canvas to improve each pawn advance inside the board.
* Also, better animations can be implemented in order to improve the gamer experience (dice roll animation, pawn movement, message boxes, etc.).

## Contributing

Please feel free to fork/clone this repo to look deeper into this funny game and contribute with some of the above improvements if you like. I plan to work on it in the future as well :-)

## Author & Version Control

* **Henrique Guazzelli Mendes** - *Ludo Game Version 0.1* - **Published in Jan-24th of 2019**
