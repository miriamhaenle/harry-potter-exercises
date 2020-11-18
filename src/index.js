const harry = {
  name: 'Harry Potter',
  housePoints: 30,
};

harry.housePoints = 40;
harry.animal = 'Owl';
console.log(harry);

const ron = {
  name: 'Ron Weasly',
  housePoints: 10,
};

const student = {
  name: 'Some Dude',
  housePoints: 3,
};

const hogwarts = {
  headMaster: 'Albus Dumbledore',
  fourHouseOfHogwarts: [
    {
      name: 'Gryffindor',
      houseHead: 'Minerva McGonnagall',
      students: [harry, ron, student],
    },
    {
      name: 'Hufflepuff',
      houseHead: 'Pomona Spout',
      students: [student, student],
    },
    {
      name: 'Ravenclaw',
      houseHead: 'Filius Flitwick',
      students: [student, student, student],
    },
    {
      name: 'Slytherin',
      houseHead: 'Severus Snape',
      students: [student],
    },
  ],
};

// calculate the house points per house
function calculateHousePoints(school, houseName) {
  // Find the house in the school
  const house = school.fourHouseOfHogwarts.find(
    (house) => house.name === houseName
  );
  console.log(house);
  // calculate points

  const housePoints = house.students.reduce(
    (acculumator, currentStudent) => acculumator + currentStudent.housePoints,
    0
  );
  return housePoints;
}

console.log(calculateHousePoints(hogwarts, 'Gryffindor'));
console.log(calculateHousePoints(hogwarts, 'Hufflepuff'));
console.log(calculateHousePoints(hogwarts, 'Ravenclaw'));
console.log(calculateHousePoints(hogwarts, 'Hufflepuff'));
