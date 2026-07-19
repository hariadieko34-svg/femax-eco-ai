<template>
  <div class="bg-gray-50 min-h-screen py-12 px-4">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-800 mb-8">🛒 Keranjang Belanja</h1>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2">
          <div v-if="cartItems.length === 0" class="bg-white p-8 rounded-lg text-center">
            <p class="text-gray-600 text-lg mb-4">Keranjang belanja Anda kosong</p>
            <router-link to="/products" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block">
              Lanjut Belanja
            </router-link>
          </div>
          <div v-else class="space-y-4">
            <div v-for="item in cartItems" :key="item.id" class="bg-white p-6 rounded-lg flex justify-between items-center">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-800">{{ item.name }}</h3>
                <p class="text-gray-600">Rp {{ formatPrice(item.price) }}</p>
              </div>
              <div class="flex items-center space-x-4">
                <button @click="decreaseQuantity(item.id)" class="bg-gray-200 px-3 py-1 rounded">-</button>
                <span class="font-bold">{{ item.quantity }}</span>
                <button @click="increaseQuantity(item.id)" class="bg-gray-200 px-3 py-1 rounded">+</button>
                <button @click="removeItem(item.id)" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Hapus</button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="cartItems.length > 0" class="bg-white p-8 rounded-lg h-fit">
          <h2 class="text-2xl font-bold mb-6">Ringkasan Order</h2>
          <div class="space-y-4 mb-6 pb-6 border-b">
            <div class="flex justify-between">
              <span>Subtotal</span>
              <span>Rp {{ formatPrice(subtotal) }}</span>
            </div>
            <div class="flex justify-between">
              <span>Ongkir</span>
              <span>Rp {{ formatPrice(shipping) }}</span>
            </div>
          </div>
          <div class="flex justify-between text-2xl font-bold mb-6">
            <span>Total</span>
            <span class="text-blue-600">Rp {{ formatPrice(total) }}</span>
          </div>
          <router-link to="/checkout" class="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 font-bold block text-center">
            Lanjut ke Checkout
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {
      shipping: 50000
    }
  },
  computed: {
    cartItems() {
      return JSON.parse(localStorage.getItem('cart') || '[]')
    },
    subtotal() {
      return this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    },
    total() {
      return this.subtotal + this.shipping
    }
  },
  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat('id-ID').format(price)
    },
    increaseQuantity(productId) {
      const item = this.cartItems.find(i => i.id === productId)
      if (item) item.quantity += 1
      this.saveCart()
    },
    decreaseQuantity(productId) {
      const item = this.cartItems.find(i => i.id === productId)
      if (item && item.quantity > 1) item.quantity -= 1
      this.saveCart()
    },
    removeItem(productId) {
      const cart = this.cartItems.filter(i => i.id !== productId)
      localStorage.setItem('cart', JSON.stringify(cart))
    },
    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.cartItems))
    }
  }
}
</script>
