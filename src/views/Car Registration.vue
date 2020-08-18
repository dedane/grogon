/* eslint-disable no-unused-expressions */
/* eslint-disable no-return-assign */
<template>
  <div id='CarRegistration'>
    <Header />
    <v-container  fluid>
      <v-row align="center" justify="center">
        <v-col>
          <v-img max-height='800' max-width='800'
        src='https://ik.imagekit.io/ugyodiq15/broken_car1_1_IOzXoBACxp.svg'>
          <v-text class='white--text mt-12 display-2'>Get your vehicle fixed from
            a push of a button?</v-text>
        </v-img>
        </v-col>
        <v-col>
          <v-row> Lets Onboard you </v-row>
          <v-form @submit.prevent="submitForm">
            <v-text-field
            label='Name'
            v-model='Name'
            filled>
            </v-text-field>
            <v-text-field
            label='Email'
            v-model='Email'
            append-icon='mdi-email'
            filled>
            </v-text-field>
            <!-- <v-file-input
            accept='image/png, image/jpeg, image/bmp'
            append-icon='mdi-camera'
            label='vehicle Image'
            v-model='vehicleimage'
            filled>
            </v-file-input> -->
            <!-- <v-text-field
            label='vehicleimage'
            v-model='VehicleImage'
            filled>
            </v-text-field> -->
            <v-text-field
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show2 ? 'text': 'password'"
            @click:append="show2 = !show2"
            label='Password'
            v-model='Password'
            filled>
            </v-text-field>
            <!-- <v-text-field
            append-icon='mdi-phone'
            label='Phone number'
            v-model='Phonenumber'
            filled>
            </v-text-field> -->
            <v-text-field
            append-icon='mdi-phone'
            label='Phone number'
            v-model='Phonenumber'
            filled>
            </v-text-field>
            <v-row>
              <v-col>
                <v-text-field
                label='Carmake'
                v-model='Carmake'
                append-icon='mdi-car'
                filled>
                </v-text-field>
                <!-- <v-select
                label='car model'>
                </v-select> -->
              </v-col>
              <v-col>
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                <template v-slot:activator="{ on, attrs }">
                <v-text-field
                v-model="PurchaseDate"
                label="Model year"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                ></v-text-field>
                </template>
              <v-date-picker
                ref="picker"
                v-model="PurchaseDate"
                :max="new Date().toISOString().substr(0, 10)"
                min="1950-01-01"
                @change="save"
              ></v-date-picker>
              </v-menu>
              </v-col>
            </v-row>
            <v-row align='center' justify='center'>
            <v-btn dark width='400' color='#046e0c'
            @click="submitForm()">
              Sign Up
            </v-btn>
            </v-row>
            <v-row class='align-center justify-center'>
              <span>Already have an account?</span>
                  <v-btn text to="/carlogin" xlarge color="success" class="mb-4 mt-3">
                      Sign In
                  </v-btn>
            </v-row>
            <!-- <v-row class='mt-8' align='center' justify='center'>
              or join us with
            </v-row>
            <v-row align='center'
            justify='center'>
              <v-btn class='ma-8'
              dark
              color='red'
              large fab>
                <v-icon>mdi-google</v-icon>
              </v-btn>
              <v-btn class='ma-8'
              dark
              color='blue'
              large fab>
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
            </v-row> -->
          </v-form>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Car Registration',
  components: {
    Header,
    Footer,
  },
  data: () => ({
    menu: false,
    show2: false,
    Name: '',
    Email: '',
    /* VehicleImage: '', */
    Password: '',
    Phonenumber: '',
    PurchaseDate: '',
    Carmake: '',

  }),
  watch: {
    menu(val) {
      this.$refs.picker.activePicker = 'YEAR';
      // eslint-disable-next-line no-unused-expressions
      val && setTimeout(() => ('YEAR'));
    },
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
    submitForm() {
      this.$store.dispatch('driverRegistration', {
        Name: this.Name,
        Email: this.Email,
        /* VehicleImage: this.VehicleImage, */
        Password: this.Password,
        Phonenumber: this.Phonenumber,
        PurchaseDate: this.PurchaseDate,
        Carmake: this.Carmake,
      })
        .then(() => {
          this.$router.push('/Carlogin');
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    },
  },
};
</script>

<style>

</style>
