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
import { mapState } from 'vuex';

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
  mounted() {},
  methods: {
    voirCompte(numCompte) {
      this.$router.push({ name: 'About', params: { numCompte } });
    },
  },
};
</script>
