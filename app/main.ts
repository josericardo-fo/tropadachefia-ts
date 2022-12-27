class Player { 
  id: string;
  name: string;
}
class Weapon {
  id: string;
  price: number;
}
class Team {
  name: string;
}

// Players
const fred: Player = {
  id: "frdduart",
  name: "Frederico",
}
const mecenas: Player = {
  id: "k1nG Mec",
  name: "Caio José",
}
const rocha: Player = {
  id: "Rochann",
  name: "Caio Rocha",
}
const dedo: Player = {
  id: "Nyarlathotep",
  name: "Fernando",
}
const castro: Player = {
  id: "DragonGugas ツ",
  name: "Gustavo",
}

// ! Weapons
// * Sidearms
const classic: Weapon = {
  id: "Classic",
  price: 0,
}
const shorty: Weapon = {
  id: "Shorty",
  price: 150,
}
const frenzy: Weapon = {
  id: "Frenzy",
  price: 450,
}
const ghost: Weapon = {
  id: "Ghost",
  price: 500,
}
const sheriff: Weapon = {
  id: "Sheriff",
  price: 800,
}

// * SMGs
const stinger: Weapon = {
  id: "Stinger",
  price: 950,
}
const spectre: Weapon = {
  id: "Spectre",
  price: 1600,
}

// * Shotguns
const bucky: Weapon = {
  id: "Bucky",
  price: 850,
}
const judge: Weapon = {
  id: "Judge",
  price: 1850,
}

// * Rifles
const bulldog: Weapon = {
  id: "Bulldog",
  price: 2050,
}
const guardian: Weapon = {
  id: "Guardian",
  price: 2250,
}
const phantom: Weapon = {
  id: "Phantom",
  price: 2900,
}
const vandal: Weapon = {
  id: "Vandal",
  price: 2900,
}

// * Sniper Rifles
const marshall: Weapon = {
  id: "Marshall",
  price: 950,
}
const operator: Weapon = {
  id: "Operator",
  price: 4700,
}

// * Machine Guns
const ares: Weapon = {
  id: "Ares",
  price: 1600,
}
const odin: Weapon = {
  id: "Odin",
  price: 3200,
}