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
        :center="coordinates"
        :zoom="zoom"
        @map-load="addMarkers"
      >
      <MglAttributionControl />
      <MglGeolocateControl position="top-right"/>
      <MglMarker
        :coordinates="coordinates"
        :color='blue'>
      <MglPopup
        :coordinates="coordinates">
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
    mapStyle: 'mapbox://styles/evans666/ckdnkxg7y16gf1iqj0zh8g9mu',
    myCoordinates: {
      Lat: 0,
      Lon: 0,
    },
    mapCoodinates: {
      lat: 0,
      lon: 0,
    },
    showUserLocation: true,
    zoom: 15,
    map: [],
    coordinates: [36.9390643853648526, -1.156947303772],
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
    /* coordinates() {
      //  Map function assist in mapping coordinates to their exact member array
      const res = this.coordinated.map(({ longitude, latitude }) => [
        longitude,
        latitude,
      ]);
      return res;
    }, */
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
    /* await navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        this.longitude = coords.longitutde;
        this.latitude = coords.latitude;
        const data = this.fetchData(coords);
        this.coordinated = data;
      },
    ); */
  },
  methods: {
    /*  async fetchData([latitude, longitude]) {
      const data = await this.coordinated.push([
        latitude,
        longitude,
      ]);
      return data;
    },
    getCoordinate({ longitude, latitude }) {
      return [longitude, latitude];
    }, */
    addMarkers(map) {
      // eslint-disable-next-line global-require
      /* const mapboxgl; */
      const geojson = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {
              'marker-color': '#7e7e7e',
              'marker-size': 'medium',
              'marker-symbol': 'circle-stroked',
              Name: 'John Autocare',
            },
            geometry: {
              type: 'Point',
              coordinates: [
                36.9430947303772,
                -1.1590643853648526,
              ],
            },
          },
          {
            type: 'Feature',
            properties: {
              'marker-color': '#7e7e7e',
              'marker-size': 'medium',
              'marker-symbol': 'circle-stroked',
              Name: 'Shwari Autocare',
            },
            geometry: {
              type: 'Point',
              coordinates: [
                36.936163902282715,
                -1.1609308202558843,
              ],
            },
          },
          {
            type: 'Feature',
            properties: {
              'marker-color': '#7e7e7e',
              'marker-size': 'medium',
              'marker-symbol': 'circle-stroked',
              Name: 'Get it Right Autoshop',
            },
            geometry: {
              type: 'Point',
              coordinates: [
                36.936635971069336,
                -1.1611453529230646,
              ],
            },
          },
          {
            type: 'Feature',
            properties: {
              'marker-color': '#7e7e7e',
              'marker-size': 'medium',
              'marker-symbol': 'circle-stroked',
              Name: 'Isaax Autoshop',
            },
            geometry: {
              type: 'Point',
              coordinates: [
                36.93378210067748,
                -1.1593432780129989,
              ],
            },
          },
          {
            type: 'Feature',
            properties: {
              'marker-color': '#7e7e7e',
              'marker-size': 'medium',
              'marker-symbol': 'circle-stroked',
              Name: 'EasyFix Autocare',
            },
            geometry: {
              type: 'Point',
              coordinates: [
                36.9364857673645,
                -1.157262309130391,
              ],
            },
          },
          {
            type: 'Feature',
            properties: {
              'marker-color': '#7e7e7e',
              'marker-size': 'medium',
              'marker-symbol': 'circle-stroked',
              Name: 'Fahari Car care',
            },
            geometry: {
              type: 'Point',
              coordinates: [
                36.93326711654663,
                -1.1520277002481618,
              ],
            },
          },
          {
            type: 'Feature',
            properties: {
              'marker-color': '#7e7e7e',
              'marker-size': 'medium',
              'marker-symbol': 'circle-stroked',
              Name: 'Gears And Hamer auto',
            },
            geometry: {
              type: 'Point',
              coordinates: [
                36.92779541015625,
                -1.1562325507679554,
              ],
            },
          },
          {
            type: 'Feature',
            properties: {
              'marker-color': '#7e7e7e',
              'marker-size': 'medium',
              'marker-symbol': 'circle-stroked',
              Name: 'NeverStop auto',
            },
            geometry: {
              type: 'Point',
              coordinates: [
                36.92358970642089,
                -1.1546879125240137,
              ],
            },
          },
          {
            type: 'Feature',
            properties: {
              'marker-color': '#7e7e7e',
              'marker-size': 'medium',
              'marker-symbol': 'circle-stroked',
              Name: 'East Mechanics',
            },
            geometry: {
              type: 'Point',
              coordinates: [
                36.919426918029785,
                -1.1532290867451627,
              ],
            },
          },
          {
            type: 'Feature',
            properties: {
              'marker-color': '#7e7e7e',
              'marker-size': 'medium',
              'marker-symbol': 'circle-stroked',
              Name: 'Nostra Autocare',
            },
            geometry: {
              type: 'Point',
              coordinates: [
                36.95054054260253,
                -1.16155296494586,
              ],
            },
          },
        ],
      };
      geojson.features.forEach((marker) => {
        // create a HTML element for each feature
        const el = document.createElement('div');
        el.className = 'Map__marker';

        // make a marker for each feature and add to the map
        new Mapbox.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);
      });
    },
  },
  updated: {
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
