<template>
  <div>
    <div class="tl">
      <content-card>
        <h1>
          Orders list
        </h1>
        <hr>
          <div class="order-list" v-if="orders && orders.length >0">
            <div :key="order._id" class="product flex pa2 bg-black-10" v-for="order in orders">
              <router-link class="db" style="flex-grow:1;" :to="{ name : 'OrderDetails', params: { orderId : order._id} }">
                {{ order._id }}
              </router-link>
              <div>{{ moment(order.placedOn).format('YYYY-MM-DD') }}</div>
            </div>
          </div>
      </content-card>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { mapState } from 'vuex';
import ContentCard from './generics/ContentCard';
import DefaultButton from './generics/DefaultButton';
import TopNav from './TopNav';

export default {
  name: 'order-list',
  mounted () {
    this.$store.dispatch('fetchOrderList');
  },
  computed : {
    ...mapState({
      orders : state => state.orders.orders,
    }),
  },
  methods : {
    moment,
  },
  components : {
    ContentCard,
    TopNav,
    DefaultButton,
  },
};
</script>

<style scoped>
</style>
