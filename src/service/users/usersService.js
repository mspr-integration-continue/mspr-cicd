import apiHttp from '@/service/http/apiHttp';

export default {
  getUsersFromApi() {
    let users,
      errorLabel = '';

    users = apiHttp.get();

    if (users === undefined) {
      errorLabel = 'Une erreur est survenue';
    } else if (users.length === 0) {
      errorLabel = 'Il n y a aucun utilisateur';
    }

    return { users: users, error: errorLabel };
  },
};
