<template>
<!-- Navbar -->
<div class="container">
<nav class="navbar navbar-expand-lg navbar-light bg-info">
  <!-- Container wrapper -->
  <div class="container-fluid">
    <!-- Toggle button -->
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Navbar brand -->
      <router-link class="navbar-brand mt-2 mt-lg-0" to="/">
         <i class="fa-solid fa-gem me-1"></i>ShopGems.com
      </router-link>
      <!-- Left links -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/products">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About us</router-link>
        </li>

        
      </ul>
      <!-- Left links -->
    </div>
    <!-- Collapsible wrapper -->

    <!-- Right elements -->
    <div class="d-flex align-items-center">
      <!-- Icon -->
      
      <!-- Notifications -->
      <div class="dropdown">
        <a
          class="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-shopping-cart"></i>
          <span v-if="cartItemCount" class="badge rounded-pill badge-notification bg-danger">{{cartItemCount}}</span>
        </a>
        <div
          class="dropdown-menu dropdown-menu-end shopping-cart"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <ShoppingCart />
        </div>
      </div>
      <!-- Avatar -->
      <div class="dropdown" v-if="loggedIn">
        <a
          class="text-reset dropdown-toggle"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fa-solid fa-user"></i>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <router-link class="dropdown-item" to="/myprofile">My profile</router-link>
          </li>
          <li>
            <router-link class="dropdown-item" to="/login" @click="logout">Logout</router-link>
          </li>
        </ul>
      </div>
      <router-link to="/login" class="nav-link text-dark" v-else>Login</router-link>
    </div>
    <!-- Right elements -->
  </div>
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->
</div>
</template>

<script>
import ShoppingCart from './shoppingCart/ShoppingCart.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: { ShoppingCart },
  computed: {
    ...mapGetters(['cartItemCount', 'loggedIn'])
  },
  methods: {
    ...mapActions(['logout'])
  },
  name: 'PrimaryNavigation'
}
</script>

<style>
.shopping-cart {
  min-width: 450px;
}
</style>