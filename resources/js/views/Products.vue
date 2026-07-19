<template>
  <div class="bg-gray-50 min-h-screen py-12 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Katalog Produk</h1>
        <p class="text-gray-600">Temukan produk FEMAX yang sesuai dengan kebutuhan kendaraan Anda</p>
      </div>
      <div class="mb-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <input
          v-model="searchQuery"
          placeholder="Cari produk..."
          class="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <select
          v-model="selectedCategory"
          class="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="">Semua Kategori</option>
          <option>Penghematan</option>
          <option>Pembersih</option>
          <option>Perawatan</option>
        </select>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        />
      </div>
      <div v-if="filteredProducts.length === 0" class="text-center py-12">
        <p class="text-gray-600 text-lg">Produk tidak ditemukan</p>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'Products',
  components: {
    ProductCard
  },
  data() {
    return {
      searchQuery: '',
      selectedCategory: '',
      products: [
        {
          id: 1,
          name: 'Fuel Saver',
          category: 'Penghematan',
          description: 'Mengurangi konsumsi bahan bakar hingga 20%',
          price: 150000,
          stock: 50,
          icon: '⛽'
        },
        {
          id: 2,
          name: 'Carbon Cleaner',
          category: 'Pembersih',
          description: 'Membersihkan endapan karbon mesin',
          price: 100000,
          stock: 75,
          icon: '🧼'
        },
        {
          id: 3,
          name: 'Engine Treatment',
          category: 'Perawatan',
          description: 'Pelumasan premium dan proteksi mesin',
          price: 200000,
          stock: 40,
          icon: '🛡️'
        }
      ]
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        const matchesCategory = !this.selectedCategory || product.category === this.selectedCategory
        return matchesSearch && matchesCategory
      })
    }
  }
}
</script>
