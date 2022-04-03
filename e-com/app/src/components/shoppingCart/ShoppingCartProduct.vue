<template>
  <div class="p-2 d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <div class="image-container">
        <img :src="item.product.image" class="img-fluid">
      </div>
      <div>
        <div><strong>{{ item.product.name }}</strong></div>
        <div><small>{{ item.quantity }} x {{ item.product.price }}</small></div>
      </div>
    </div>
    <div>
      <div class="btn-group btn-group-sm me-2">
        <button class="btn btn-dark" @click.stop="decrement">-</button>
        <button class="btn btn-dark" @click.stop="increment">+</button>
      </div>
      <button class="btn btn-danger btn-sm" @click.stop="del"><i class="fa-solid fa-trash"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    decrement() {
        if(this.$props.item.quantity > 0) {
        this.$props.item.quantity = this.$props.item.quantity - 1
        } else {
            return
        }
    },
    increment() {
        this.$props.item.quantity = this.$props.item.quantity + 1
    },
    del(id) {
        this.$props.item = this.$props.item.filter((e)=>e.id !== id )
        //this.$props.item.product = this.$props.item.product.filter(function(_id) {return _id ===! this.$props.item.product._id }); //fel sätt. prova med Filter av item :key id istället
        // this.$props.item.product.image = ''
        // this.$props.item.product.name = ''
        // this.$props.item.product.price = ''
        //let filteredItem = [];
        //this.$props.item = filteredItem
        //console.log(this.$props.item);
       
    }
  }
}
</script>

<style scoped>
  .image-container {
    width: 90px;
  }
</style>