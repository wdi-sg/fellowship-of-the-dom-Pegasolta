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

var shire = body.querySelectorAll("article")[0]
var rivendell = body.querySelectorAll("article")[1]
var mordor = body.querySelectorAll("article")[2]
// Part 2

function makeHobbits() {
//Making hobbit container
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
  var frodo = shire.querySelectorAll("li")[0]
  frodo.appendChild(ring)

  ring.addEventListener("click", nazgulScreech)
}

keepItSecretKeepItSafe()


// Part 4

function makeBuddies() {
//Making buddies container
  var allies = document.createElement("aside")
  rivendell.appendChild(allies)
  var buddyList = document.createElement("ul")
  allies.appendChild(buddyList)

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
  var strider = rivendell.querySelectorAll("li")[3]
  strider.textContent = "Aragorn"
}

beautifulStranger()


// Part 6

function leaveTheShire() {
//Defining Shire and Hobbits in Shire
  var hobbitRollCall = shire.querySelector("ul")

//Removing Hobbits from Shire
  var assemble = shire.removeChild(hobbitRollCall)

//Moving them to Rivendell
  rivendell.appendChild(assemble)
}

leaveTheShire()


// Part 7
//Listing out all the members
var members = rivendell.querySelectorAll("li")

function forgeTheFellowShip() {
  var theFellowship = document.createElement("div")
  var fellowshipId = theFellowship.setAttribute("id", "the-fellowship")
  rivendell.appendChild(theFellowship)

  members.forEach(function(recruit) {
    theFellowship.appendChild(recruit)
    // alert("New bitch:" + recruit.textContent + " has joined you!")
  })
}

forgeTheFellowShip()

// Part 8


function theBalrog() {
  var gandalf = rivendell.querySelectorAll("li")[0]
  gandalf.textContent = "Gandalf the Daft"
  gandalf.style.background = "white"
  gandalf.style.border = "5px solid grey"
}

theBalrog()


// Part 9

function hornOfGondor() {
  alert("Horn of Goondoos have been blown")
  var boromir = rivendell.querySelectorAll("li")[4]
  // boromir.style.setProperty("text-decoration", "linethrough")

  var fellowshipMinusOne = document.querySelector("#the-fellowship")
  fellowshipMinusOne.removeChild(boromir)
}

hornOfGondor()

// Part 10

function itsDangerousToGoAlone(){
  var mountDoom = document.createElement("div")
  var mountDoomId = mountDoom.setAttribute("id", "mount-doom")
  mordor.appendChild(mountDoom)
  var gays = rivendell.querySelectorAll(".hobbit")[0,1]
console.log(mountDoom);
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}

itsDangerousToGoAlone()

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
