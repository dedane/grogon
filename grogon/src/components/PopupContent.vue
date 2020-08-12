<template>
  <v-card height='mx-auto'>
    <h1 class='mt-2 mb-2'>{{ feature.properties.title }}</h1>
    <v-img :src= 'feature.properties.img'></v-img>
    <h4 class='mt-4'>Phone Number: {{ feature.properties.Phonenumber }}</h4>
    <v-divider></v-divider>
    <h5> Current Ratings </h5>
    <v-card-actions>
    <v-rating
    v-model='rating'
    full-icon='mdi-star'
    empty-icon='mdi-star'
    ></v-rating>
    </v-card-actions>
    <button @click="popupClicked">Book Mechanic</button>
  </v-card>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    rating: 0,
  }),
  props: {
    feature: {
      required: true,
      type: Object,
    },
  },
  methods: {
    popupClicked() {
      alert('Mechanics number is');
    },
  },
});
</script>
