<template>
  <v-card flat
  height="800">
      <v-navigation-drawer
      class="green"
      dark
      v-model="drawer"
      clipped
      fixed>
      <v-list-item class='px-2'>
          <v-list-item-avatar>
              <v-img src="https://ik.imagekit.io/ugyodiq15/Mcdonalds-1023x675_rjGQLUAjR.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-title>Mercy Mariam</v-list-item-title>
          <!-- <v-btn
             icon
             @click.stop="mini = !mini"
          >
          <v-icon>mdi-chevron-left</v-icon>
          </v-btn> -->
      </v-list-item>
      <v-list-item
      class="px-2"
      v-for='item in items'
      :key='item.title'>
          <v-list-item-icon>
              <v-icon> {{item.icon}} </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
              <v-list-item-title> {{item.title}} </v-list-item-title>
          </v-list-item-content>
      </v-list-item>
      <v-spacer></v-spacer>
      <template v-slot:append>
      <div class=pa-2 >
        <v-btn
        dark>Request Mechanic</v-btn>
      </div>
      </template>
      </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Account', icon: 'mdi-account' },
        { title: 'Expenses', icon: 'mdi-wallet' },
        { title: 'Contacts', icon: 'mdi-contacts' },
      ],
      mini: true,
    };
  },

};
</script>

<style>

</style>
