<!-- resources/js/components/AiSearchComponent.vue -->
<template>
  <div class="card p-4 shadow-sm border-primary">
    <div class="card-body">
      <h5 class="card-title text-primary"><i class="bi bi-cpu"></i> AI Smart Search FEMAX</h5>
      <p class="text-muted small">Ketik keluhan mesin mobil/motor Anda (Contoh: "Mobil saya boros dan pincang")</p>
      
      <div class="input-group mb-3">
        <input v-model="searchQuery" type="text" class="form-control" placeholder="Tulis keluhan di sini..." @keyup.enter="processAiSearch">
        <button class="btn btn-primary" type="button" :disabled="loading" @click="processAiSearch">
          <span v-if="loading" class="spinner-border spinner-border-sm"></span>
          <span v-else>Analisis AI</span>
        </button>
      </div>

      <!-- AI Feedback Text -->
      <div v-if="aiReason" class="alert alert-info py-2">
        <strong>Analisis AI:</strong> {{ aiReason }}
      </div>

      <!-- Hasil Produk Kategori Otomatis -->
      <div class="row mt-3">
        <div v-for="product in products" :key="product.id" class="col-md-4 mb-3">
          <div class="card h-100">
            <div class="card-body d-flex flex-column justify-content-between">
              <h6>{{ product.name }}</h6>
              <p class="text-danger fw-bold">Rp {{ Number(product.price).toLocaleString('id-ID') }}</p>
              <button class="btn btn-sm btn-outline-success w-100">Beli Sekarang</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      loading: false,
      aiReason: '',
      products: []
    }
  },
  methods: {
    async processAiSearch() {
      if (!this.searchQuery) return;
      this.loading = true;
      this.products = [];
      this.aiReason = '';
      
      try {
        const response = await fetch('/api/ai-search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: this.searchQuery })
        });
        const resData = await response.json();
        if (resData.status === 'success') {
          this.aiReason = resData.ai_analysis;
          this.products = resData.data;
        }
      } catch (error) {
        console.error("AI Error:", error);
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>
