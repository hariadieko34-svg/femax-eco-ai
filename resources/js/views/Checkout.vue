<template>
  <div class="bg-gray-50 min-h-screen py-12 px-4">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-800 mb-8">Checkout</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold mb-6">Informasi Pengiriman</h2>
          <form @submit.prevent="checkout" class="space-y-4">
            <div>
              <label class="block text-gray-700 font-bold mb-2">Nama Lengkap</label>
              <input v-model="form.name" type="text" required class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label class="block text-gray-700 font-bold mb-2">Email</label>
              <input v-model="form.email" type="email" required class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label class="block text-gray-700 font-bold mb-2">No. Telepon</label>
              <input v-model="form.phone" type="tel" required class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label class="block text-gray-700 font-bold mb-2">Alamat</label>
              <textarea v-model="form.address" required class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" rows="3"></textarea>
            </div>
            <hr class="my-6" />
            <h2 class="text-2xl font-bold mb-4">Metode Pembayaran</h2>
            <div class="space-y-3">
              <label class="flex items-center">
                <input v-model="form.paymentMethod" type="radio" value="card" class="mr-3" />
                💳 Kartu Kredit/Debit
              </label>
              <label class="flex items-center">
                <input v-model="form.paymentMethod" type="radio" value="transfer" class="mr-3" />
                🏦 Transfer Bank
              </label>
              <label class="flex items-center">
                <input v-model="form.paymentMethod" type="radio" value="ewallet" class="mr-3" />
                📱 E-Wallet
              </label>
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 font-bold mt-6">
              Proses Pembayaran
            </button>
          </form>
        </div>
        <div class="bg-white p-8 rounded-lg shadow-md h-fit">
          <h2 class="text-2xl font-bold mb-6">Ringkasan Pesanan</h2>
          <div class="space-y-4 mb-6 pb-6 border-b">
            <div v-for="item in cartItems" :key="item.id" class="flex justify-between">
              <span>{{ item.name }} x{{ item.quantity }}</span>
              <span>Rp {{ formatPrice(item.price * item.quantity) }}</span>
            </div>
          </div>
          <div class="space-y-3 pb-6 border-b">
            <div class="flex justify-between">
              <span>Subtotal</span>
              <span>Rp {{ formatPrice(subtotal) }}</span>
            </div>
            <div class="flex justify-between">
              <span>Ongkir</span>
              <span>Rp {{ formatPrice(shipping) }}</span>
            </div>
          </div>
          <div class="flex justify-between text-2xl font-bold pt-4">
            <span>Total Bayar</span>
            <span class="text-blue-600">Rp {{ formatPrice(total) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkout',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        address: '',
        paymentMethod: 'card'
      },
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
    async checkout() {
      alert(`Terima kasih telah memesan! Pesanan Anda sedang diproses.\n\nTotal: Rp ${this.formatPrice(this.total)}`)
      localStorage.removeItem('cart')
      this.$router.push('/')
    }
  }
}
</script>
