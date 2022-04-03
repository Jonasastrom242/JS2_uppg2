<template>
<form class="border p-3 shadow rounded" @submit.prevent="handleSubmit">
    <h2 class="text-center">Login</h2>
  <!-- Email input -->
  <div class=" mb-4">
    <input type="email" id="form1Example1" class="form-control" v-model="email" />
    <label class="form-label" for="form1Example1">Email address</label>
  </div>

  <!-- Password input -->
  <div class=" mb-4">
    <input type="password" id="form1Example2" class="form-control" v-model="password" />
    <label class="form-label" for="form1Example2">Password</label>
  </div>


  <!-- Submit button -->
  <button type="submit" class="btn btn-primary btn-block">Sign in</button>
  <div>
      <p class="mt-3 text-center">Not a member? <a href="#">Register</a></p>
  </div>
</form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(['login']), 
       async handleSubmit() {
            if(this.email.trim() === '' || this.password.trim() === '') {
                return
            }
            let user = {
                email: this.email, 
                password: this.password
            }

            await this.login(user)
            if(this.$route.query.redirect) {
                this.$router.push(this.$route.query.redirect)
            } else {
            this.$router.push({ name: 'home' })
        }
    }
  }
}
</script>

<style>

</style>