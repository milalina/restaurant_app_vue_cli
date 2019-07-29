import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home.vue';
import List from './List.vue';
import Detail from './Detail.vue';
import Map from './Map.vue';
import Chat from './Chat.vue'
import Signup from '@/components/authentication/Signup.vue'
import Login from '@/components/authentication/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/map/:latitude :longitude :address',
      name: 'map',
      component: Map,
      props: true
    },
   {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true,
      beforeEnter: (to, from, next)=>{
        if(to.params.username || to.params.email){
          next()
        }else{ next:({name:'Signup'})}
      }
    },
    {
      path:'/signup',
      name: 'Signup',
      component: Signup
    }, 
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
