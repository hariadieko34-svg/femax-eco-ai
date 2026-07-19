<template>
  <div class="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
    <div class="bg-gradient-to-br from-blue-400 to-blue-600 h-48 flex items-center justify-center text-6xl">
      {{ product.icon || '⚙️' }}
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold text-gray-800 mb-2">{{ product.name }}</h3>
      <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ product.description }}</p>
      <div class="mb-4">
        <span class="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">{{ product.category }}</span>
      </div>
      <div class="mb-4">
        <p class="text-3xl font-bold text-blue-600">Rp {{ formatPrice(product.price) }}</p>
        <p class="text-sm text-gray-500">Stok: {{ product.stock }} unit</p>
      </div>
      <div class="flex space-x-2">
        <router-link :to="`/products/${product.id}`" class="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition text-center font-semibold">
          Detail
        </router-link>
        <button
          @click="addToCart"
          :disabled="!product.stock"
          :class="[
            'flex-1 px-4 py-2 rounded-lg font-semibold transition',
            product.stock ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          ]"
        >
          {{ product.stock ? '🛒 Beli' : 'Habis' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat('id-ID').format(price)
    },
    addToCart() {
      let cart = JSON.parse(localStorage.getItem('cart') || '[]')
      const existingItem = cart.find(item => item.id === this.product.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        cart.push({ ...this.product, quantity: 1 })
      }
      localStorage.setItem('cart', JSON.stringify(cart))
      this.$emit('added-to-cart')
      alert(`${this.product.name} ditambahkan ke keranjang!`)
    }
  }
}
</script>
