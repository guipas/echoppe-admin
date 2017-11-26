import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import ProductDetails from '@/components/ProductDetails';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/products/:productId',
      name: 'ProductDetails',
      component: ProductDetails,
      props: true,
    },
  ],
});
