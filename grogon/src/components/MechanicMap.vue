/* eslint-disable indent */
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
        zoom: 16,
      }"
      @map-load="loaded"
      @map-click:points="clicked"
      @map-mouseenter:points="mouseEntered"
      @map-mouseleave:points="mouseLeft"
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
import PopupContent from './PopupContent.vue';

export default {
  name: 'app',
  components: {
    Mapbox,
  },
  data: () => ({
    accessToken: 'pk.eyJ1IjoiZXZhbnM2NjYiLCJhIjoiY2p2bTVwOGhsMHl4bjQwb2ZlbmRyYnpwYSJ9._f5MrY1PqtLY06Wfv3nQ6g',
  }),
  methods: {
    /* eslint-disable indent, semi, no-trailing-spaces, no-undef, no-param-reassign */
      // eslint-disable-next-line global-require
      /* const mapboxgl; */
      loaded(map) {
      map.addLayer({
        id: 'points',
        type: 'symbol',
      source: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          /* features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [-77.03238901390978, 38.913188059745586],
                },
                properties: {
                  title: 'Mapbox DC',
                  icon: 'monument',
                },
              },
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [-122.414, 37.776],
                },
                properties: {
                  title: 'Mapbox SF',
                  icon: 'harbor',
                },
              },
            ], */
            features: [
          {
            type: 'Feature',
            properties: {
              'marker-color': '#7e7e7e',
              'marker-size': 'medium',
              'marker-symbol': 'circle-stroked',
              title: 'John Autocare',
              img: 'https://ik.imagekit.io/ugyodiq15/African-woman-working-on-car-ONE-TIME-USE-ONLY-FOR-WP1658_4mtTNGEx5.jpg',
              Phonenumber: '+254701137925',
              icon: 'car-repair',
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
              title: 'Shwari Autocare',
              img: 'https://ik.imagekit.io/ugyodiq15/slider-2-1024x480_MVkE1K2dB.png',
              Phonenumber: '+254701137925',
              icon: 'car-repair',
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
              title: 'Get it Right Autoshop',
              img: 'https://ik.imagekit.io/ugyodiq15/Friendship-culminates-in-thriving-car-workshop-BUSINESS-PARTNERS-696x435_zgC5Am81x.jpg',
              Phonenumber: '+254701137925',
              icon: 'car-repair',
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
              title: 'Isaax Autoshop',
              img: 'https://ik.imagekit.io/ugyodiq15/61-Basic-Auto-Mechanic-Skills-To-Fix-Your-Car-Yourself-ss_iegteddlH.jpg',
              Phonenumber: '+254701137925',
              icon: 'car-repair',
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
              title: 'EasyFix Autocare',
              img: 'https://ik.imagekit.io/ugyodiq15/African-woman-working-on-car-ONE-TIME-USE-ONLY-FOR-WP1658_4mtTNGEx5.jpg',
              Phonenumber: '+254701137925',
              icon: 'car-repair',
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
              title: 'Fahari Car care',
              img: 'https://ik.imagekit.io/ugyodiq15/download_swcp-EkcC.jpeg',
              Phonenumber: '+254701137925',
              icon: 'car-repair',
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
              title: 'Gears And Hamer auto',
              img: 'https://ik.imagekit.io/ugyodiq15/slider-2-1024x480_MVkE1K2dB.png',
              Phonenumber: '+254701137925',
              icon: 'car-repair',
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
              title: 'NeverStop auto',
              img: 'https://ik.imagekit.io/ugyodiq15/images_SWe-SRYw8.jpeg',
              Phonenumber: '+254701137925',
              icon: 'car-repair',
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
              title: 'East Mechanics',
              img: 'https://ik.imagekit.io/ugyodiq15/61-Basic-Auto-Mechanic-Skills-To-Fix-Your-Car-Yourself-ss_iegteddlH.jpg',
              Phonenumber: '+254701137925',
              icon: 'car-repair',
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
              title: 'Nostra Autocare',
              img: 'https://ik.imagekit.io/ugyodiq15/Friendship-culminates-in-thriving-car-workshop-BUSINESS-PARTNERS-696x435_zgC5Am81x.jpg',
              Phonenumber: '+254701137925',
              rating: 0,
              icon: 'car-repair',
            },
            geometry: {
              type: 'Point',
              coordinates: [
                36.95054054260253,
                -1.16155296494586,
              ],
            },
          },
          {
      type: 'Feature',
      properties: {
        'marker-color': '#3ecc5a',
        'marker-size': 'medium',
        'marker-symbol': 'circle',
        title: 'Joe Mechanic',
        img: 'https://ik.imagekit.io/ugyodiq15/Friendship-culminates-in-thriving-car-workshop-BUSINESS-PARTNERS-696x435_zgC5Am81x.jpg',
        Phonenumber: '+254701137925',
        rating: 0,
        icon: 'car-repair',
      },
      geometry: {
        type: 'Point',
        coordinates: [
          36.81861877441406,
          -1.2745664202152647,
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        'marker-color': '#7e7e7e',
        'marker-size': 'medium',
        'marker-symbol': 'circle-stroked',
        title: 'Craft Mechanic',
        img: 'https://ik.imagekit.io/ugyodiq15/Friendship-culminates-in-thriving-car-workshop-BUSINESS-PARTNERS-696x435_zgC5Am81x.jpg',
        Phonenumber: '+254701137925',
        rating: 0,
        icon: 'car-repair',
      },
      geometry: {
        type: 'Point',
        coordinates: [
          36.83218002319336,
          -1.2806588841170317,
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        'marker-color': '#7e7e7e',
        'marker-size': 'medium',
        'marker-symbol': 'circle-stroked',
        title: 'Healthy Engine Mechanics',
        img: 'https://ik.imagekit.io/ugyodiq15/Friendship-culminates-in-thriving-car-workshop-BUSINESS-PARTNERS-696x435_zgC5Am81x.jpg',
        Phonenumber: '+254701137925',
        rating: 0,
        icon: 'car-repair',
      },
      geometry: {
        type: 'Point',
        coordinates: [
          36.81140899658203,
          -1.2874378057993314,
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        'marker-color': '#7e7e7e',
        'marker-size': 'medium',
        'marker-symbol': 'circle-stroked',
        title: 'Connected Autoshop',
        img: 'https://ik.imagekit.io/ugyodiq15/Friendship-culminates-in-thriving-car-workshop-BUSINESS-PARTNERS-696x435_zgC5Am81x.jpg',
        Phonenumber: '+254701137925',
        rating: 0,
        icon: 'car-repair',
      },
      geometry: {
        type: 'Point',
        coordinates: [
          36.84041976928711,
          -1.2899262662028559,
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        'marker-color': '#7e7e7e',
        'marker-size': 'medium',
        'marker-symbol': 'circle-stroked',
        title: 'Total Autoshop',
        img: 'https://ik.imagekit.io/ugyodiq15/Friendship-culminates-in-thriving-car-workshop-BUSINESS-PARTNERS-696x435_zgC5Am81x.jpg',
        Phonenumber: '+254701137925',
        rating: 0,
        icon: 'car-repair',
      },
      geometry: {
        type: 'Point',
        coordinates: [
          36.831321716308594,
          -1.2690746094145051,
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        'marker-color': '#7e7e7e',
        'marker-size': 'medium',
        'marker-symbol': 'circle-stroked',
        title: 'AudreyM Autoshop',
        img: 'https://ik.imagekit.io/ugyodiq15/Friendship-culminates-in-thriving-car-workshop-BUSINESS-PARTNERS-696x435_zgC5Am81x.jpg',
        Phonenumber: '+254701137925',
        rating: 0,
        icon: 'car-repair',
      },
      geometry: {
        type: 'Point',
        coordinates: [
          36.8239402770996,
          -1.3043421267144832,
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        'marker-color': '#7e7e7e',
        'marker-size': 'medium',
        'marker-symbol': 'circle-stroked',
        title: 'Central Mechanics',
        img: 'https://ik.imagekit.io/ugyodiq15/Friendship-culminates-in-thriving-car-workshop-BUSINESS-PARTNERS-696x435_zgC5Am81x.jpg',
        Phonenumber: '+254701137925',
        rating: 0,
        icon: 'car-repair',
      },
      geometry: {
        type: 'Point',
        coordinates: [
          36.81964874267578,
          -1.2922431064599436,
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        'marker-color': '#7e7e7e',
        'marker-size': 'medium',
        'marker-symbol': 'circle-stroked',
        title: 'Komp Autoshop',
        img: 'https://ik.imagekit.io/ugyodiq15/Friendship-culminates-in-thriving-car-workshop-BUSINESS-PARTNERS-696x435_zgC5Am81x.jpg',
        Phonenumber: '+254701137925',
        rating: 0,
        icon: 'car-repair',
      },
      geometry: {
        type: 'Point',
        coordinates: [
          36.824026107788086,
          -1.2782562240223017,
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        'marker-color': '#7e7e7e',
        'marker-size': 'medium',
        'marker-symbol': 'circle-stroked',
        title: 'Freedom Mechanic',
        img: 'https://ik.imagekit.io/ugyodiq15/Friendship-culminates-in-thriving-car-workshop-BUSINESS-PARTNERS-696x435_zgC5Am81x.jpg',
        Phonenumber: '+254701137925',
        rating: 0,
        icon: 'car-repair',
      },
      geometry: {
        type: 'Point',
        coordinates: [
          36.81235313415527,
          -1.30296919116185,
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        'marker-color': '#7e7e7e',
        'marker-size': 'medium',
        'marker-symbol': 'circle-stroked',
        title: 'Green Tank Autoshop',
        img: 'https://ik.imagekit.io/ugyodiq15/Friendship-culminates-in-thriving-car-workshop-BUSINESS-PARTNERS-696x435_zgC5Am81x.jpg',
        Phonenumber: '+254701137925',
        rating: 0,
        icon: 'car-repair',
      },
      geometry: {
        type: 'Point',
        coordinates: [
          36.80145263671875,
          -1.2807446933644824,
        ],
      },
    },
        ],
          },
        },
        layout: {
          'icon-image': '{icon}-15',
          'text-field': '{title}',
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-offset': [0, 0.6],
          'text-anchor': 'top',
        },
      })
    },
    clicked(map, e) {
      if (e.features) {
        const coordinates = e.features[0].geometry.coordinates.slice()
 
        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
        }
 
        new mapboxgl.Popup()
          .setLngLat({ lng: coordinates[0], lat: coordinates[1] })
          .setHTML('<div id="vue-popup-content"></div>')
          .addTo(map)
 
        new PopupContent({
          propsData: { feature: e.features[0] },
        }).$mount('#vue-popup-content')
      }
    },
    mouseEntered(map) {
      map.getCanvas().style.cursor = 'pointer'
    },
    mouseLeft(map) {
      map.getCanvas().style.cursor = ''
    },
  },
          /* eslint-disable indent */
        /* features: [
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
        },
      }
      })
      } */
      /* geojson.features.forEach((marker) => {
        // create a HTML element for each feature
        const el = document.createElement('div');
        el.className = 'Map__marker';

        // make a marker for each feature and add to the map
        new Mapbox.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);
      }); */
      /* clicked(map, e) {
      if (e.features) {
        const coordinates = e.features[0].geometry.coordinates.slice()
 
        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
        }
 
        new mapboxgl.Popup()
          .setLngLat({ lng: coordinates[0], lat: coordinates[1] })
          .setHTML('<div id="vue-popup-content"></div>')
          .addTo(map)
 
        new PopupContent({
          propsData: { feature: e.features[0] },
        }).$mount('#vue-popup-content')
      }
    },
    mouseEntered(map) {
      map.getCanvas().style.cursor = 'pointer'
    },
    mouseLeft(map) {
      map.getCanvas().style.cursor = ''
    },
    }, */
  /* methods: {
    loaded(map) {
      map.addLayer({
        id: 'points',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [-77.03238901390978, 38.913188059745586],
                },
                properties: {
                  title: 'Mapbox DC',
                  icon: 'monument',
                },
              },
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [-122.414, 37.776],
                },
                properties: {
                  title: 'Mapbox SF',
                  icon: 'harbor',
                },
              },
            ],
          },
        },
        layout: {
          'icon-image': '{icon}-15',
          'text-field': '{title}',
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-offset': [0, 0.6],
          'text-anchor': 'top',
        },
      });
    },
    zoomend(map, e) { // eslint-disable-line no-unused-vars
      console.log('Map zoomed');
    },
    clicked(map, e) {
      const title = e.features[0].properties.title; // eslint-disable-line prefer-destructuring
      console.log(title);
    },
    geolocateError(control, positionError) {
      console.log(positionError);
    },
    geolocate(control, position) {
      console.log(
        `User position: ${position.coords.latitude}, ${position.coords.longitude}`,
      );
    },
  }, */
};
</script>
