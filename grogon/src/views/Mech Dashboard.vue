<template>
  <div id="Mech Dashboard">
    <Header />
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title class='mb-10'>
              Cars Fixed
            </v-card-title>
            <v-card-subtitle>
              132
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
            <v-card-title class='mb-10'>
              Average Transactions
            </v-card-title>
            <v-card-subtitle green>
              ksh 142,000
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
            <v-card-title>
              Average Transactions
            </v-card-title>
            <v-card-actions>
              <v-rating v-model="rating"></v-rating>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <Maps />
    </v-container>
    <v-container>
    </v-container>
   <Footer />
  </div>
</template>

<script>
import Header from '@/components/Navbar.vue';
import Maps from '@/components/Maps.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Car Dashboard',
  components: {
    Header,
    Maps,
    Footer,
  },
  data: () => ({
    rating: 4,
  }),
};
</script>

<style>

</style>
