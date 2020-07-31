<template>
  <div id="maps">
    <v-container fluid>
       <v-card
      flat
      height='400px'
      class='mb-12'
      >
      <MglMap
        :accessToken="accessToken"
        :mapStyle="mapStyle"
        :center="[ -1.2841,36.8155 ]"
        :zoom="zoom"
      >
      <MglMarker
        :coordinates="fetchData(coordinated)"
        :color='blue'>
      <MglPopup
        :coordinates='fetchData(coordinated)'>
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
              <v-list-item-title class="headline mb-1" v-text='mech.name'></v-list-item-title>
              <v-list-item-icon>
                <v-icon v-text='mech.icon'></v-icon>
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
         <v-icon slot="marker">mdi-map-marker</v-icon>
      </MglPopup>
      </MglMarker>
    </MglMap>
</v-card>
</v-container>
  </div>
</template>
<script>
import Mapbox from 'mapbox-gl';
import {
  MglMap,
  MglPopup,
  MglMarker,
} from 'vue-mapbox';

export default {
  components: {
    /* Mapbox, */
    MglMap,
    MglPopup,
    MglMarker,
  },
  data: () => ({
    accessToken: 'pk.eyJ1IjoiZXZhbnM2NjYiLCJhIjoiY2p2bTVwOGhsMHl4bjQwb2ZlbmRyYnpwYSJ9._f5MrY1PqtLY06Wfv3nQ6g',
    mapStyle: 'mapbox://styles/mapbox/streets-v11',
    Latitude: '',
    Longitude: '',
    showUserLocation: true,
    zoom: 3,
    map: [],
    coordinated: [],
    mechs: [
      {
        img: 'https://ik.imagekit.io/ugyodiq15/Mcdonalds-1023x675_rjGQLUAjR.jpg',
        name: 'jane Kathure',
        icon: 'mdi-cellphone',
        info: '0712354693 ',
      },
    ],
  }),
  // computed property
  computed: {
    /* coordinates() { */
    // Map function assist in mapping coordinates to their exact member array
    /* const res = this.coordinated.map(({ longitude, latitude }) => [
        longitude,
        latitude,
      ]);
      return res; */
    /* }, */
  },
  /* mounted() {
    const Mapboxgl = require('mapbox-gl');

    const coordinated = this.map.addControl(
      new Mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      }),
    );
  }, */
  created() {
    this.mapbox = Mapbox;
  },
  // Allow us to receive our data immediately its been rendered
  // Although they do not function when server is rendering
  // Used mostly with promises
  async mounted() {
    await navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        this.longitude = coords.longitutde;
        this.latitude = coords.latitude;
        const data = this.fetchData(coords);
        this.coordinated = data;
      },
    );
  },
  methods: {
    async fetchData([latitude, longitude]) {
      const data = await this.coordinated.push([
        latitude,
        longitude,
      ]);
      return data;
    },
    getCoordinate({ longitude, latitude }) {
      return [longitude, latitude];
    },
  },
  // This lifecycle hook calls the mapbox map even before the component is initialised
};
</script>
<style>
#map {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }
</style>
