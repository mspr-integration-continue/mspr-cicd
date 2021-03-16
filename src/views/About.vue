<template>
  <div>
    <div class="card card-style">
      <div class="card-header">Détails d'un compte</div>
      <div class="card-body text-center">
        <h5 class="card-title">{{ user[0].nom }} {{ user[0].prenom }}</h5>
        <p class="card-text">Solde actuel : {{ user[0].solde }}€</p>
        <div class="input-group mb-3">
          <input
            id="somme"
            v-model="money"
            type="number"
            class="form-control"
            placeholder="Action"
          />
          <button
            id="button-addon2 valider"
            class="btn btn-outline-secondary"
            type="button"
            @click="addMoney()"
          >
            Valider
          </button>
        </div>
      </div>
    </div>
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

<style scoped lang="scss">
.card-style {
  margin: 10vh;
}
</style>
