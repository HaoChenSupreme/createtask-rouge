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


function shufflefunction(locations, n) {
   const shuffled = [...locations].sort(() => Math.random() - Math.random());
   const result = shuffled.slice(0, n);
   console.log(result);
 }

const DOMSelectors = {
  leftbtn: document.getElementById("left-btn"),
  rightbtn: document.getElementById("right-btn"),
  leftname: document.getElementById("left-name"),
  rightname: document.getElementById("right-name"),
  leftdisplay: document.getElementById("left"),
  rightdisplay: document.getElementById("right"),
};

DOMSelectors.leftbtn.addEventListener('click',
  // function shufflefunction(locations, n) {
  //    const shuffled = [...locations].sort(() => Math.random() - Math.random());
  //    const result = shuffled.slice(0, n);
  //    console.log(result);
  //  }
  console.log(33)
);

DOMSelectors.rightbtn.addEventListener('click', function(locations, n){
  const shuffled = [...locations].sort(() => Math.random() - Math.random());
  const result = shuffled.slice(0, n);
  console.log(result);
});
shufflefunction(locations, 2);
