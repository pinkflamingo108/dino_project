// Create Dino Constructor

function Dino(species, weight, height, diet, where, when, fact) {
 this.species = species;
 this.weight = weight;
 this.height = height;
 this.diet = diet;
 this.where = where;
 this.when = when;
 this.fact = fact;
 this.image = "/images" + species.toLowerCase() + ".png";
}
// Create Dino Objects

fetch("dino.json")
 .then((response) => response.json())
 .then((data) => {
  let dinoData = data.Dinos;
  return getDinos(dinoData);
 })
 .catch((err) => {
  console.log("Error");
 });

function getDinos(data) {
 data.map((info) => {
  console.log(info);
 });
}
// Create Human Object

// function Human(name, feet, inches, weight, diet) {
//  this.name = document.getElementById("name").value;
//  this.feet = document.getElementById("feet").value;
//  this.inches = document.getElementById("inches").value;
//  this.weight = document.getElementById("weight").value;
//  this.diet = document.getElementById("diet").value;
// }

// Use IIFE to get human data from form

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic
