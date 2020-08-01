<template>
  <div id="Mech Dashboard">
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>
              Cars Fixed
            </v-card-title>
            <v-card-subtitle>
              132
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
            <v-card-title>
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
    <Maps />
    <v-container>

    </v-container>
    <v-container>
    </v-container>
  </div>
</template>

<script>
import Maps from '@/components/Maps.vue';

export default {
  name: 'Car Dashboard',
  components: {
    Maps,
  },
  data : () => ({
    rating : 4,
  }),
};
</script>

<style>

</style>
