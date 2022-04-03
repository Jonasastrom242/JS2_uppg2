<template>
  <ShoppingCartProduct v-for="item in shoppingCart" :key="item.product._id" :item="item" />
      <div v-if="shoppingCart.length < 1">
          <div class="d-flex justify-content-center align-items-center">
              Your cart is empty
          </div>
          <div class="dropdown-divider"></div>
      </div>

      <div class="p-2 d-flex justify-content-between align-items-center">
          <div>
              <div>Total: {{shoppingCartTotal}} SEK</div>
              <small class="text-muted">inc. VAT</small>
          </div>
          <router-link to="/orders"><button class="btn btn-info">Go to payment</button></router-link>
      </div>
</template>

<script>
import ShoppingCartProduct from './ShoppingCartProduct.vue'
import {mapGetters} from 'vuex'
export default {
    components: {
        ShoppingCartProduct
    },
    computed: {
        ...mapGetters(['shoppingCart', 'shoppingCartTotal'])
    }
}
</script>

<style>

</style>