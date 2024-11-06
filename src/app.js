/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let suit = ["♦", "♥", "♣", "♠"];
  let value = ["2", "3", "4", "5", "6", "7", "8", "10", "J", "Q", "K", "A"];

  let chosenSuit = getRandomElement(suit);
  let chosenValue = getRandomElement(value);

  //console.log(chosenSuit, chosenValue, chosenSuit);

  let topSuitElement = document.querySelector(".top-suit");
  let bottomSuitElement = document.querySelector(".bottom-suit");
  let valueElement = document.querySelector(".value");

  if (chosenSuit == "♥" || chosenSuit == "♦") {
    topSuitElement.style.color = "red";
    bottomSuitElement.style.color = "red";
  }

  topSuitElement.innerHTML = chosenSuit;
  valueElement.innerHTML = chosenValue;
  bottomSuitElement.innerHTML = chosenSuit;
};

function getRandomElement(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
