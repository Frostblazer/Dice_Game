// creates a random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// concatentes new source for dice images
var newDice = "images/dice" + randomNumber1 + ".png";
var newDice2 = "images/dice" + randomNumber2 + ".png";

// sets new dice image for dice 1
var dice1 = document.querySelectorAll("img")[0];

dice1.setAttribute("src", newDice);

// sets new dice image for dice 2
var dice2 = document.querySelectorAll("img")[1];

dice2.setAttribute("src", newDice2);

// changes header depending on which dice is greater
if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 1 wins!";

}
else if(randomNumber2 > randomNumber1)
{
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else
{
  document.querySelector("h1").innerHTML = "Draw!";
}
