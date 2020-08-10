<template>

  <div id="Car Dashboard.vue">
    <Header />
    <!-- <div id="sidebar">
     <v-avatar size='120' class='ma-12'>
      <v-img
      src='https://ik.imagekit.io/ugyodiq15/Mcdonalds-1023x675_rjGQLUAjR.jpg'
      alt='user'
      >
      </v-img>
     </v-avatar>
      <v-sheet dark flat>
      <h3 class='ma-12 heading 2'>Esther Howard</h3>
      </v-sheet>
    </div> -->
    <!-- <Header /> -->
    <div id='maindiv'>
      <v-spacer></v-spacer>
    <v-container >
      <v-dialog v-model='edit'>
        <template v-slot:activator="{ on, attrs}">
      <v-btn class='ma-2'
      v-on='on'
      v-bind='attrs'
      absolute
      right
      color='green'
      tile outlined>
          Edit
          <v-icon class='mx-auto'>mdi-pencil</v-icon>
        </v-btn>
        </template>
        <v-card>
        <v-form
        v-if='edit'
        height='200'>
          <v-text-field class='ma-6'
          v-model='Nextservice'
          prepend-icon='mdi-shield-check'
          label='Nextservice'>
          </v-text-field>
          <v-text-field class='ma-6'
          v-model='Milleage'
          prepend-icon='mdi-road-variant'
          label='Milleage Covered'>
          </v-text-field>
          <v-text-field class='ma-6'
          prepend-icon='mdi-fuel'
          v-model='Fuel'
          label='fuel'>
          </v-text-field>
          <v-text-field class='ma-6'
          prepend-icon='mdi-car-battery'
          label='Battery Power'
          v-model='Batterypower'>
          </v-text-field>
          <v-text-field class='ma-6'
          prepend-icon='mdi-gas-station'
          v-model='Engineoil'
          label='Fuel Capacity'>
          </v-text-field>
          <v-text-field class='ma-6'
          prepend-icon='mdi-car-tire-alert'
          v-model='Wheelhealth'
          label='Wheel Health'>
          </v-text-field>
          <v-btn class='ma-8'
          dark width='400' color='#046e0c'
            @click="submitForm()">
              Edit
            </v-btn>
        </v-form>
        </v-card>
        </v-dialog>
      <!-- <v-toolbar
      dense
      class='ml-10'
      floating
      rounded
      width='800px'>
      <v-text-field
      prepend-icon='mdi-magnify'
      rounded>
      </v-text-field>
      </v-toolbar> -->
      <v-row>
    <v-col>
       <v-card max-width="600">
        <v-img max-height="600"
        max-width="600"
        src="https://ik.imagekit.io/ugyodiq15/jeep-removebg-preview_BLRxosuZxB.png"></v-img>
      </v-card>
    </v-col>
    <v-col>
      <v-row class='ma-8'>
        <h3 class="font-weigth-black">Jeep Wrangler Rubicon</h3>
      </v-row>
      <v-row class='ma-8'>
        <v-card flat>
        <v-icon size="100">
          mdi-basket
        </v-icon>
        <v-text>
        Purchase Date
        </v-text>
        <v-text>2011</v-text>
        </v-card>
        <v-card flat>
        <v-icon size="100">
          mdi-shield-check
        </v-icon>
        <v-text>
        Next Service
        </v-text>
        <v-text>
            04-09-2020
          </v-text>
        </v-card>
      </v-row>
    </v-col>
      </v-row>
    </v-container>
    <v-container >
       <v-row>
         <v-card max-width="600">
        <v-col class=''>
          <v-icon size="300">
            mdi-road-variant
          </v-icon>
          <v-text>
            Milleage Covered
          </v-text>
          <v-text>
            20,000km
          </v-text>
        </v-col>
        </v-card >
        <v-card class=" align-end" max-width="600">
          <v-col class='ma-4'>
            <v-icon size="100">
              mdi-fuel
            </v-icon>
            <v-text>
              Engine Oil
            </v-text>
            <v-text>
              30%
            </v-text>
          </v-coL>
          <v-col class='ma-4'>
            <v-icon size="100">
              mdi-car-battery
            </v-icon>
            <v-text>
              Battery Power
            </v-text>
            <v-text>
              50%
            </v-text>
          </v-col>
        </v-card>
        <v-card>
          <v-col class='mt-4'>
            <v-icon size="100">
              mdi-gas-station
            </v-icon>
            <v-text>
              Fuel Capacity
            </v-text>
            <v-text>
              3.6L
            </v-text>
          </v-coL>
          <v-col >
            <v-icon size="100">
              mdi-car-tire-alert
            </v-icon>
            <v-text>
              Wheel Health
            </v-text>
            <v-text>
              70%
            </v-text>
          </v-col>
        </v-card>
      </v-row>
      <v-row>
        <v-row>
        <h1 class=mt-4>
        Upcoming Fixes
        </h1>
        </v-row>
        <v-col>
          <v-btn
          dark
          color='#046e0c'
          large
          class='ma-4'
          >
          <v-icon left>mdi-history</v-icon>
          Vehicle History
          </v-btn>
          <v-btn
          dark
          color='#000000'
          large>
          <v-icon left>mdi-calendar</v-icon>
          Book Mechanic</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-card class='mb-12'>
        <Maps />
      </v-card>
    </v-container>
    </div>
      <Footer />
  </div>
</template>

<script>
import Header from '@/components/Navbar.vue';
import Footer from '../components/Footer.vue';
/* import Drawer from '@/components/Drawer.vue'; */
import Maps from '../components/Maps.vue';

export default {
  name: 'Car Dashboard',
  components: {
    Header,
    Footer,
    Maps,
    /*  Drawer, */
  },
  data() {
    return {
      edit: false,

    };
  },
};
</script>
<style>
/* #sidebar{
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
} */
/* #maindiv{
  margin-left: 200px;
} */
</style>
