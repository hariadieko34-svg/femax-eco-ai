<template>
  <div id="app" class="bg-white">
    <Navbar />
    <router-view />
    <ChatbotWidget />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import ChatbotWidget from './components/ChatbotWidget.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    ChatbotWidget,
    Footer
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
