<template>
    <div id='app'>
            <v-container fluid>
       <v-card
      flat
      height='400px'
      class='mb-12'
      >
    <mapbox
      :access-token="accessToken"
      :map-options="{
        style: 'mapbox://styles/evans666/ckdnkxg7y16gf1iqj0zh8g9mu',
        center: [36.9430947303772,
                -1.1590643853648526],
        zoom: 3,
      }"
      :geolocate-control="{
        show: true,
        position: 'top-left',
      }"
    />
                </v-card>
        </v-container>
    </div>
</template>
<style>
#map {
  width: 100%;
  height: 500px;
}
</style>
<script>
import Mapbox from 'mapbox-gl-vue';

export default {
  name: 'app',
  components: {
    Mapbox,
  },
  data: () => ({
    accessToken: 'pk.eyJ1IjoiZXZhbnM2NjYiLCJhIjoiY2p2bTVwOGhsMHl4bjQwb2ZlbmRyYnpwYSJ9._f5MrY1PqtLY06Wfv3nQ6g',
  }),
};
</script>
