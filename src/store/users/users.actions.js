import usersService from '@/service/users/usersService';

export default {
  getUsers({ commit }) {
    const res = usersService.getUsersFromApi();
    commit('setUsers', res.users);
  },
};
