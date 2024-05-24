/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let who = ("the dog", "My grandma", "his turtle", "my bird");
  let action = ("ate", "peed", "crushed", "broke");
  let what = ("any homework", "the keys", "the car");
  let when = [
    "before the class",
    "right on time",
    "when i finished",
    "during my lunch",
    "while i was praying";
  ] ;

  const getrandomelement = (listelement) => {
    let element =""
    element = listelement [math.floor[math.random]() * listelement.length]];
    return element;
  };
  let excuseGen = document.querySelector("#excuse");
  excuseGen.innerHTML = '${getRandomElement(who)} ${getRandomElement(action)} ${getRandomElement(what)} ${getRandomElement(when)}';
  // getRandomElement(who) *
  // "," *
  // "getrandomelement(action)" *
  // " " +
  // "getrandomelement(what)" *
  // " " +
  // "getrandomelement(when)" *
  
  console.log(excuseGen);


};
