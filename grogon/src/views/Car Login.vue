<template>
  <div id="Car Login">
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
          <v-row > Welcome Back </v-row>

          <v-card flat class="transparent red--text error-messages mb-4" width="500">
            <span v-for="(error, i) in errors" :key="i">{{ error.messge }}</span>
          </v-card>
          <v-form @submit.prevent="login">
            <v-text-field
            label='Email'
            v-model='Email'
            :rules='emailRules'
            append-icon='mdi-email'
            filled>
            </v-text-field>
            <v-text-field
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show2 ? 'text': 'password'"
            @click:append="show2 = !show2"
            label='Password'
            v-model='Password'
            filled>
            </v-text-field>
            <v-row align='center' justify='center'>
            <v-btn dark width='400' color='#046e0c'
            @click="login()">
              Sign Up
            </v-btn>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Car Login',
  data: () => ({
    Email: '',
    show2: false,
    emailRules: [
      (v) => !!v || 'E-mail must be valid',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    Password: '',
    errors: [],
    passwordRules: [
      (v) => !!v || 'Password is required',
      (v) => (v && v.length >= 8) || 'Password must be more than 7 characters',
    ],
  }),
  methods: {
    login() {
      this.$store.dispatch('driverLogin', {
        Email: this.Email,
        Password: this.Password,
      })
        .then(() => {
          this.$router.push('/CarDash');
          this.errors = [];
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>

</style>
