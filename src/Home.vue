<template>
  <div class="continer">
  <div class="mainContent">
    <div class="image">
      <img src="./assets/food_icon.jpg" />
    </div>
      <div class="heading">
        <h2 class="text-align">London Food for You</h2>
      </div>
      <div class="select-form element-align">
        <select v-model="borough" v-on:change="changeRout" name id>
          <option value disabled selected>Select Borough</option>
          <option v-for="(borough, index) in boroughs" :key="index">{{ borough }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      borough: "",
      index: "",
      boroughs: [
        "Barking",
        "Barnet",
        "Bexley",
        "Brent",
        "Bromley",
        "Camden Town*",
        "Croydon",
        "Dagenham",
        "Ealing",
        "Enfield*",
        "Fulham",
        "Greenwich*",
        "Hackney",
        "Hammersmith",
        "Haringey",
        "Harrow",
        "Havering",
        "Hillingdon",
        "Hounslow",
        "Islington",
        "Kingston upon Thames",
        "Lambeth",
        "Lewisham",
        "Merton",
        "Newham",
        "Redbridge",
        "Richmond upon Thames",
        "Royal Borough of Kensington and Chelsea",
        "Southwark",
        "Sutton*",
        "London Borough of Tower Hamlets*",
        "Waltham Forest*",
        "Wandsworth",
        "Westminster*"
      ],
      restaurantList: [],
      url: "",

      urlEst: ""
    };
  },

  computed: {},

  methods: {
    changeRout: function() {
      this.$router.push({ name: "list", params: { borough: this.borough } });
    }
  }
};
</script>

<style scoped>
@media (min-height:568px), screen and (orientation: portrait){
.continer{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 30% 40% auto;
    width: 100%;
    height: 100vh;
    /*grid-gap: 10px;*/
}
.mainContent {
  grid-column: 1;
  grid-row: 2;
}
img{
  width:200px;
  height: auto;
}
}
@media (min-height:1024px), screen and (orientation: portrait){
.continer{
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 10% 40% auto;
    width: 100%;
    height: 100vh;
    /*grid-gap: 10px;*/
}
.mainContent {
  grid-column: 2;
  grid-row: 2;
  
  /*width: 200px;
  height: auto;*/
}
}
@media (height:768px), screen and (orientation: landscape){
.continer{
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 30% 40% auto;
    width: 100%;
    height: 100vh;
    /*grid-gap: 10px;*/
}
.mainContent {
  grid-column: 2;
  grid-row: 2;
}
}
@media (height: 320px), screen and (orientation: landscape){
.continer{
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 50px 200px auto;
    width: 100%;
    height: 100vh;
    /*grid-gap: 10px;*/
}
.mainContent {
  grid-column: 2;
  grid-row: 2;
}
img{
  width:200px;
  height: auto; 
}
}
.image{
  text-align: center;
}
h2 {
  color: #ff8c00;
}
option {
  color: orange;
}

h2.text-align{
  text-align: center;
  margin-top: 20px;
}
.element-align{
display: flex;
justify-content: center;
}

select {
  border-color: orange;
  color: slategray;
  justify-content: center;
  margin-top: 30px;
}
option {
  color: slategray;
}



</style>
