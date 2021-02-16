export default {
  get() {
    //Permet de simuler l'appel à une API
    return [
      {
        prenom: 'Bryan',
        nom: 'Breton',
        numCompte: '123456',
        solde: 10000,
      },
      {
        prenom: 'Axel',
        nom: 'Blusseau',
        numCompte: '1234567',
        solde: 10,
      },
      {
        prenom: 'Alexandre',
        nom: 'Cailler',
        numCompte: '12345678',
        solde: 1000,
      },
    ];
  },
};
