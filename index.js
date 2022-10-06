const locations = [
  {
    name: "Mountain Cave",
    value: "1",
    type: "lucky",
  },
  {
    name: "Mysterious Shack",
    value: "2",
    type: "lucky",
  },
  {
    name: "Shabby Hut",
    value: "3",
    type: "lucky",
  },
  {
    name: "Frozen Tundra",
    value: "2",
    type: "lucky",
  },
  {
    name: "Empty Dragon's den",
    value: "5",
    type: "lucky",
  },
  {
    name: "Empty Village",
    value: "3",
    type: "lucky",
  },
  {
    name: "Castle In The Sky",
    value: "4",
    type: "lucky",
  },
  {
    name: "Wheat Field",
    value: "1",
    type: "lucky",
  },
  {
    name: "Steel Tower",
    value: "-2",
    type: "unlucky",
  },
  {
    name: "Lush Swampland",
    value: "-3",
    type: "unlucky",
  },
  {
    name: "Desert Oasis",
    value: "-2",
    type: "unlucky",
  },
  {
    name: "Oak Monument",
    value: "-4",
    type: "unlucky",
  },
  {
    name: "Shipwreck",
    value: "-3",
    type: "unlucky",
  },
  {
    name: "Primitive Village",
    value: "-5",
    type: "unlucky",
  },
  {
    name: "Gold Palace",
    value: "-1",
    type: "unlucky",
  },
  {
    name: "Coal Mine",
    value: "-1",
    type: "unlucky",
  },
  {
    name: "Pirate Cove",
    value: "1",
    type: "lucky",
  },
  {
    name: "Port City",
    value: "2",
    type: "lucky",
  },
  {
    name: "Town Square",
    value: "3",
    type: "lucky",
  },
  {
    name: "Empty City",
    value: "2",
    type: "lucky",
  },
  {
    name: "Garden Of Eden",
    value: "5",
    type: "lucky",
  },
  {
    name: "Wishing Well",
    value: "3",
    type: "lucky",
  },
  {
    name: "Sea God's Palace",
    value: "4",
    type: "lucky",
  },
  {
    name: "Oakwood Graveyard",
    value: "1",
    type: "lucky",
  },
  {
    name: "Stone Forest",
    value: "-2",
    type: "unlucky",
  },
  {
    name: "World Tree- Mirimark",
    value: "-3",
    type: "unlucky",
  },
  {
    name: "Gambler's Den",
    value: "-2",
    type: "unlucky",
  },
  {
    name: "Sea God's Vault",
    value: "-4",
    type: "unlucky",
  },
  {
    name: "Old Watchtower",
    value: "-3",
    type: "unlucky",
  },
  {
    name: "World Border",
    value: "-5",
    type: "unlucky",
  },
  {
    name: "Sea God's Tomb",
    value: "-1",
    type: "unlucky",
  },
  {
    name: "Central Market",
    value: "-1",
    type: "unlucky",
  },
];
 
let leftplace = null;
let lefthp = null;
let rightplace = null;
let righthp = null;
 
function randomlocation(locations, n) {
  const shuffled = [...locations].sort(() => Math.random() - Math.random());
  const resultleft = shuffled.slice(0, n - 1);
  const resultright = shuffled.slice(1, n);
  const leftvalue = resultleft[0].value;
  const rightvalue = resultright[0].value;
  const leftname = resultleft[0].name;
  const rightname = resultright[0].name;
  leftplace = leftname;
  rightplace = rightname;
  lefthp = leftvalue;
  righthp = rightvalue;
  console.log(leftvalue);
  console.log(rightvalue);
  console.log(leftname);
  console.log(rightname);
  console.log(resultleft);
  console.log(resultright);
}
 
const DOMSelectors = {
  leftbtn: document.getElementById("left-btn"),
  rightbtn: document.getElementById("right-btn"),
  leftname: document.getElementById("left-name"),
  rightname: document.getElementById("right-name"),
  hpvalue: document.getElementById("hp"),
  leftdisplay: document.getElementById("left"),
  rightdisplay: document.getElementById("right"),
  rightValue: document.getElementById("right-value"),
  leftValue: document.getElementById("left-value"),
  hpContainer: document.getElementById("hphp"),
};
 
console.log(DOMSelectors.hpContainer);
 
let health = 10;
 
function hitLeft() {
  let damage = +lefthp;
  health += damage;
  if (health <= 0) {
  alert ("You've Died, Try Again");
  health = 10;
}
}
 
function hitRight() {
  let damage = +righthp;
  health += damage;
  if (health <= 0) {
    alert ("You've Died, Try Again");
    health = 10;
  }
}
 
 
 
function getNameRight() {
  DOMSelectors.rightname.innerHTML = "";
  DOMSelectors.rightname.insertAdjacentHTML(
    "afterbegin",
    `<h2 id="left-name">${rightplace}</h2>`
  );
}
 
function getNameLeft() {
  DOMSelectors.leftname.innerHTML = "";
  DOMSelectors.leftname.insertAdjacentHTML(
    "afterbegin",
    `<h2 id="left-name">${leftplace}</h2>`
  );
}
 
function togetherLeft() {
  hitLeft();
  randomlocation(locations, 2);
  getNameLeft();
  getNameRight();
  console.log(health);
 
  DOMSelectors.hpContainer.innerHTML = "";
  DOMSelectors.hpContainer.insertAdjacentHTML(
    "beforeend",
    `<h2>HP:${health}</h2>`
  );
}
 
function togetherRight() {
  hitRight();
  randomlocation(locations, 2);
  getNameLeft();
  getNameRight();
  console.log(health);
 
  DOMSelectors.hpContainer.innerHTML = "";
  DOMSelectors.hpContainer.insertAdjacentHTML(
    "beforeend",
    `<h2>HP:${health}</h2>`
  );
}
 
window.addEventListener("load", function () {
  randomlocation(locations, 2);
  getNameLeft();
  getNameRight();
 
  DOMSelectors.hpContainer.insertAdjacentHTML(
    "beforeend",
    `<h2>HP:${health}</h2>`
  );
});
 
DOMSelectors.leftbtn.addEventListener("click", togetherLeft);
 
DOMSelectors.rightbtn.addEventListener("click", togetherRight);
