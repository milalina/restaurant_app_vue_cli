<template>
  <div class="footer sticky-bottom">
    <div class="row">
      <div class="col-4">
        <router-link v-if="!user" router-link to='/signup'>
          <span class="glyphicon glyphicon-comment center-block"></span>
        </router-link>
         <a v-if="user" v-on:click="goToChat">
          <span class="glyphicon glyphicon-comment center-block"></span>
        </a>
      </div>
      <div class="col-4">
       <router-link to='/'>
          <span class="glyphicon glyphicon-home center-block"></span>
        </router-link>
      </div>
      <div class="col-4">
       <a @click="$router.go(-1)">
          <span class="glyphicon glyphicon-circle-arrow-left center-block"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data(){
    return{
    user: null,
    email: null,

    }
  },

methods:{
goToChat(){
   this.$router.push({
              name: "Chat",
              params: { email: this.email,}
            });
 }
},
  created(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.user =user
        console.log(user)
        this.email=user.email
      } else{
        this.user = null
      }
    })
  }
};
</script>

<style scoped>

.center-block{
  margin-left:40%;
  margin-right:40%;
  display:block;
}
.footer {
  position: fixed;
  bottom: 0px;
  margin-left: 0px;
  margin-right:0px;
  /*left: 10px;*/
  width: 100%;
  font-size: 1.5em;
  height: 40px;
  background-color: orange;
  padding-right: 0px;
  padding-left: 0px;
}
router-link{
  size: 2em;
}
/*.sticky-bottom{
  position: sticky;
  <router-link v-if="user" router-link :to="{path:'/chat', params: {email:this.email} }">
          <span class="glyphicon glyphicon-comment center-block"></span>
        </router-link>
}*/
</style>
