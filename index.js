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
};

DOMSelectors.leftbtn.addEventListener("click", function () {
  const leftna = randomlocation(locations, 2);
  console.log(leftplace);
  DOMSelectors.leftname.innerHTML = "";
  DOMSelectors.leftname.insertAdjacentHTML(
    "afterbegin",
    `<h2 id="left-name">${leftplace}</h2>`
  );
  DOMSelectors.rightname.innerHTML = "";
  DOMSelectors.rightname.insertAdjacentHTML(
    "afterbegin",
    `<h2 id="left-name">${rightplace}</h2>`
  );
  DOMSelectors.hpvalue.insertAdjacentHTML(
    "afterbegin",
    `<h2 id="hp">${lefthp}</h2>`
  );
});

DOMSelectors.rightbtn.addEventListener("click", function () {
  const rightna = randomlocation(locations, 2);
  console.log(rightna);
  DOMSelectors.rightname.innerHTML = "";
  DOMSelectors.rightname.insertAdjacentHTML(
    "afterbegin",
    `<h2 id="left-name">${rightplace}</h2>`
  );
  DOMSelectors.leftname.innerHTML = "";
  DOMSelectors.leftname.insertAdjacentHTML(
    "afterbegin",
    `<h2 id="left-name">${leftplace}</h2>`
  );
  DOMSelectors.hpvalue.insertAdjacentHTML(
    "afterbegin",
    `<h2 id="hp">${righthp}</h2>`
  );
});

// function shuffleleft(locations, n) {
//   const shuffled = [...locations].sort(() => Math.random() - Math.random());
//   const resultleft = shuffled.slice(0, n);
//   console.log(resultleft);
// }

// function shuffleright(locations, n) {
//  const shuffled = [...locations].sort(() => Math.random() - Math.random());
//  const resultright = shuffled.slice(0, n);
//  console.log(resultright);
// }

// DOMSelectors.leftbtn.addEventListener('click', function(){
//  const leftna = shuffleleft(locations, 2);
//  console.log(leftna);
// }
// );

// DOMSelectors.rightbtn.addEventListener('click', function(){
//  const rightna = shuffleleft(locations, 2);
//  console.log(rightna);
// }
// );
