import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import VueMeta from 'vue-meta'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import localizeFilter from '@/filters/localize.filter'
import tooltipDirective from '@/directives/tooltip.directive'
import messagePlugin from '@/common/message.plugin'
import titlePlugin from '@/common/title.plugin'
import Loader from '@/components/app/Loader'
import Paginate from 'vuejs-paginate'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(titlePlugin)
Vue.use(Vuelidate)
Vue.use(VueMeta)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

firebase.initializeApp({
  apiKey: 'AIzaSyBdkxwgt8TlKIZ7TQu6BmIFIwRZoaebpro',
  authDomain: 'many-organaizer.firebaseapp.com',
  databaseURL: 'https://many-organaizer-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'many-organaizer',
  storageBucket: 'many-organaizer.appspot.com',
  messagingSenderId: '639554075802',
  appId: '1:639554075802:web:0640b09e088c041ba3b323',
  measurementId: 'G-E63SV6JQ3Z'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
