const locations = [
  {
    name: "Mountain Cave",
    id: "lucky",
  },
  {
    name: "Mysterious Shack",
    id: "lucky",
  },
  {
    name: "Shabby Hut",
    id: "lucky",
  },
  {
    name: "Frozen Tundra",
    id: "lucky",
  },
  {
    name: "Empty Dragon's den",
    id: "lucky",
  },
  {
    name: "Empty Village",
    id: "lucky",
  },
  {
    name: "Castle In The Sky",
    id: "lucky",
  },
  {
    name: "Wheat Field",
    id: "lucky",
  },
  {
    name: "Steel Tower",
    id: "unlucky",
  },
  {
    name: "Lush Swampland",
    id: "unlucky",
  },
  {
    name: "Desert Oasis",
    id: "unlucky",
  },
  {
    name: "Oak Monument",
    id: "unlucky",
  },
  {
    name: "Shipwreck",
    id: "unlucky",
  },
  {
    name: "Primitive Village",
    id: "unlucky",
  },
  {
    name: "Gold Palace",
    id: "unlucky",
  },
  {
    name: "Coal Mine",
    id: "unlucky",
  },
];

const randomleft = Math.floor(Math.random() * locations.length);
console.log(randomleft, locations[randomleft]);

const randomright = Math.floor(Math.random() * locations.length);
console.log(randomright, locations[randomright]);
