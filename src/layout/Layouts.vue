<template>
  <div class="min-h-screen bg-white flex flex-col">
    <!-- ============ NAVBAR TRANSPARENTE ============ -->
    <nav class="fixed top-0 w-full z-50 transition-all duration-300" :class="isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white/60 backdrop-blur-sm'">
      <div class="container mx-auto px-4 py-3 flex justify-start items-center">
        <!-- Logo à gauche -->
        <router-link to="/" class="flex items-center">
          <img :src="logo" alt="Express 54" class="h-12 w-auto" />
        </router-link>
      </div>
    </nav>

    <!-- ============ CONTENU PRINCIPAL ============ -->
    <main class="flex-1 pt-16">
      <router-view />
    </main>

    <!-- ============ FOOTER ============ -->
    <footer class="py-8 px-4 border-t" style="background: #fff9f0;">
      <div class="container mx-auto text-center">
        <div class="flex items-center justify-center space-x-2 mb-4">
          <img :src="logo" alt="Express 54" class="h-8 w-auto" />
          <span class="text-lg font-bold">Express <span style="color: #ff6200;">54</span></span>
        </div>
        <p class="text-sm text-gray-500">© 2026 Express 54. Tous droits réservés.</p>
        <div class="flex justify-center space-x-6 mt-3">
          <router-link to="/mentions-legales" class="text-sm text-gray-500 hover:text-[#ff6200]">Mentions légales</router-link>
          <router-link to="/confidentialite" class="text-sm text-gray-500 hover:text-[#ff6200]">Confidentialité</router-link>
          <router-link to="/contact" class="text-sm text-gray-500 hover:text-[#ff6200]">Contact</router-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// ===== IMPORT DU LOGO =====
import logo from '@/assets/images/logoprincipale.png'

// ===== ÉTAT =====
const isScrolled = ref(false)

// ===== DÉTECTER LE SCROLL POUR LA NAVBAR =====
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
nav {
  transition: all 0.3s ease;
}
</style>