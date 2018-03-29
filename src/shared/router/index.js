import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'shared@/pages/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
