<template>
<div>
   <review-nav-bar/>
  <div class="container">
      <h2 class="heading">
        <b>{{ restaurantName }}</b>
      </h2>

      <div class="row" >
        <div class="col-6 col-md-4 col-lg-3" v-for="(photo, index) in photos" :key="index">
          <img  v-bind:src="photo.photo.url"
            style="width:100%"
          />
          </div>
          </div>
      <h3 class="heading">Reviews</h3>
      <div class="row" >
      <div v-for="(review, index) in reviews" :key="index" class="card col-12 col-sm-6">
        <div class="card-content center-align">
          <div class="row">
            <div class="col-4">
              <img v-bind:src="review.review.user.profile_image" class="user" />
            </div>
            <div class="col-8">
              <h3 class="heading text-align">{{review.review.rating_text }}</h3>
              <p>{{review.review.review_text }}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
  </div>
  <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from "@/components/layout/Footer.vue";
import ReviewNavBar from "@/components/layout/ReviewNavBar.vue";
export default {
  components: {
    "app-footer": Footer,
    "review-nav-bar": ReviewNavBar
  },
  data() {
    return {
      restaurantName: [],
      reviews: [],
      photos: [],
      id: this.$route.params.id,
      restaurant: [],
      url: ""
    };
  },
  methods: {
    restaurantUrl: function() {
      console.log(this.id);
      this.url =
        "https://developers.zomato.com/api/v2.1/restaurant?res_id=" +
        this.id +
        " ";
      this.fetchingData();
    },

    fetchingData: function() {
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
          console.log(data), (this.restaurant = data);
          this.restaurantName = data.name;
          this.reviews = data.all_reviews.reviews;
          this.photos = data.photos;
          console.log;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted: function() {
    this.restaurantUrl();
  }
};
</script>

<style scoped>
button {
  background-color: orange;
}
.card {
  border-color: darkcyan;
  margin-top: 10px;
}
.heading {
  color: darkcyan;
}
.user {
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 11px;
  object-fit: cover;
}
.text-align {
  text-align: center;
}
img{
margin-top: 5px;
}
.container{
  margin-bottom: 30px;
}
</style>