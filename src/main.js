import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Home from './Home.vue'
import List from './List.vue'
import Detail from './Detail.vue'
import Map from './Map.vue'
import VueRouter from 'vue-router'
import * as VueGoogleMaps from 'vue2-google-maps'
import Chat from './Chat.vue'
import VueChatScroll from 'vue-chat-scroll'

export const bus = new Vue();

Vue.use(VueChatScroll)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyADH9Jno0fAfFFIkqoFPHpGijCQQvVx_Oo',
  },

})

Vue.config.productionTip = false
Vue.component("home", Home);
Vue.component("list", List);
Vue.component("detail", Detail);
Vue.component("map", Map);
Vue.component("chat", Chat);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
