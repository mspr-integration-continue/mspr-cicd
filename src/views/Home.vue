<template>
  <div class="home">
    <div v-for="u in userDatas" :key="u.nom" @click="voirCompte(u.numCompte)" :id="u.numCompte">
      {{u}}
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
      console.log(numCompte);
    },
  },
  data() {
    return {
    };
  },
};
</script>
