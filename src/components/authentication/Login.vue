<template>
  <div>
    <review-nav-bar />
    <div class="container">
      <div class="card">
        <form action>
          <h2 class="heading">Login</h2>
          <div class="field">
            <label for="username" name="username">User Name:</label>
            <input type="username" name="username" v-model="username" />
          </div>
          <div class="field">
            <label for="email" name="email">Email:</label>
            <input type="email" name="email" v-model="email" />
          </div>
          <div class="field">
            <label for="password" name="password">Password:</label>
            <input type="password" name="password" v-model="password" />
          </div>
          <p class="feedback" v-if="feedback">{{feedback}}</p>
        </form>
        <div>
            <button v-on:click="login" type="button">Login</button>
          </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import {bus} from '@/main.js'
import firebase from "firebase";
import ReviewNavBar from "@/components/layout/ReviewNavBar.vue";
import Footer from "@/components/layout/Footer.vue";
export default {
  components: {
    ReviewNavBar,
    "app-footer": Footer
  },
  data() {
    return {
      email: null,
      password: null,
      feedback: null,
      username: null
    };
  },
  methods: {
    login() {
      if (this.username && this.email && this.login) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(cred => {
            console.log(cred.user);
            console.log(cred.user.email);
            this.$router.push({
              name: "Chat",
              params: { email: cred.user.email, username: this.username }
            });
          })
          .catch(err => {
            this.feedback = err.message;
          });
        /*this.feedback = null;
        bus.$emit('login','this.username') */
      } else {
        this.feedback = "Please fill in all the fields";
      }
    },

  }
};
</script>

<style scoped>
.card {
  margin-top:0;
  /*margin-bottom: 70%;*/
  text-align: center;
  border-color: darkcyan;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.heading {
  color: darkcyan;
  margin-top: 20px;
}
form {
  border-color: darkcyan;
}

input {
  border-color: darkcyan;
}
button {
  margin-top: 10px;
  margin-bottom: 20px;
  background-color: orange;
}
.feedback {
  color: orange;
}
/*input{
  border: solid 2px orange;
}*/
label {
  color: darkcyan;
}
@media (min-width: 560px) and (orientation: portrait) {
  .card {
    width: 350px;
  }
}
@media (min-width: 560px) and (orientation: landscape) {
  .card {
    width: 350px;
    margin-top: 10px;
    margin-bottom: 30px;
  }
}
</style>
