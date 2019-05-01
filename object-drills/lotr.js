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

const createCharacter = ({name, nickname, race, origin, attack, defense}) => ({
  name,
  nickname,
  race,
  origin,
  attack,
  defense,
  describe(){ console.log(`${this.name} is a ${this.race} from ${this.origin}.`)},
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
  }
});

const Gandalf = createCharacter({name: 'Gandalf the White', nickname: 'gandalf', race: ' Wizard', origin: 'Middle Earth', attack: 10, defense: 6});
const Bilbo = createCharacter({name: 'Bilbo Baggins ', nickname: 'bilbo', race: ' Hobbit', origin: 'The Shire', attack: 2, defense: 1});

console.log(Gandalf);

Gandalf.evaluateFight(Bilbo);
