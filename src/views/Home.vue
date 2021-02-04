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
  methods: {
    /**
     * Add two numbers.
     * @param{number} num1 The first number to add
     * @param{number} num2 The second number to add
     * @return{number} The sum of the two numbers.
     */
    addNums: function (num1, num2) {
      return num1 + num2;
    },

    /**
     * Concatenate two strings.
     * @param{string} str1 The first string to concatenate.
     * @param{string} str2 The second string to concatenate.
     * @return{string} The concatentation of the two strings.
     */
    concat: function (str1, str2) {
      return str1 + str2;
    },
  },
};
</script>
