// ! APIs
class Player {
  // * API de gestão de Jogadores
  id: string;
  name: string;
  skillModifier: number;
}
class Weapon {
  // * API de gestão de Armamento
  id: string;
  price: number;
  powerModifier: number;
}
class Team {
  // * API de gestão de Time
  name: string;
}
class Match {
  id: string;
}

// ! Players
const fred: Player = {
  id: 'frdduart',
  name: 'Frederico',
  skillModifier: 1,
};
const mecenas: Player = {
  id: 'k1nG Mec',
  name: 'Caio José',
  skillModifier: 1,
};
const rocha: Player = {
  id: 'Rochann',
  name: 'Caio Rocha',
  skillModifier: 1,
};
const dedo: Player = {
  id: 'Nyarlathotep',
  name: 'Fernando',
  skillModifier: 1,
};
const castro: Player = {
  id: 'DragonGugas ツ',
  name: 'Gustavo',
  skillModifier: 1,
};
const icarus: Player = {
  id: 'Icarus',
  name: 'William',
  skillModifier: 1,
};
let players: Player[] = [fred, mecenas, rocha, dedo, castro];

// ! Weapons
// * Sidearms
const classic: Weapon = {
  id: 'Classic',
  price: 0,
  powerModifier: 1,
};
const shorty: Weapon = {
  id: 'Shorty',
  price: 150,
  powerModifier: 1,
};
const frenzy: Weapon = {
  id: 'Frenzy',
  price: 450,
  powerModifier: 1,
};
const ghost: Weapon = {
  id: 'Ghost',
  price: 500,
  powerModifier: 1,
};
const sheriff: Weapon = {
  id: 'Sheriff',
  price: 800,
  powerModifier: 1,
};

// * SMGs
const stinger: Weapon = {
  id: 'Stinger',
  price: 950,
  powerModifier: 1,
};
const spectre: Weapon = {
  id: 'Spectre',
  price: 1600,
  powerModifier: 1,
};

// * Shotguns
const bucky: Weapon = {
  id: 'Bucky',
  price: 850,
  powerModifier: 1,
};
const judge: Weapon = {
  id: 'Judge',
  price: 1850,
  powerModifier: 1,
};

// * Rifles
const bulldog: Weapon = {
  id: 'Bulldog',
  price: 2050,
  powerModifier: 1,
};
const guardian: Weapon = {
  id: 'Guardian',
  price: 2250,
  powerModifier: 1,
};
const phantom: Weapon = {
  id: 'Phantom',
  price: 2900,
  powerModifier: 1,
};
const vandal: Weapon = {
  id: 'Vandal',
  price: 2900,
  powerModifier: 1,
};

// * Sniper Rifles
const marshall: Weapon = {
  id: 'Marshall',
  price: 950,
  powerModifier: 1,
};
const operator: Weapon = {
  id: 'Operator',
  price: 4700,
  powerModifier: 1,
};

// * Machine Guns
const ares: Weapon = {
  id: 'Ares',
  price: 1600,
  powerModifier: 1,
};
const odin: Weapon = {
  id: 'Odin',
  price: 3200,
  powerModifier: 1,
};

// ! Team
const ataque: Team = {
  name: 'Atacantes',
};
const defesa: Team = {
  name: 'Defensores',
};

// ! Duel
// Escolhe dois players aleatórios para duelarem
function duel(player1: Player, player2: Player) {
  const scorePlayer1 =
    player1.skillModifier * odin.powerModifier * Math.random() * 100;
  const scorePlayer2 =
    player2.skillModifier * ghost.powerModifier * Math.random() * 100;
  if (scorePlayer1 > scorePlayer2) {
    console.log(
      player1.id,
      'venceu o duelo! Relatório de combate:',
      scorePlayer1,
      'VS',
      scorePlayer2
    );
  } else {
    console.log(
      player2.id,
      'venceu o duelo! Relatório de combate:',
      scorePlayer2,
      'VS',
      scorePlayer1
    );
  }
}

const shuffled = players.sort(() => 0.5 - Math.random());
let [selectedPlayer1, selectedPlayer2] = shuffled.slice(0, 2);

duel(selectedPlayer1, selectedPlayer2);
