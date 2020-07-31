<template>
  <v-app>
    <router-view></router-view>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',

  components: {
    Footer,
  },

  data: () => ({
    //
  }),
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/login');
      });
    },
  },
};
</script>
