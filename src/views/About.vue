<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <span>Nom : {{ user[0].nom }}</span>
      <span> Prenom : {{ user[0].prenom }}</span>
      <div id="solde">{{ user[0].solde }}</div>
    </div>
    <input id="somme" v-model="money" type="number" />
    <button id="valider" @click="addMoney()">Valider</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

/**
 * @component
 */
export default {
  name: 'About',
  data() {
    return {
      user: {},
      money: null,
      index: null,
    };
  },
  computed: {
    ...mapState('users', ['userDatas']),
  },
  mounted() {
    this.user = this.userDatas.filter((u) => u.numCompte === this.$route.params.numCompte);
    this.index = this.userDatas.indexOf(this.user[0]);
  },
  methods: {
    addMoney() {
      let solde = parseInt(this.user[0].solde, 10);
      solde = this.validationMoney(solde, parseInt(this.money, 10));
      this.user[0].solde = solde;
      this.userDatas[this.index] = this.user;
    },
    validationMoney(solde, ajout) {
      const newSolde = solde + ajout > 0 ? solde + ajout : solde;
      return newSolde;
    },
  },
};
</script>
