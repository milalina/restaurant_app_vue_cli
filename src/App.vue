<template>
  <div>
   <router-view></router-view>
  
   
   <!--list></list>
   <rmap></rmap>
   <router-view></router-view>
   <detail></detail>
   <component is="component"> </component>
   <rmap></rmap-->

  </div>
</template>

<script>
import Home from './Home.vue';
import List from './List.vue';
import Detail from './Detail.vue';
import Map from './Map.vue';
import Chat from './Chat.vue';
import Login from '@/components/authentication/Login.vue'

export default {
 components:{
   'home': Home,
   'list': List,
   'detail': Detail,
   'map' : Map,
   'chat': Chat,
   'login': Login
 },
 
 data(){
   return {
     component:'list',
   }
 },
}
</script>

<style>

</style>
