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

// Create Dino Compare Method 1

Dino.prototype.dinoHeight = function () {
 let human = new Human();
 let humanInch = parseInt(human["inches"]);
 let humanFeet = parseInt(human["feet"] * 12);
 let humanTotal = humanInch + humanFeet;
 let dinoH = parseInt(this.height);
 if (dinoH > humanTotal) {
  return `Dino is taller by ${dinoH - humanTotal} inches`;
 } else if (dinoH < humanTotal) {
  return `The human is bigger by ${humanTotal - dinoH}`;
 } else {
  return ` Oh my god! Both of you weight the same!`;
 }
};

// Create Dino Compare Method 2

Dino.prototype.dinoWeight = function () {
 let human = new Human();
 let humanW = parseInt(human["weight"]);
 let dinoW = parseInt(this.weight);

 if (dinoW > humanW) {
  return `The Dinosaur is heavier by ${dinoW - humanW}`;
 } else if (humanW > dinoW) {
  return `Incredible! The human is ${humanW - dinoW} lbs than the Dino`;
 } else {
  return `Both weight the same amount`;
 }
};

// Create Dino Compare Method 3

Dino.prototype.dinoDiet = function () {
 let human = new Human();
 let humanD = human["diet"];
 let humanDL = humanD.toLowerCase();
 let dinoD = this.diet;
 let dinoDL = this.diet.toLowerCase();

 if (humanDL == dinoDL) {
  console.log(
   `Both the dinosaur and the human have the same diet! They both eat ${humanDL}`
  );
 } else if (humanDL != dinoDL) {
  console.log(
   `They eat different food. The human eats ${humanDL} and the Dino eats ${dinoDL}`
  );
 }
};

// Create Dino Compare Method 4

Dino.prototype.facts = function () {
 return `${this.fact}`;
};

Dino.prototype.randomFact = function () {
 let arrayM = [
  this.fact(),
  this.dinoDiet(),
  this.dinoWeight(),
  this.dinoHeight(),
 ];
 let math = parseInt(Math.random() * arrayM.length);
 console.log(arrayM[math]);
};

// Create Human Object

function Human() {
 this.name = document.getElementById("name").value;
 this.feet = document.getElementById("feet").value;
 this.inches = document.getElementById("inches").value;
 this.weight = document.getElementById("weight").value;
 this.diet = document.getElementById("diet").value;
}

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
  arrayOfDino.forEach((arrayInfo) => {
   //Here im trying to call it without properties
   console.log(arrayInfo.randomFact());
  });
 })();
});

// On button click, prepare and display infographic

// Submit Values
// All the data will go to this array
