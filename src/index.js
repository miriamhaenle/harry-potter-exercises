const harry = {
  name: 'Harry Potter',
  housePoints: 30,
};

harry.housePoints = 40;
harry.animal = 'Owl';

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
  fourHousesOfHogwarts: [
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

const findHouse = (school, houseName) =>
  school.fourHousesOfHogwarts.find((house) => house.name === houseName);

const calculateHousePoints = (school, houseName) =>
  findHouse(school, houseName).students.reduce(
    (accumulator, currentStudent) => accumulator + currentStudent.housePoints,
    0
  );

console.log(calculateHousePoints(hogwarts, 'Gryffindor'));
console.log(calculateHousePoints(hogwarts, 'Hufflepuff'));
console.log(calculateHousePoints(hogwarts, 'Ravenclaw'));
console.log(calculateHousePoints(hogwarts, 'Hufflepuff'));

//const listOfHousePoints = [];

// for (let house of hogwarts.fourHousesOfHogwarts) {
//   listOfHousePoints.push({
//     name: house.name,
//     points: calculateHousePoints(hogwarts, house.name),
//   });
// }

// Modern functional approach
const listOfHousePoints = hogwarts.fourHousesOfHogwarts.map((house) => ({
  name: house.name,
  points: calculateHousePoints(hogwarts, house.name),
}));

console.log(listOfHousePoints);

const housesSortedByPoints = [...listOfHousePoints];
const winningHouse = housesSortedByPoints.sort(sortHouses).reverse()[0];

console.log(winningHouse);

function sortHouses(houseA, houseB) {
  return houseA.points - houseB.points;
}
