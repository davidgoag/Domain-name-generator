/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let four = [".com", ".net", ".us"];

  let string = "";

  for (let pronouns of pronoun) {
    for (let adjs of adj) {
      for (let nous of noun) {
        for (let fours of four) {
          document.querySelector("#ola").innerHTML +=
            "<li>" + "www." + pronouns + adjs + nous + fours + "</li>";
        }
      }
    }
  }

  console.log("Hello Rigo from the console!");
};
