const persons = [
  { name: "Pesho", age: 20 },
  { name: "Ivan", age: 14 },
  { name: "Kiro", age: 44 },
];

const personsWithDoubleTheAge = persons.map((p) => {
  return { ...p, age: p.age * 2 };
});

const personsAbove18 = persons.find((p) => p.age >= 18);

const getSumOfAllAgesOfPersons = persons.reduce((acc, val) => {
  return acc + val.age;
}, 0);

console.log(getSumOfAllAgesOfPersons);
