<template>
  <div class="navbar nav sticky-top">
    <nav>
        <ul class="row">
           <li v-if="user">
            <a class="chat-useremail"> &nbsp;</a>
          </li>
          <li class="">
            <router-link v-if="!user" to="/signup"><span class="glyphicon glyphicon-user">&nbsp;</span></router-link> 
          </li>
          <li class="">
            <router-link v-if="!user" to="/login"><span class="glyphicon glyphicon-log-in"></span></router-link>
          </li>
          <li v-if="user" class="">
            <a href="#" @click="logout"><span class="glyphicon glyphicon-log-out"></span></a>
          </li>
        </ul>
    </nav>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "ReviewNavBar",
  props: ["email"],
  data() {
    return {
      user: null,
    };
  },
  methods:{
      logout(){
          firebase.auth().signOut().then(()=>{
              this.$router.push({name:'Login'})
          })
      }
  },
  created(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.user = user
      } else{
        this.user = null
      }
    })
  }
};
</script>

<style>
nav {
  background-color: orange;
  height: 30px;
  width: 100%;
  left:0;
}
.navbar.nav{
  width: 100%;
  margin-left:0;
  margin-top: 0px; 
}

li{
    display: inline;
    align-items: right;
    text-align: justify;
    color: darkcyan;
    margin-left: 10px;
}
.glyphicon{
  color:darkcyan;
  font-size: 1.5em;
}
.sticky-top{
  position: sticky;
}
li.chat-useremail{
font-size: 1.0em;

}
</style>
