import Vue from 'vue';
import ElementUI from 'element-ui';
import Router from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Router);
Vue.use(ElementUI);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: '/login',
      component: resolve => require(['@/components/Login'], resolve)
    },
    {
      path: "/main",
      component: resolve => require(['@/components/MockSscIndex'], resolve),
      children: [
        {
          path: 'pageindex',
          component: resolve => require(['@/components/ssc/IndexPage'], resolve)
        },
        {
          path: 'mocksscsend',
          component: resolve => require(['@/components/ssc/MockSscSend'], resolve)
        }
      ]
    }
  ]
})
