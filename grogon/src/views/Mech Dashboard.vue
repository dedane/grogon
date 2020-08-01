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
      <v-card>
        <v-simple-table
        :dense='dense'
        :fixed-header='fixedHeader'
        :height='height'>
        <template v-slot:default>
          <thead>
            <tr>
            <th class='text-center'>Car Owner</th>
            <th class='text-center'>Date</th>
            <th class='text-center'>Rating</th>
            <th class='text-center'>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="driver in drivers" :key="driver.name">
              <td class='text-center'>{{ driver.name }}</td>
              <td class='text-center'>{{ driver.date }}</td>
              <td class='text-center'>{{ driver.rating }}</td>
              <td class='text-center'>{{ driver.status }}</td>
            </tr>
          </tbody>
        </template>
        </v-simple-table>
      </v-card>
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
    fixedHeader: false,
    height: 300,
    drivers: [
      {
        name: 'Joy Nice',
        date: '24/7/2020',
        rating: '5',
        status: 'completed',
      },
    ],
  }),
};
</script>

<style>

</style>
