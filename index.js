// welcome and customized text input and output
var readlineSync = require("readline-sync");
var score = 0;
var Name = readlineSync.question("What's your name? ");
console.log("Welcome to Economy Endgame " + Name);

console.log("We have 4 countries for you to play the Economy Endgame\n");
var favNation = readlineSync.question("Which is favourite country? ", {
  hideEchoBack: true, //to hide the favorite country with"*" by default"
});
console.log(
  "Woah! your favorite country " + favNation.toUpperCase(),
  "is my favorite country too \n"
);

//array of all the five country objects
var superNation = [
  {
    country: "China",
    currency: "Yuan",
    government: "Monarchy",
  },
  {
    country: "Russia",
    currency: "Ruble",
    government: "Monarchy",
  },
  {
    country: "USA",
    currency: "Dollar",
    government: "Democracy",
  },
  {
    country: "India",
    currency: "Rupee",
    government: "Democracy",
  },
];

var totalNation = superNation.length;
for (let i = 0; i < totalNation; i++) {
  // var favNation = readlineSync.question(question);
  var nation = superNation[i].country.toUpperCase();
  var boolean = false;

  if (nation === favNation.toUpperCase()) {
    boolean = true;
    break;
  } else {
    boolean = false;
  }
}

if ((boolean = true)) {
  console.log(
    "Yay! your favorite country " + favNation + " is included in this game\n"
  );
} else {
  console.log("Ooops! your favourite country is not included in this game\n");
}

// switch(nation){
//   case "INDIA":
//       console.log();
//     break;
//   case "CHINA":
//       console.log("Yay! your favorite country "+ nation +" is included in this game\n");
//     break;
//   case "RUSSIA":
//       console.log("Yay! your favorite country "+ nation +" is included in this game\n");
//     break;
//   case "USA":
//       console.log("Yay! your favorite country "+ nation +" is included in this game\n");
//     break;
//   default:
//     console.log("Ooops! your favourite country is not included in this game\n");
//     break;
// }

//print name of all the countries before the game starts
console.log("We have these 4 countries in this game");
//print all the countries part of the quiz
for (let i = 0; i < superNation.length; i++) {
  var currentNation = superNation[i];
  console.log(currentNation.country);
}
//array of all the 5 questions
var allQuestion = [
  { question: "What's the currency of China?", answer: "Yuan" },
  { question: "Which country is at war with Ukraine?", answer: "Russia" },
  { question: "Which country is currently the world leader?", answer: "USA" },
  {
    question: "Which is the most populated country in the world?",
    answer: "India",
  },
  { question: "What's the the currency of Russia?", answer: "Ruble" },
];
// quiz function using an array of questions
function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Yay! you are right " + "the correct answer is " + answer);
    score = score + 1;
  } else {
    console.log("You are wrong " + "the correct answer is " + answer);
  }
  //print score after every answer
  console.log(" Your Score " + score);
  console.log("---------------");
}

//for loop to pass all the questions and answer to the quiz function
for (let i = 0; i < allQuestion.length; i++) {
  var currentQuestion = allQuestion[i];
  quiz(currentQuestion.question, currentQuestion.answer);
}
