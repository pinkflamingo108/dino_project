const arrayOfDino = [];
const arrayOfHuman = [];

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
 if (this.species === "Pigeon") {
  return `All birds are Dinosaurs`;
 } else if (dinoH > humanTotal) {
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

 if (this.species === "Pigeon") {
  return `All birds are Dinosaurs`;
 } else if (dinoW > humanW) {
  return `The Dinosaur is heavier by ${dinoW - humanW}`;
 } else if (humanW > dinoW) {
  return `Incredible! The human is ${humanW - dinoW} lbs than the Dino`;
 } else if (humanW === dinoW) {
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
 if (this.species === "Pigeon") {
  return `All birds are Dinosaurs`;
 } else if (humanDL == dinoDL) {
  return `Both the dinosaur and the human have the same diet! They both eat ${humanDL}`;
 } else if (humanDL != dinoDL) {
  return `They eat different food. The human eats ${humanDL} and the Dino eats ${dinoDL}`;
 }
};

// Create Dino Compare Method 4

Dino.prototype.facts = function () {
 if (this.species === "Pigeon") {
  return `All birds are Dinosaurs`;
 } else {
  return `${this.fact}`;
 }
};

// Create Dino Compare Method 5

Dino.prototype.location = function () {
 if (this.species === "Pigeon") {
  return `All birds are Dinosaurs`;
 } else {
  return `This dino comes from ${this.where}`;
 }
};

// Create Dino Compare Method 6

Dino.prototype.time = function () {
 if (this.species === "Pigeon") {
  return `All birds are Dinosaurs`;
 } else {
  return `Existed in ${this.when}`;
 }
};

// Create Dino Compare Method 7

Dino.prototype.randomFact = function () {
 let arrayM = [
  this.location(),
  this.time(),
  this.dinoDiet(),
  this.dinoWeight(),
  this.dinoHeight(),
  this.facts(),
 ];
 let math = parseInt(Math.random() * arrayM.length);
 return arrayM[math];
};

// Creating Tiles. This will create most of the tiles on the forEach set on the click event

Dino.prototype.generateUI = function () {
 // https://knowledge.udacity.com/questions/562655 helped me to get an idea of how to build tiles

 const grid = document.getElementById("grid");
 const human = new Human();
 const divT = document.createElement("div");
 divT.classList.add("grid-item");
 const gridTiles = Array.from(document.getElementsByClassName("grid-item"));

 divT.innerHTML = `
      <h3>${this.species}</h3>
     <img class='center' src='images/${this.species}.png' >
     
       <p>${this.randomFact()}</p>
       `;

 grid.append(divT);
};

// This is creating the last Tile with Human

function humanDiv() {
 const grid = document.getElementById("grid");
 const divT = document.createElement("div");
 const gridTiles = Array.from(document.getElementsByClassName("grid-item"));
 const dino = new Dino();
 const human = new Human();
 divT.classList.add("grid-item");

 divT.innerHTML = `
   <h3>${human.name}</h3>
  <img class='center' src='images/human.png' >
    <p>Just a random human</p>

    `;

 grid.append(divT);
}

// Create Human Object

function Human() {
 this.name = document.getElementById("name").value;
 this.feet = document.getElementById("feet").value;
 this.inches = document.getElementById("inches").value;
 this.weight = document.getElementById("weight").value;
 this.diet = document.getElementById("diet").value;
}

const submitBtn = document.getElementById("btn");
const form = document.getElementById("dino-compare");

// Submit Button

submitBtn.addEventListener("click", () => {
 // Remove form from screen
 form.style.display = "none";

 // Use IIFE to get human data from form
 (function name() {
  let human = new Human();

  arrayOfHuman.push(human);
  arrayOfDino.forEach((arrayInfo) => {
   return arrayInfo.generateUI();
  });
  //   //This calls the function that will return a human tile
  humanDiv();

  // This switches the last tile for the forth tile and so on
  const gridTiles = Array.from(document.getElementsByClassName("grid-item"));
  const humans = new Human();
  gridTiles[8].innerHTML = gridTiles[4].innerHTML;
  gridTiles[4].innerHTML = `
  <h3>${humans.name}</h3>
 <img class='center' src='images/human.png' >
    <p>Just a random human</p>
`;
 })();
});
