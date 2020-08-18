<template>
  <div id="Mech Login">
     <v-container  fluid>
      <v-row align="center" justify="center">
        <v-col>
          <v-img max-height='800' max-width='800'
        src='https://ik.imagekit.io/ugyodiq15/mechanic_registration_1_pFs9b0zt5.svg'>
        <v-text class=' mt-12 display-2'>Earn extra cash by fixing autovehicles as a freelancer?
        </v-text>
        </v-img>
        </v-col>
        <v-col>
          <v-row> Welcome Back </v-row>
          <v-form @submit.prevent="login">
            <v-text-field
            label='Email'
            v-model='Email'
            :rules="emailRules"
            append-icon='mdi-email'
            filled>
            </v-text-field>
            <v-text-field
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text': 'password'"
            @click:append="show1 = !show1"
            label='Password'
            v-model='Password'
            filled>
            </v-text-field>
            <v-row align='center' justify='center'>
            <v-btn dark width='400' color='#046e0c'
            @click="login()">
              Sign In
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
  name: 'Mech Login',
  data: () => ({
    Email: '',
    show1: false,
    emailRules: [
      (v) => !!v || 'E-mail must be valid',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    Password: '',
    passwordRules: [
      (v) => !!v || 'Password is required',
      (v) => (v && v.length >= 8) || 'Password must be more than 7 characters',
    ],
  }),
  methods: {
    login() {
      this.$store.dispatch('mechLogin', {
        Email: this.Email,
        Password: this.Password,
      })
        .then(() => {
          this.$router.push('/MechDash');
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
