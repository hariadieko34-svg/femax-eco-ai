<template>
  <nav class="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <div class="flex items-center space-x-2">
          <div class="bg-white rounded-full p-2">
            <span class="text-xl font-bold text-blue-600">⚡</span>
          </div>
          <router-link to="/" class="text-2xl font-bold hover:text-blue-200 transition">
            FEMAX ECO AI
          </router-link>
        </div>
        <div class="hidden md:flex space-x-8">
          <router-link to="/" class="hover:text-blue-200 transition duration-300">Home</router-link>
          <router-link to="/products" class="hover:text-blue-200 transition duration-300">Produk</router-link>
          <router-link to="/about" class="hover:text-blue-200 transition duration-300">Tentang</router-link>
          <router-link to="/contact" class="hover:text-blue-200 transition duration-300">Kontak</router-link>
        </div>
        <div class="flex items-center space-x-4">
          <router-link to="/cart" class="relative hover:text-blue-200 transition">
            <span class="text-2xl">🛒</span>
            <span v-if="cartCount" class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">{{ cartCount }}</span>
          </router-link>
          <button @click="toggleMenu" class="md:hidden text-2xl">☰</button>
        </div>
      </div>
      <div v-if="mobileMenuOpen" class="md:hidden pb-4 space-y-2">
        <router-link to="/" class="block px-4 py-2 hover:bg-blue-700 rounded">Home</router-link>
        <router-link to="/products" class="block px-4 py-2 hover:bg-blue-700 rounded">Produk</router-link>
        <router-link to="/about" class="block px-4 py-2 hover:bg-blue-700 rounded">Tentang</router-link>
        <router-link to="/contact" class="block px-4 py-2 hover:bg-blue-700 rounded">Kontak</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      mobileMenuOpen: false,
      cartCount: 0
    }
  },
  methods: {
    toggleMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    }
  },
  mounted() {
    this.cartCount = JSON.parse(localStorage.getItem('cart') || '[]').length
  }
}
</script>
