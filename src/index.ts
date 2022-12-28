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
class PlayerRound {
  // * API de gestão de partida
  player: Player;
  weapon: Weapon;
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
const rengar: Player = {
  id: 'Vulgo Nobdy',
  name: 'Lucas',
  skillModifier: 1,
};
let players: Player[] = [fred, mecenas, rocha, dedo, castro, rengar];

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
let weapons: Weapon[] = [
  ares,
  bucky,
  bulldog,
  classic,
  frenzy,
  ghost,
  guardian,
  judge,
  marshall,
  odin,
  operator,
  phantom,
  sheriff,
  shorty,
  spectre,
  stinger,
  vandal,
];

// ! Duel
// Calcula a probabilidade de um jogador ganhar do outro levando em conta seu armamento e habilidades
function duel(playerRound1: PlayerRound, playerRound2: PlayerRound) {
  const scorePlayer1 =
    playerRound1.player.skillModifier *
    playerRound1.weapon.powerModifier *
    Math.random() *
    100;
  const scorePlayer2 =
    playerRound2.player.skillModifier *
    playerRound2.weapon.powerModifier *
    Math.random() *
    100;
  if (scorePlayer1 > scorePlayer2) {
    console.log(
      playerRound1.player.id,
      'com',
      playerRound1.weapon.id,
      'venceu o duelo contra',
      playerRound2.player.id,
      'com',
      playerRound2.weapon.id
    );
  } else {
    console.log(
      playerRound2.player.id,
      'com',
      playerRound2.weapon.id,
      'venceu o duelo contra',
      playerRound1.player.id,
      'com',
      playerRound1.weapon.id
    );
  }
}

// Escolhe dois players aleatórios com armamentos aleatórios
function getRandomPlayers() {
  const shuffledPlayers = players.sort(() => 0.5 - Math.random());
  let [player1, player2] = shuffledPlayers.slice(0, 2);
  const shuffledWeapons = weapons.sort(() => 0.5 - Math.random());
  let [weapon1, weapon2] = shuffledWeapons.slice(0, 2);
  const playerRound1: PlayerRound = {
    player: player1,
    weapon: weapon1,
  };
  const playerRound2: PlayerRound = {
    player: player2,
    weapon: weapon2,
  };
  return [playerRound1, playerRound2];
}

let randomPlayers = getRandomPlayers();
duel(randomPlayers[0], randomPlayers[1]);
randomPlayers = getRandomPlayers();
duel(randomPlayers[0], randomPlayers[1]);
randomPlayers = getRandomPlayers();
duel(randomPlayers[0], randomPlayers[1]);
randomPlayers = getRandomPlayers();
duel(randomPlayers[0], randomPlayers[1]);
randomPlayers = getRandomPlayers();
duel(randomPlayers[0], randomPlayers[1]);
