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
  </v-toolbar>
</template>

<script>
export default {

};
</script>

<style>

</style>
