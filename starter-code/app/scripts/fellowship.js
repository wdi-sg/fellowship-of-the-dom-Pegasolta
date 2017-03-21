console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
//Making continent
  var continent = document.createElement("section")
  var sec = continent.setAttribute("id", "middle-earth")
  body.appendChild(continent)

//looping through the 3 lands | Making lands | Assigning 3 names to lands
  lands.forEach(function(middleland) {
    var continentLand = document.createElement("article")
    var landTitle = document.createElement("h1")
    landTitle.textContent = middleland
    continent.appendChild(continentLand)
    continentLand.appendChild(landTitle)
  })
  console.log(continent)
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
//Making hobbit container
  var shire = body.querySelectorAll("article")[0]
  var shireHobbits = document.createElement("ul")
  console.log(shireHobbits);
  shire.appendChild(shireHobbits)

//Making Hobbits | Looping assigning names | Looping assigning class
  hobbits.forEach(function(midgets) {
    var hobbit = document.createElement("li")
    hobbit.textContent = midgets
    shireHobbits.appendChild(hobbit)
    var hobbitClass = hobbit.setAttribute("class", "hobbit")
  })
}

makeHobbits()


// Part 3

function keepItSecretKeepItSafe() {
  var ring = document.createElement("div")
  var ringId = ring.setAttribute("id", "the-ring")
  var ringClass = ring.setAttribute("class", "magic-imbued-jewelry")
  var shireHobbitsList = body.querySelectorAll("article")[0]
  var frodo = shireHobbitsList.querySelectorAll("li")[0]
  frodo.appendChild(ring)

  ring.addEventListener("click", nazgulScreech)
}

keepItSecretKeepItSafe()

// Part 4

function makeBuddies() {
//Making buddies container
  var allies = document.createElement("aside")
  var rivendell = body.querySelectorAll("article")[1]
  rivendell.appendChild(allies)
  var buddyList = document.createElement("ul")
  allies.appendChild(buddyList)
  console.log(rivendell);

//Making individual buddies | Looping names to buddies
  buddies.forEach(function(idiots) {
    var buddy = document.createElement("li")
    buddy.textContent = idiots
    buddyList.appendChild(buddy)
  })
}

makeBuddies()

// Part 5

function beautifulStranger() {
  var striderLand = body.querySelectorAll("article")[1]
  var strider = striderLand.querySelectorAll("li")[3]
  strider.textContent = "Aragorn"
}

beautifulStranger()


// Part 6

function leaveTheShire() {
//Defining Shire and Hobbits in Shire
  var shireLand = body.querySelectorAll("article")[0]
  var hobbitRollCall = shireLand.querySelector("ul")

//Removing Hobbits from Shire
  var assemble = shireLand.removeChild(hobbitRollCall)

//Moving them to Rivendell
  var rivendellLand = body.querySelectorAll("article")[1]
  rivendellLand.appendChild(assemble)
}

leaveTheShire()


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
