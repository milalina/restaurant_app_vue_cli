<template>
<div>
     <review-nav-bar />

  <div class="signup container">
    <form v-on:click="signup" class="card">
      <h2 class="heading">Signup</h2>
      <div class="field">
        <label for="email" name="email">Email:</label>
        <input type="email" name="email" v-model="email" />
      </div>
      <div class="field">
        <label for="password" name="password">Password:</label>
        <input type="password" name="password" v-model="password" />
      </div>
      <div class="field">
        <label for="username" name="username">User Name:</label>
        <input type="username" name="username" v-model="username" />
      </div>
      <p class="feedback" v-if="feedback">{{ feedback }}</p>
      <div class="field">
        <button type="button" class="button">Signup</button>
      </div>
    </form>
  </div>
  <div class="footer-container">
  <app-footer></app-footer>
  </div>
  </div>
</template> 

<script>
import slugify from "slugify";
import db from "@/firebase/init.js";
import firebase from "firebase";
import ReviewNavBar from '@/components/layout/ReviewNavBar.vue'
import Footer from "@/components/layout/Footer.vue";
export default {
  name: "Signup",
  components: {
    ReviewNavBar,
    "app-footer": Footer, 
  },
  data() {
    return {
      email: null,
      password: null,
      username: null,
      feedback: null,
      slug: null
    };
  },
  methods: {
      signup() {
      if (this.username && this.email && this.password) {
        this.slug = slugify(this.username, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        });
        let ref = db.collection("messages").doc(this.slug);
        ref.get().then(doc => {
          if (doc.exists) {
            this.feedback = "This user name already exists";
          } else {
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(() =>{
              this.$router.push({name:"Chat", params:{username: this.username}})
            })
            .catch(err =>{
                console.log(err)
                this.feedback= err.message
                })
            this.feedback = "This user name is free to use";
          }
          })
          }else{this.feedback = "You must enter all fields";
          } 
      }
      
         
    }  
  
};    
</script>

<style scoped>
.card{
  margin-top: 30%;
  margin-bottom: 70%;
  text-align: center;
  
}
.heading{
color: darkcyan;
margin-top: 20px;
}
form{
  border-color: darkcyan;
}

input{
  border-color: darkcyan;
}
button{
  margin-bottom: 20px;
  background-color: orange;
}
.feedback{
  color: orange;
}
label{
  color: darkcyan;
}

@media (min-width: 560px) {
  .footer-container{
   align-content: center;
   margin-left: 2%;
   margin-right: 2%; 
  }
  form{
display: inline-block;
  }
  .card{
  margin-top: 10px;
  margin-bottom: 30px;
  text-align: center;
  width: 350px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
}

</style>


