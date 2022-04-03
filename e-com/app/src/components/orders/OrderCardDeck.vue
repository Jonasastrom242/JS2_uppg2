<template>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        <OrderCard v-for="order in orders" :key="order._id" :order="order" />
        
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import OrderCard from './OrderCard.vue'
export default {
    components: { OrderCard },
    computed: {
        ...mapGetters(['orders'])
    }
}
</script>

<style>

</style>