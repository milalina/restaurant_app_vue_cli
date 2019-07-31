<template>
<div>
  <div class="container">
    <header>
    <h3 class="address"> <span class="glyphicon glyphicon-map-marker"></span>{{this.address}}</h3>
    </header>
    <div id="map">
        <GmapMap
          v-bind:center="{ lat: this.latitude, lng: this.longitude }"
          v-bind:zoom="14"
          map-type-id="terrain"
          style="width: 330px; height: 500px"
        >
          <GmapMarker 
            v-bind:position="{ lat: this.latitude, lng: this.longitude}"
            v-bind:clickable="true"
            v-bind:draggable="true"
            @click="center=m.position"
          />
        </GmapMap>
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
    
       markers: [
        {
          position: { lat: this.latitude,
          lng: this.longitude}
       }
       ],
       latitude:  parseFloat(this.$route.params.latitude),
       longitude: parseFloat(this.$route.params.longitude),
       address: this.$route.params.address,
    }
    },
};
</script>

<style scoped>
#map{
  width: 100%;
  padding: 0%;
  margin: 0%;
}
header{
  margin-top: 20px;
  margin-bottom: 10px;
}
.address{
  color: darkcyan;
}

/*.vue-map-container{
  width: 150px;
  height: 500px;
}*/
/*iPhone*/
@media (min-height: 568px) and (orientation: portrait){
  .vue-map-container{
  width: 290px !important;
  height: 420px !important;

}
@media (min-width: 568px) and (orientation: landscape){
  .vue-map-container{
  width: 540px !important;
  height: 200px !important;
}
}
/*Galaxy s5*/
}
@media (min-height: 640px) and (orientation: portrait){
  .vue-map-container{
  width: 330px !important;
  height: 500px !important;
}
}
@media (min-width: 639px) and (orientation: landscape){
  .vue-map-container{
  width: 550px !important;
  height: 270px !important;
  
}
}
/*iPad*/
@media (min-height: 1024px) and (orientation: portrait){
  .vue-map-container{
  width: 700px !important;
  height: 900px !important;
}
}
@media (min-width: 1024px) and (orientation: landscape){
  .vue-map-container{
  width: 930px !important;
  height: 640px !important;
}
}

</style>