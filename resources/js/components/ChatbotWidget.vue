<template>
  <div>
    <button
      @click="toggleChat"
      class="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition z-40"
    >
      <span class="text-2xl">💬</span>
    </button>
    <div
      v-if="isOpen"
      class="fixed bottom-24 right-8 w-96 bg-white rounded-lg shadow-xl z-40 flex flex-col h-96"
    >
      <div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 rounded-t-lg flex justify-between items-center">
        <h3 class="font-bold">FEMAX AI Assistant</h3>
        <button @click="toggleChat" class="text-xl">✕</button>
      </div>
      <div ref="messagesContainer" class="flex-1 overflow-y-auto p-4 space-y-4">
        <div v-for="(msg, idx) in messages" :key="idx" :class="msg.type === 'user' ? 'text-right' : 'text-left'">
          <div :class="[
            'inline-block px-4 py-2 rounded-lg max-w-xs break-words',
            msg.type === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
          ]">
            {{ msg.text }}
          </div>
        </div>
      </div>
      <div class="border-t p-4 flex space-x-2">
        <input
          v-model="userMessage"
          @keyup.enter="sendMessage"
          placeholder="Tanya apa..."
          class="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          @click="sendMessage"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Kirim
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatbotWidget',
  data() {
    return {
      isOpen: false,
      userMessage: '',
      messages: [
        { type: 'bot', text: 'Halo! 👋 Selamat datang di FEMAX ECO AI. Ada yang bisa saya bantu?' }
      ]
    }
  },
  methods: {
    toggleChat() {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        this.$nextTick(() => {
          this.scrollToBottom()
        })
      }
    },
    async sendMessage() {
      if (!this.userMessage.trim()) return
      this.messages.push({ type: 'user', text: this.userMessage })
      const message = this.userMessage
      this.userMessage = ''
      try {
        this.messages.push({ type: 'bot', text: 'Terima kasih atas pertanyaannya! Tim customer service kami akan segera membantu.' })
      } catch (error) {
        this.messages.push({ type: 'bot', text: 'Maaf, terjadi kesalahan. Silakan hubungi customer service.' })
      }
      this.$nextTick(() => {
        this.scrollToBottom()
      })
    },
    scrollToBottom() {
      const container = this.$refs.messagesContainer
      if (container) {
        container.scrollTop = container.scrollHeight
      }
    }
  }
}
</script>
