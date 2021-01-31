const faker = require('faker');

export default function getUsers() {
  const users = [
    {
      nom: faker.name.firstName(),
      prenom: faker.name.lastName(),
      numCompte: 1,
    },
    {
      nom: faker.name.firstName(),
      prenom: faker.name.lastName(),
      numCompte: 2,
    },
    {
      nom: faker.name.firstName(),
      prenom: faker.name.lastName(),
      numCompte: 3,
    },
  ];
  return users;
}
