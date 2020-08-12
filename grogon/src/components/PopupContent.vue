<template>
  <div>
    <h3>{{ feature.properties.title }}</h3>
    <v-card v-model='mechs'
           v-for='mech in mechs'
           :key='mech.img'
           class="mx-auto">
          <v-list-item-avatar
             tile
             size='80'>
             <v-img :src='mech.img'>
             </v-img>
          </v-list-item-avatar>
          <v-list-item-content>
              <div class='overline mb-4'>Mechanic</div>
              <v-list-item-title class="headline mb-1"
              v-text='feature.properties.title'></v-list-item-title>
              <v-list-item-icon>
                <v-icon v-text='feature.properties.icon'></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text='mech.info'></v-list-item-title>
              </v-list-item-content>
          </v-list-item-content>
            <v-card-actions>
              <v-btn rounded large color='green' dark>Request</v-btn>
              <v-btn rounded large outlined='green' >Call</v-btn>
            </v-card-actions>
           </v-card>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    feature: {
      required: true,
      type: Object,
    },
  },
  methods: {
    popupClicked() {
      alert('Learn more clicked');
    },
  },
});
</script>
