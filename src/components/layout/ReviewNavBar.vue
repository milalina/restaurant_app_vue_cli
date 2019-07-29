<template>
  <div class="navbar nav position-sticky">
    <nav>
        <ul class="row">
          <li class="col-4">
            <router-link to="/signup"><span class="glyphicon glyphicon-user"></span></router-link> 
          </li>
          <li class="col-4">
            <router-link to="/login"><span class="glyphicon glyphicon-log-in"></span></router-link>
          </li>
          <li class="col-4">
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
  data() {
    return {};
  },
  methods:{
      logout(){
          firebase.auth().signOut().then(()=>{
              this.$router.push({name:'Login'})
          })
      }
  }
};
</script>

<style>
nav {
  background-color: orange;
  height: 80px;
  width: 100%;
  position: fixed;
  z-index: 10;
}

li{
    display: inline;
    align-items: right;
    font-size: 1.5em;
    text-align: justify;
}
.glyphicon{
  color:darkcyan;
}
/* position-sticky{
  position: sticky;
} */

</style>
