// creat variable for random number and user input. Then create an if loop to give the user feedback
var randomNum = Math.floor((Math.random() * 100) + 1);
alert(randomNum);
var userInput = parseInt(prompt("Please enter a number: "));
while (userInput!==randomNum) {
    if (userInput > randomNum) {
        alert("Your guess was too high!");
        userInput = parseInt(prompt("Please enter another number: "))
    }
    else if (userInput < randomNum) {
        alert("Your guess was too low!");
        userInput = parseInt(prompt("Please enter another number: "));
    }
    else if (userInput < randomNum) {
        alert("Your guess was correct!");
        break
    }
    else {
        alert("Error");
        userInput = parseInt(prompt("Please enter another number: "));
    }
}