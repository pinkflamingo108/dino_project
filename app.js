const arrayOfDino = [];
const arrayOfHuman = [];
console.log(arrayOfDino);
console.log(arrayOfHuman);

// // Create Dino Objects

fetch("dino.json")
 .then((response) => response.json())
 .then((data) => {
  let dinoData = data.Dinos;
  dinoData.map((dino) => {
   let dinoValues = Object.values(dino);
   let dinoConstructor = new Dino(...dinoValues);
   arrayOfDino.push(dinoConstructor);
  });
 })
 .catch((err) => {
  console.log("Error");
 });

// Create Dino Constructor

function Dino(species, weight, height, diet, where, when, fact) {
 this.species = species;
 this.weight = weight;
 this.height = height;
 this.diet = diet;
 this.where = where;
 this.when = when;
 this.fact = fact;
}

//Global human constructor

let human = new Human();

// Create Dino Compare Method 1

Dino.prototype.dinoHeight = function () {
 let dinoH = parseInt(this.height);
 let humanInch = parseInt(human["inches"]);
 let humanFeet = parseInt(human["feet"] * 12);
 let humanTotal = humanInch + humanFeet;
 //  if (dinoH > humanTotal) {
 //   return `Dino is taller by ${dinoH - humanTotal} inches`;
 //  } else if (dinoH < humanW) {
 //   return `The human is bigger by ${humanTotal - dinoH}`;
 //  } else {
 //   return ` Oh my god! Both of you weight the same!`;
 //  }
};

// Create Dino Compare Method 2

Dino.prototype.dinoWeight = function () {
 let humanW = parseInt(human["weight"]);
 let dinoW = parseInt(this.weight);

 if (dinoW > humanW) {
  return `The Dinosaur is heavier by ${dinoW - humanW}`;
 } else if (humanW > dinoW) {
  return `Incredible! The human is ${humanW - dinoW} than the Dino`;
 } else {
  retun`Both weight the same amount`;
 }
};

// Create Dino Compare Method 3

Dino.prototype.dinoDiet = function () {
 let humanD = human["diet"];
 let dinoD = this.diet;

 if (humanD === dinoD) {
  console.log(`Both the dinosaur and the human have the same diet!`);
 } else {
  console.log(
   `They eat different food. The human eats ${humanD} and the Dino eats ${dinoD}`
  );
 }
};

// This is a test prototype since it doesn't require the human prototype
Dino.prototype.testCase = function () {
 console.log(`${this.weight} is my weight`);
};

// Create Human Object

function Human() {
 this.name = document.getElementById("name").value;
 this.feet = document.getElementById("feet").value;
 this.inches = document.getElementById("inches").value;
 this.weight = document.getElementById("weight").value;
 this.diet = document.getElementById("diet").value;
}

// This was only to test my human prototype
Human.prototype.humanTesting = function () {
 console.log(this.diet);
 console.log(this.name);
};

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen
// Submit Button

const submitBtn = document.getElementById("btn");
const form = document.getElementById("dino-compare");

submitBtn.addEventListener("click", () => {
 form.style.display = "none";

 // Use IIFE to get human data from form
 (function name() {
  let human = new Human();

  arrayOfHuman.push(human);
 })();
});

// On button click, prepare and display infographic

// Submit Values
// All the data will go to this array
