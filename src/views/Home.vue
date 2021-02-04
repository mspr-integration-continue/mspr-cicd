<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
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
