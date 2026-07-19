<template>
  <div class="bg-white">
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-32 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">⚡ FEMAX ECO AI</h1>
        <p class="text-xl md:text-2xl mb-8 text-blue-100">Solusi Automotive Cerdas dengan Teknologi AI</p>
        <p class="text-lg mb-12 max-w-2xl mx-auto text-blue-100">Tingkatkan performa kendaraan Anda dengan produk premium FEMAX.</p>
        <div class="flex justify-center space-x-4">
          <router-link to="/products" class="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition">
            Lihat Produk
          </router-link>
          <button class="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition">
            Pelajari Lebih
          </button>
        </div>
      </div>
    </section>
    <section class="py-20 px-4 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-4 text-gray-800">Produk Unggulan</h2>
        <p class="text-center text-gray-600 mb-12">Pilihan produk terbaik untuk kendaraan Anda</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard
            v-for="product in featuredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </section>
    <section class="py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Mengapa Pilih FEMAX?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-lg text-center hover:shadow-lg transition">
            <div class="text-5xl mb-4">🧠</div>
            <h3 class="text-xl font-bold mb-3">AI Recommendation</h3>
            <p>Rekomendasi produk personal berdasarkan jenis kendaraan Anda</p>
          </div>
          <div class="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-lg text-center hover:shadow-lg transition">
            <div class="text-5xl mb-4">💰</div>
            <h3 class="text-xl font-bold mb-3">Hemat Biaya</h3>
            <p>Hemat hingga 20% konsumsi bahan bakar dengan produk kami</p>
          </div>
          <div class="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-lg text-center hover:shadow-lg transition">
            <div class="text-5xl mb-4">🌍</div>
            <h3 class="text-xl font-bold mb-3">Ramah Lingkungan</h3>
            <p>Kurangi emisi karbon dan jaga kelestarian lingkungan</p>
          </div>
        </div>
      </div>
    </section>
    <section class="py-20 px-4 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Testimoni Pelanggan</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="testimonial in testimonials" :key="testimonial.id" class="bg-white p-8 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <div class="text-4xl mr-4">{{ testimonial.avatar }}</div>
              <div>
                <h4 class="font-bold text-gray-800">{{ testimonial.name }}</h4>
                <p class="text-sm text-gray-600">{{ testimonial.vehicle }}</p>
              </div>
            </div>
            <p class="text-gray-600 mb-4">{{ testimonial.comment }}</p>
            <div class="text-yellow-400">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-4">Siap Upgrade Kendaraan Anda?</h2>
        <p class="text-xl mb-8 text-blue-100">Dapatkan diskon spesial untuk pembelian hari ini</p>
        <router-link to="/products" class="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition inline-block">
          Belanja Sekarang
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'Home',
  components: {
    ProductCard
  },
  data() {
    return {
      featuredProducts: [
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
      ],
      testimonials: [
        {
          id: 1,
          avatar: '👨',
          name: 'Budi Santoso',
          vehicle: 'Toyota Innova 2020',
          comment: 'Setelah pakai FEMAX, konsumsi BBM kendaraan saya lebih hemat. Sangat puas!'
        },
        {
          id: 2,
          avatar: '👩',
          name: 'Siti Nurhaliza',
          vehicle: 'Avanza 2019',
          comment: 'Performa mesin jadi lebih smooth. Saya rekomendasikan ke teman-teman.'
        },
        {
          id: 3,
          avatar: '👨',
          name: 'Ahmad Wijaya',
          vehicle: 'Honda Civic 2021',
          comment: 'Kualitas produk terjamin, customer service responsif. Mantap!'
        }
      ]
    }
  }
}
</script>
