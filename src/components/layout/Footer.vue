<template>
  <div class="footer sticky-bottom">
    <div class="row">
      <div class="col-4">
       <a @click="$router.go(-1)">
          <span class="glyphicon glyphicon-circle-arrow-left center-block"></span>
        </a>
      </div>
      <div class="col-4">
       <router-link to='/'>
          <span class="glyphicon glyphicon-home center-block"></span>
        </router-link>
      </div>
      <div class="col-4">
        <router-link to='/signup'>
          <span class="glyphicon glyphicon-comment center-block"></span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
  background: orange;
  padding-right: 0px;
  padding-left: 0px;
}
router-link{
  size: 2em;
}
/*.sticky-bottom{
  position: sticky;
}*/
</style>
