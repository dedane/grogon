<template>
  <v-toolbar color="#FFFFFF">
   <v-btn text @click="$router.push('/')">
    <v-img src='https://ik.imagekit.io/ugyodiq15/grogon-removebg-preview_2_yObMp_R1_.svg' max-width='160' max-height='160'></v-img>
  </v-btn>
  <v-spacer></v-spacer>
  <div v-if="currentUser.name">
    {{ currentUser.name }}
    <v-btn text class='mr-2' @click='logoutUser'>Logout</v-btn>
  </div>
  <v-col justify-end >
    <v-btn class='text-center mx-2 black--text'
    @click="$router.push('/')"
    text>
    Home
    </v-btn>
    <v-btn v-if='isloggedIn'
    class='text-center mx-2 black--text'
    @click="$router.push('/MechDash')"
    text>
    Mechanic
    </v-btn>
    <v-btn v-if='isloggedIn'
    class='text-center mx-2 black--text'
    @click="$router.push('/CarDash')"
    text>
    Carowner
    </v-btn>
  </v-col>
  <v-spacer/>
  <!-- <v-avatar @click="dialog = true">
    <v-img
      src='https://ik.imagekit.io/ugyodiq15/Mcdonalds-1023x675_rjGQLUAjR.jpg'
      alt='user'
      >
    </v-img>
  </v-avatar>
  <v-dialog v-model='dialog' persistent max-width='300'>
    <v-card>
      <v-card-title
      :append-icon='mdi-person'>
        Name
      </v-card-title>
      <v-card-subtitle>
        Joy Lebo
      </v-card-subtitle>
       <v-card-title
       :append-icon='mdi-phone'>
        Phone Number
      </v-card-title>
      <v-card-subtitle>
        +254 701113792
      </v-card-subtitle>
      <v-card-actions>
        <v-btn color='success' @click="dialog = false">Awesome</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog> -->
  <v-btn v-if='isLoggedIn'
  color='black' dark v-on:click="logout">
    Logout
  </v-btn>
  <v-btn v-if='!isLoggedIn'
  class='mx-2'
  color='green' dark
  @click="$router.push('/Carlogin')">
    Login
  </v-btn>
  <v-btn v-if='!isLoggedIn'
  class='mx-2'
  color='red' dark
  @click="$router.push('/Carregistration')">
    Register
  </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    isLoggedIn: false,
    currentUser: false,
  }),
  methods: {
    logout() {
      this.$store.dispatch('Logout')
        .then(() => {
          this.$router.push('/');
        });
    },
  },
};
</script>

<style>

</style>
