//global variables
var win = 0;
var lose = 0;
var tie = 0;
var again = true;
var computer = ["r", "p", "s"]; //holds computer choices

//while user wants to keep playing, do so
while (again) {

var choice = window.prompt("Do you want R, P, or S?").toLowerCase(); //prompt user for answer

    while (!computer.includes(choice)) {
        choice = window.prompt("Do you want R, P, or S?");
        choice = choice.toLowerCase();
    }

    var compChoice = computer[Math.floor(Math.random() * computer.length)]; //randomly choose answer for computer

    //compares answers, alerts user, increments stats
    if (choice == 'r' && compChoice == 's') {
        window.alert("You Win!");
        win++;
    } else if (choice == 'p' && compChoice == 'r') {
        window.alert("You Win!");
        win++;
    } else if (choice == 's' && compChoice == 'p') {
        window.alert("You Win!");
        win++;
    } else if (choice == 'r' && compChoice == 'p') {
        window.alert("You Lose!");
        lose++;
    } else if (choice == 'p' && compChoice == 's') {
        window.alert("You Lose!");
        lose++;
    } else if (choice == 's' && compChoice == 'r') {
        window.alert("You Lose!");
        lose++;
    } else {
        window.alert("You Tie!");
        tie++;
    }
    //displays stats
    window.alert("Win: " + win + "\nLose: " + lose + "\nTie: " + tie);

    //asks user if they want to play again?
    again = window.confirm("Play again?");

}
