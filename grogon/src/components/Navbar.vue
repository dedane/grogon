<template>
  <v-toolbar color="#FFFFFF">
   <v-btn text @click="$router.push('/')">
    <v-img src='https://ik.imagekit.io/ugyodiq15/grogon-removebg-preview_2_yObMp_R1_.svg' max-width='160' max-height='160'></v-img>
  </v-btn>
  <v-spacer></v-spacer>
  <v-col justify-end >
    <v-btn class='text-center mx-2 black--text'
    @click="$router.push('/Shop')"
    text>
    Shop
    </v-btn>
    <v-btn class='text-center mx-2 black--text'
    @click="$router.push('/MechDash')"
    text>
    Mechanic
    </v-btn>
    <v-btn class='text-center mx-2 black--text'
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
  <v-btn color='black' dark>
    Logout
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
      this.$store.actions.logout().then(() => {
        this.$router.push('/login');
      });
    },
  },
};
</script>

<style>

</style>
