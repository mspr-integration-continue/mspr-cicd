
    window.reactComponents = {};

    window.vueComponents = {};

  
      import Vue from 'vue/dist/vue.js';

      window.Vue = Vue;


      import VueWrapper from '../node_modules/better-docs/lib/vue-wrapper.js';

      window.VueWrapper = VueWrapper;

    
    import './styles/reset.css';

    import './styles/iframe.css';

  import Component0 from '../src/views/About.vue';
vueComponents['About'] = Component0;

import Component1 from '../src/components/HelloWorld.vue';
vueComponents['HelloWorld'] = Component1;

import Component2 from '../src/views/Home.vue';
vueComponents['Home'] = Component2;

import Component3 from '../src/components/ProgressBar.vue';
vueComponents['ProgressBar'] = Component3;