<template>
  <div class="home">
    <div class="filtre">
      <input type="text" v-model="filtre">
    </div>
    <div v-for="u in userDatas" :key="u.nom" @click="voirCompte(u.numCompte)" :id="u.numCompte" >
      <div v-if="u.nom.startsWith(filtre)">
        {{u}}
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapState('users', ['userDatas']),
  },
  mounted() {
  },
  methods: {
    voirCompte(numCompte) {
      this.$router.push({ name: 'About', params: { numCompte } });
    },
  },
  data() {
    return {
      filtre: '',
    };
  },
};
</script>
