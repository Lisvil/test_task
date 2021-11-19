import Vue from 'vue'
import Form from './components/Form.vue'
import WelcomePart from './components/WelcomePart.vue'
import './styles/bootstrap-grid.css'
import './styles/style.scss'
import VueParallaxJs from 'vue-parallax-js'
// import 'jquery'
// import "./parallax.js"

Vue.use(VueParallaxJs)
Vue.config.productionTip = false

new Vue({
  render: h => h(Form),
}).$mount('#form')
new Vue({
  render: h => h(WelcomePart),
}).$mount('#welocome_part')
