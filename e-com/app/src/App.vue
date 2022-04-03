<template>
 <Navbar />
 <div class="container mt-5">
    <router-view/>
 </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import { mapActions } from 'vuex'

export default {
  components: { Navbar },
  methods: {
    ...mapActions(['checkUser'])
  },
  created() {
    this.checkUser()
  }
}
</script>


<style>

</style>
