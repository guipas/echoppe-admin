<template>
  <div>
    <top-nav>
      <div class="tl">
        <default-button v-on:click.native="goToOrderList">&larr; Back</default-button>
      </div>
    </top-nav>
    <span v-if="loading">Loading...</span>
    <div class="order" v-if="order">
      <content-card>
        <h2>Order details</h2>
        <hr/>
        <form-element>
          <label>Id :</label>
          <input type="text" v-model="order._id" disabled/>
        </form-element>
        <form-element>
          <label>Content</label>
          <input type="text" v-model="order.state" disabled/>
        </form-element>
        <hr/>
        <h3>Order Content</h3>
        <div>
          <div class="flex" v-for="(line, i) in order.content" :key="i">
            <div class="w-25 ba ma1 ml0 pa1 overflow-hidden" style="white-space:nowrap;text-overflow:ellipsis;">{{ line.product }}</div>
            <div class="w-25 ba ma1 pa1">{{ line.finalPrice }}</div>
            <div class="w-25 ba ma1 pa1">x{{ line.quantity }}</div>
            <div class="w-25 ba ma1 mr0 pa1">{{ line.quantity * line.finalPrice }}</div>
          </div>
        </div>
      </content-card>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import _ from 'lodash';
import ContentCard from './generics/ContentCard';
import PrimaryButton from './generics/PrimaryButton';
import CancelButton from './generics/CancelButton';
import DangerButton from './generics/DangerButton';
import DefaultButton from './generics/DefaultButton';
import TopNav from './TopNav';
import FormElement from './generics/FormElement';


export default {
  name: 'order-details',
  data () {
    return {
    };
  },
  props: ['orderId'],
  mounted () {
    this.$store.dispatch('fetchOrder', this.orderId);
  },
  computed : {
    ...mapState({
      order : state => state.orders.currentOrder,
      loading : state => state.orders.currentOrderLoading,
    })
  },
  methods: {
    goToOrderList () {
      this.$router.push('/orders');
    }
  },
  watch: {
    orderId (orderId) {
      this.$store.dispatch('fetchOrder', orderId);
    },
  },
  components: {
    ContentCard,
    PrimaryButton,
    CancelButton,
    DangerButton,
    TopNav,
    DefaultButton,
    FormElement
  },
};
</script>

<style scoped>
</style>
