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
    value: "1",
    type: "lucky",
  },
  {
    name: "Frozen Tundra",
    value: "1",
    type: "lucky",
  },
  {
    name: "Empty Dragon's den",
    value: "5",
    type: "lucky",
  },
  {
    name: "Empty Village",
    value: "2",
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
    value: "-2",
    type: "unlucky",
  },
  {
    name: "Desert Oasis",
    value: "-1",
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
    value: "-2",
    type: "unlucky",
  },
  {
    name: "Coal Mine",
    value: "-2",
    type: "unlucky",
  },
];

const randomleft = Math.floor(Math.random() * locations.length);
console.log(randomleft, locations[randomleft]);

const randomright = Math.floor(Math.random() * locations.length);
console.log(randomright, locations[randomright]);

const DOMSelectors = {
  left: document.getElementById("left-btn"),
  right: document.getElementById("right-btn"),
  leftdisplay: document.getElementById("left"),
  rightdisplay: document.getElementById("right"),
};

DOMSelectors.left.addEventListener("click", function () {
  return randomleft;
});
