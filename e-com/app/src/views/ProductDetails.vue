<template>
 <div v-if="product">
  <div class="row">
      <div class="col-lg-6">
          <div>
              <img :src="product.image" class="img-fluid">
          </div>
      </div>
      <div class="col-lg-6 text-center text-lg-start">
          <h2>{{product.name}}</h2>
          <p class="h3 text-danger mt-2">{{product.price}}</p>
          <div class="mt-3">
              <p>{{product.desc}}</p>
          </div>
      </div>
      <div class="text-end mt-3">
        <button @click="addToCart({product, quantity})" class="btn btn-info"><i class="fa-solid fa-cart-arrow-down pr-3"></i> Add to cart</button>
      </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    props: ['id'],
    data() {
        return {
            quantity : 1
        }
    },
    methods: {
        ...mapActions(['getProductById', 'addToCart'])
    },
    computed: {
        ...mapGetters(['product'])
    },
    created() {
        this.getProductById(this.id)
    }
}
</script>

<style>

</style>