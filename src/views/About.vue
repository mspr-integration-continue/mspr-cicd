<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <span>Nom : {{user[0].nom}}</span>
      <span> Prenom : {{user[0].prenom}}</span>
      <div id="solde" >{{user[0].solde}}</div>
    </div>
    <input id="somme" type="number" v-model="money"/>
    <button id="valider" @click="addMoney()">Valider</button>

  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('users', ['userDatas']),
  },
  name: 'About',
  mounted() {
    console.log(this.userDatas);
    console.log(this.$route.params.numCompte);
    this.user = this.userDatas.filter((u) => u.numCompte === this.$route.params.numCompte);
    this.index = this.userDatas.indexOf(this.user[0]);
    console.log('bjr je suis l\'index');
    console.log(this.userDatas.indexOf(this.user[0]));
    console.log(this.userDatas);
    console.log(this.user);
  },
  methods: {
    addMoney() {
      console.log(this.user[0].solde);
      let solde = parseInt(this.user[0].solde, 10);
      solde += parseInt(this.money, 10);
      this.user[0].solde = solde;
      this.userDatas[this.index] = this.user;
      // this.saveData(usersData);
    },
  },
  data() {
    return {
      user: {},
      money: null,
      index: null,
    };
  },
};
</script>
