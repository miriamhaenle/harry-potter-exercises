// Objects
const hogwartsStudent = {
  name: 'Harry Potter',
  age: 11,
  isWizard: true,
  pet: 'Owl',
  petName: 'Hedwig',
};

function introduceWizard(wizard) {
  if (wizard?.isWizard) {
    return `${wizard?.name} is ${wizard?.age} years old. His pets name is ${wizard?.petName}.`;
  } else {
    return `${wizard?.name} is no wizard!`;
  }
}

console.log(introduceWizard(hogwartsStudent));

// Array of objects
const spells = [
  {
    spell: 'Alohomora',
    description: 'Unlocking charm',
  },
  {
    spell: 'Bombarda',
    description: 'Exploding charm',
  },
  {
    spell: 'Engorgio',
    description: 'Engorgement charm',
  },
  {
    spell: 'Expecto Patronum',
    description: 'Patronus charm',
  },
  {
    spell: 'Expelliarmus',
    description: 'Disarming charm',
  },
  {
    spell: 'Finite Incantatem',
    description: 'General counter-spell',
  },
  {
    spell: 'Immobulus',
    description: 'Freezing charm',
  },
  {
    spell: 'Incendio',
    description: 'Fire-making spell',
  },
  {
    spell: 'Lumos',
    description: 'Wand-lighting charm',
  },
  {
    spell: 'Petrificus Totalus',
    description: 'Full Body-Bind Curse',
  },
];

function castSpell(spells) {
  const index = Math.floor(Math.random() * spells.length);
  return `Harry casts: ${spells[index].spell.toUpperCase()}!`;
}

console.log(castSpell(spells));
