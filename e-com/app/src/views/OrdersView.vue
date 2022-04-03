<template>
  <div>
      <OrderCardDeck />
      <div>Orderview</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import OrderCardDeck from '../components/orders/OrderCardDeck.vue'
export default {
    name: 'OrdersView',
    components: {
        OrderCardDeck
    
    },
    methods: {
        ...mapActions(['getOrders'])
    },
    created() {
        this.getOrders()
    }

}
</script>

<style>

</style>