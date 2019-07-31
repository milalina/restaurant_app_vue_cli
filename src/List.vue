<template>
  <div >
    <header class="sticky-top">
      <div id="checkboxes">
        <label for>
          <span class="glyphicon glyphicon-gbp"></span>
          <span class="glyphicon glyphicon-gbp"></span>
          <span class="glyphicon glyphicon-gbp"></span>
          <span class="glyphicon glyphicon-gbp"></span>
        </label>
        <input v-model="categories" type="checkbox" value="4" name id />
        <label for>
          <span class="glyphicon glyphicon-gbp"></span>
          <span class="glyphicon glyphicon-gbp"></span>
          <span class="glyphicon glyphicon-gbp"></span>
        </label>
        <input v-model="categories" type="checkbox" value="3" name id />
        <label for>
          <span class="glyphicon glyphicon-gbp"></span>
          <span class="glyphicon glyphicon-gbp"></span>
        </label>
        <input v-model="categories" type="checkbox" value="2" name id />
        <label for>
          <span class="glyphicon glyphicon-gbp"></span>
        </label>
        <input v-model="categories" type="checkbox" value="1" name id />
      </div>
    </header>
  
    <div class="container">
    <div class="feedback" >
    <p class="feedback" v-if="feedback"> {{feedback}} </p>
    </div>
    <div class="row">
    <div v-for="(restaurant, index) in restaurantsListSorted" :key="index" class="card col-12 col-sm-6 col-md-4 col-lg-3">
       <router-link v-bind:to="'/detail/'+restaurant.restaurant.id "><img v-bind:src="restaurant.restaurant.featured_image" style="width:100%"/></router-link>
      <div class="container">
           <router-link v-bind:to="'/detail/'+restaurant.restaurant.id "><h2 class="heading">{{ restaurant.restaurant.name }}</h2></router-link>
        <div class="row">
          <div class="col-3">
            <p>
              <span class="glyphicon glyphicon-thumbs-up"></span>
              {{ restaurant.restaurant.user_rating.rating_obj.title.text }}
            </p>
          </div>
          <div class="col-5">
            <p>
              <span class="glyphicon glyphicon-gbp"></span>
              for two: {{ restaurant.restaurant.average_cost_for_two }}
            </p>
          </div>
             <div class="col-3">
            <a
              href="#"
              v-on:click="passParam(restaurant.restaurant.location.latitude, 
        restaurant.restaurant.location.longitude, 
        restaurant.restaurant.location.address)"
            >
              <span class="glyphicon glyphicon-map-marker"></span>
              </a>
          
          </div>
        </div>
        <p>
          <span class="glyphicon glyphicon-time">&nbsp;</span>
          {{restaurant.restaurant.timings }}
        </p>
      </div>
      </div>
    </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from "@/components/layout/Footer.vue";

export default {
  components: {
    "app-footer": Footer
  },

  data() {
    return {
      locationSuggestion: [],
      restaurantsList: [],
      restaurant: "",
      index: "",
      url: "",
      urlEst: "",
      categories: [],
      restaurantId: "",
      latitude: "",
      longitude: "",
      feedback: null,
      image: require('@/assets/cloche.jpg')
    };
  },
  methods: {
    creating_Url_location: function() {
      this.url =
        "https://developers.zomato.com/api/v2.1/locations?query=" +
        this.$route.params.borough +
        "20%London";
      this.borough = this.$route.params.borough
      this.fetchingDataParam();
    },

    fetchingDataParam: function(url) {
      fetch(this.url, {
        method: "GET",
        headers: {
          "user-key": "cff8acccdae0320ca8e8dd38009b2061"
        }
      })
        .then(function(response) {
          console.log(response);
          return response.json();
        })
        .then(data => {
          (data.locationSuggestion = data.location_suggestions),
            this.creating_Url_establishments(
              data.locationSuggestion[0].entity_id,
              data.locationSuggestion[0].entity_type
            );
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    creating_Url_establishments: function(a, b) {
      this.urlEst =
        "https://developers.zomato.com/api/v2.1/location_details?entity_id=" +
        a +
        "&entity_type=" +
        b +
        "";
      console.log(this.urlEst);
      this.fetchingDataList(this.urlEst);
    },

    fetchingDataList: function() {
      fetch(this.urlEst, {
        method: "GET",
        headers: {
          "user-key": "cff8acccdae0320ca8e8dd38009b2061"
        }
      })
        .then(function(response) {
          console.log(response);
          return response.json();
        })
        .then(data => {
          console.log(data),
            (this.restaurantsList = data.best_rated_restaurant);
          console.log(this.restaurantsList);
          this.addDefaultImage()
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    addDefaultImage(){
      this.restaurantsList.map(oneRestaurant => {
      if (oneRestaurant.restaurant.featured_image == "") {
      oneRestaurant.restaurant.featured_image =this.image
      }
      })
    },
  
    passParam: function(latitude, longitude, address) {
      this.$router.push({
        name: "map",
        params: { latitude, longitude, address }
      });
    }
  },

  mounted: function() {
    console.log("selected borough", this.$route.params.borough);
    this.creating_Url_location();
  },

  computed: {
    restaurantsListSorted() {
      let filteredRes = [];
      if (this.categories.length == 0) {
        this.feedback = null;
        return this.restaurantsList;
      } else {
        this.restaurantsList.forEach(oneRestaurant => {
          this.categories.map(oneCat => {
            if (oneCat == oneRestaurant.restaurant.price_range) {
              filteredRes.push(oneRestaurant);
              this.feedback = null;
            }
          });
        });

        if (filteredRes.length == 0) {
          this.feedback ="We found no restaurants in this price category";
        } else {
          this.feedback = null
          return filteredRes;
        }
      }
    }
  }
};

</script>

<style scoped>
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
  background-color: orange;
}
#checkboxes label {
  display: inline-block;
  border-color: orange;
}
.card {
  border-color:  darkcyan;
  margin-top: 10px;
  margin-left: 0px; 
  margin-right: 0px; 
}
.heading {
  color: darkcyan;
}
header{
  position: relative;
  
  top: 0px;
  /*left: 10px;
  left: 3%;*/
  width: 100%;
  font-size: 1.3em;
  height: 40px;
  background: orange;
  
}
.sticky-top{
position: sticky;
}
.feedback{
  margin-top: 20px;
}
.feedback{
  color: orange;
}
@media (min-width: 560) {
  
}
app-footer{
  position: absolute;
  margin-bottom: 0px;
}
.glyphicon{
  font-size: 1.4em;
}
.container{
  width: 100%;
  height: 100%;
  margin-bottom: 40px;
  /*height: 100vh
  <img src="./assets/food_icon.jpg" />
  */;
}
</style>
