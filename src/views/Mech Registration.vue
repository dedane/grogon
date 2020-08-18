<template>
  <div id="MechRegistration">
    <Header />
    <v-container  fluid>
      <v-row align="center" justify="center">
        <v-col>
          <v-img max-height='800' max-width='800'
        src='https://ik.imagekit.io/ugyodiq15/mechanic_registration_1_pFs9b0zt5.svg'>
          <v-text class=' mt-12 display-2'>
            Earn extra cash by fixing
            autovehicles as a freelancer?
            </v-text>
        </v-img>
        </v-col>
        <v-col>
          <v-row class='mb-8 headline'> Lets Onboard you </v-row>
          <v-form  enctype="multipart/form-data" @submit.prevent="submitForm">
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
            <!-- <v-text-field
            label='Location'
            append-icon="mdi-map-marker"
            v-model='Location'
            filled>
            </v-text-field> -->
            <v-text-field
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text': 'password'"
            @click:append="show1 = !show1"
            label='Password'
            v-model='Password'
            filled>
            </v-text-field>
            <v-text-field
            append-icon='mdi-phone'
            label='Phone number'
            v-model='Phonenumber'
            filled>
            </v-text-field>
            <!-- <v-text-field
            append-icon='mdi-eye'
            label='Password'
            v-model='Certificate'
            filled>
            </v-text-field> -->
            <!-- <v-file-input
            prepend-icon='mdi-camera'
            label='Mechanic Pic'
            accept='image/*'
            v-model='MechanicPic'
            filled >
            </v-file-input> -->
            <!-- <v-file-input
            accept='image/png, image/jpeg, image/bmp'
            append-icon='mdi-camera'
            label='Your Profile Picture'
            v-model='mechanicPic'
            filled>
            </v-file-input>
            <v-file-input
            accept='image/png, image/jpeg, image/bmp'
            append-icon='mdi-certificate'
            label='Upload your certificate'
            v-model='certificate'
            filled>
            </v-file-input> -->
            <v-row align='center' justify='center'>
            <v-btn dark width='400' color='#046e0c'
            @click="submitForm()">
              Sign Up
            </v-btn>
            </v-row>
            <v-row class='justify-center align-center'>
            <h3>or</h3>
            </v-row>
            <v-row class='justify-center align-center'>
               <span>Already have an account?</span>
                  <v-btn text to="/mechlogin" xlarge color="success" class="mb-4 mt-3">
                      Sign In
                  </v-btn>
            </v-row>
            <!-- <v-row class='mt-8' align='center' justify='center'>
              or join us with
            </v-row>
            <v-row align='center'
            justify='center'
            class='mb-4'>
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
  name: 'MechRegistration',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      Name: '',
      Email: '',
      /* Location: '', */
      Password: '',
      Phonenumber: '',
      show1: false,
      /* MechanicPic: '', */
      /* Certificate: '', */
    };
  },
  methods: {
    submitForm() {
      this.$store.dispatch('mechRegister', {
        Name: this.Name,
        Email: this.Email,
        Password: this.Password,
        Phonenumber: this.Phonenumber,
        /* MechanicPic: this.MechanicPic, */
        /* Certificate: this.Certificate, */
      })
        .then(() => {
          this.$router.push('/mechlogin');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};

</script>

<style>

</style>
