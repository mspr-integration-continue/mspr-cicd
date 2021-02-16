/* eslint-disable no-undef */
import usersService from '@/service/users/usersService';
import apiHttp from '@/service/http/apiHttp';

jest.mock('@/service/http/apiHttp', () => ({
  get: jest.fn(),
}));

describe('usersService', () => {
  describe('getUsers', () => {
    const usersStub = [
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
    ];

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should throw error when undefined', async () => {
      apiHttp.get.mockImplementation(() => undefined);
      const res = usersService.getUsersFromApi();
      expect(res.users).toBe(undefined);
      expect(res.error).toBe('Une erreur est survenue');
      expect(apiHttp.get).toHaveBeenCalledTimes(1);
    });

    it('should throw error when empty', async () => {
      apiHttp.get.mockImplementation(() => []);
      const res = usersService.getUsersFromApi();
      expect(res.users).toStrictEqual([]);
      expect(res.error).toBe('Il n y a aucun utilisateur');
      expect(apiHttp.get).toHaveBeenCalledTimes(1);
    });

    it('should be ok if datas are retrieved', async () => {
      apiHttp.get.mockImplementation(() => usersStub);
      const res = usersService.getUsersFromApi();
      expect(res.users[0].prenom).toBe('Bryan');
      expect(res.error).toBe('');
      expect(apiHttp.get).toHaveBeenCalledTimes(1);
    });
  });
});
