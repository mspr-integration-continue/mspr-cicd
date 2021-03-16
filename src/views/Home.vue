<template>
  <div class="home" style="background: #f8f8f8">
    <input
      v-model="filtre"
      class="form-control input-home"
      type="text"
      placeholder="Rechercher un compte"
    />
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Nom</th>
          <th scope="col">Prenom</th>
          <th scope="col">Numéro de compte</th>
          <th scope="col">Solde</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="u in userDatas" :id="u.numCompte" :key="u.nom" @click="voirCompte(u.numCompte)">
          <template v-if="u.nom.startsWith(filtre)">
            <th>{{ u.nom }}</th>
            <td>{{ u.prenom }}</td>
            <td>{{ u.numCompte }}</td>
            <td>{{ u.solde }} €</td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

/**
 * @component
 */
export default {
  name: 'Home',
  data() {
    return {
      filtre: '',
    };
  },
  computed: {
    ...mapState('users', ['userDatas']),
  },
  created() {
    this.getUsers();
  },
  methods: {
    ...mapActions('users', ['getUsers']),
    voirCompte(numCompte) {
      this.$router.push({ name: 'About', params: { numCompte } });
    },
  },
};
</script>

<style scoped lang="scss">
.input-home {
  margin: 10vh 0 10vh 0;
}
</style>
