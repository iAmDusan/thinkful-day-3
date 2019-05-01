/* eslint-disable strict */
/*
===============================================================================================
| Name                      | Nickname    | Race       | Origin         | Attack   | Defense  |
-----------------------------------------------------------------------------------------------
| Gandalf the White         | gandalf     | Wizard     | Middle Earth   | 10       | 6        |
-----------------------------------------------------------------------------------------------
| Bilbo Baggins             | bilbo       | Hobbit     | The Shire      | 2        | 1        |
-----------------------------------------------------------------------------------------------
| Frodo Baggins             | frodo       | Hobbit     | The Shire      | 3        | 2        |
-----------------------------------------------------------------------------------------------
| Aragorn son of Arathorn   | aragorn     | Man        | Dunnedain      | 6        | 8        |
-----------------------------------------------------------------------------------------------
| Legolas                   | legolas     | Elf        | Woodland Realm | 8        | 5        |
-----------------------------------------------------------------------------------------------

*/

const createCharacter = ({name, nickname, race, origin, attack, defense, weapon}) => ({
  name,
  nickname,
  race,
  origin,
  attack,
  defense,
  describe(){ console.log(`${this.name} is a ${this.race} from ${this.origin} who uses a ${this.weapon}`)},
  evaluateFight (character) {
    let shownString = '';
    if (this.attack >= character.defense){
      shownString += `Your opponent takes ${this.attack} damage `;
    } else {
      shownString += 'Your opponent takes 0 damage ';
    }
    if (character.attack >= this.defense){
      shownString += `and you receive ${character.attack} damage.`;
    } else {
      shownString += 'and you receive 0 damage.';

    } console.log(shownString);
  },
  weapon,
});

const Gandalf = createCharacter({name: 'Gandalf the White', nickname: 'gandalf', race: ' Wizard', origin: 'Middle Earth', attack: 10, defense: 6});
const Bilbo = createCharacter({name: 'Bilbo Baggins ', nickname: 'bilbo', race: 'Hobbit', origin: 'The Shire', attack: 2, defense: 1});
const Frodo = createCharacter({name: 'Frodo Baggins', nickname: 'frodo', race: 'Hobbit', origin: 'The Shire', attack: 6, defense: 2 })
const Aragorn = createCharacter({name: 'Aragorn son of Arathorn', nickname: 'aragorn', race: 'Man', origin: 'Dunnedain', attack: 6, defense: 8 })
const Legolas = createCharacter({name: 'Legolass', nickname: 'legolas', race: 'Elf', origin: 'Woodland Realm', attack: 8, defense: 5 })

let characters = [
  Gandalf, Bilbo, Frodo, Aragorn, Legolas
  ];

/*console.log(Gandalf);

Gandalf.evaluateFight(Bilbo);



characters.push(createCharacter({name: 'Arwen Undomiel', nickname: 'arwen', race: 'Half-Elf of Rivendell', origin: 'Rivendell', attack: 7, defense: 7}));

console.log(characters)

console.log(characters.find(name => name.nickname === 'aragorn').describe());*/

const Hobbits = characters.filter(character => character.race === 'Hobbit');
console.log(Hobbits);
const strong = characters.filter(character => character.attack > 5);
console.log(strong);

Gandalf.weapon = 'staff';
Gandalf.describe();