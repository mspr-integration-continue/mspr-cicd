<template>
  <div class="home">
    <div class="filtre">
      <input v-model="filtre" type="text" />
    </div>
    <div v-for="u in userDatas" :id="u.numCompte" :key="u.nom" @click="voirCompte(u.numCompte)">
      <div v-if="u.nom.startsWith(filtre)">
        {{ u }}
      </div>
    </div>
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
