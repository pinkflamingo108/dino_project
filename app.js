// Submit Values
// All the data will go to this array

const arrayOfDino = [];

//This prints what is in the array
console.log(arrayOfDino);

// Create Dino Objects

fetch("dino.json")
 .then((response) => response.json())
 .then((data) => {
  let dinoData = data.Dinos;
  dinoData.map((e) => {
   let dinoValues = Object.values(e);
   let dinoConstructor = new Dino(...dinoValues);
   arrayOfDino.push(dinoConstructor);
  });
 })
 .catch((err) => {
  console.log("Error");
 });

// Create Dino Constructor

class Dino {
 constructor(species, weight, height, diet, where, when, fact) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
 }

 weight() {
  console.log(this.species, "has arrived to the meeting");
 }
}

// Create Human Object

function Human() {
 this.name = document.getElementById("name").value;
 this.feet = document.getElementById("feet").value;
 this.inches = document.getElementById("inches").value;
 this.weight = document.getElementById("weight").value;
 this.diet = document.getElementById("diet").value;
}

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

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
  arrayOfDino.push(human);
 })();
});

// On button click, prepare and display infographic
