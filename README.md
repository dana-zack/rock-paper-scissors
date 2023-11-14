# rock-paper-scissors
Mod 1: Final solo project

### Abstract:
This application created a "rock paper scissors" game between a user and a computer. The user is the "human" player. On load, the user is presented with two game options: classic or difficult. Classic contains 3 fighter options (rock, paper, scissors) and difficult contains 5 fighter options (rock, paper, scissors, lizard, and alien). Once the user selects their game choice, the corresponding fighter options appear on the screen. The user then selects their fighter and they are taken to a final screen that displays: 1) the user's choice, 2) the computer's choice (randomly generated), and 3) the outcome of the game (i.e. human wins vs. computer wins vs. a draw). If there is a winner, their total "wins" is updated by 1 below their name.

### Installation Instructions:
In order to utilize this application, you can fork the repository, clone it to your local computer, and then run the command "open index.html" in your terminal in order to launch the application to your web browser.

### Preview of App:
https://www.loom.com/share/7b9d178e0ea84e1bba8056186b67b894

### Context:
This project was the final solo project within module 1 for the Turing School of Software & Design Program. We were given 1 week to complete all required aspects of the project.

### Contributors:
I was the sole contributor to this project.

### Learning Goals:
* Solidify and demonstrate my understanding of: 1) DRY JavaScript & 2) event delegation to handle similar event listeners
* Understand the difference between the data model and how the data is displayed on the DOM
* Use my problem solving process to break down large problems, solve things step by step, and trust myself to not rely on an outside “answer” to a logical challenge

### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
My first win for this project was successfully trying a new project approach by thinking out and planning the full data model process prior to incorporating any DOM manipulation. My second win was finessing my HTML and CSS to make them as DRY as possible. My third win was reaching full functionality with my javascript code without any bugs.

A challenge I faced was coming up with a solution for displaying both the selected user fighter choice and the randomly generated computer fighter choice on the final screen. I was able to accomplish this by checking if the event.target was equal to any of the possible fighter choices (listed in an array) and then accessing each fighter's corresponding <img> element by storing them each in a variable and using the eval() property.
