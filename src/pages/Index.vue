<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
    <Navbar :current-page="currentPage" @navigate="setCurrentPage" />

    <main class="transition-all duration-500 ease-in-out">
      <component :is="currentComponent" @navigate="setCurrentPage" />
    </main>

    <Footer />

    <!-- Loading Screen -->
    <div
        v-if="isLoading"
        class="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center z-50"
    >
      <div class="text-center">
        <div class="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p class="text-white text-lg font-medium">Portfolio wordt geladen...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import Navbar from '../components/Navbar.vue'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'

type Page = 'home' | 'about' | 'projects' | 'contact'

const currentPage = ref<Page>('home')
const isLoading = ref(true)

const currentComponent = computed(() => {
  const components = {
    home: Home,
    about: About,
    projects: Projects,
    contact: Contact,
  }
  return components[currentPage.value] || Home
})

const setCurrentPage = (page: Page) => {
  currentPage.value = page
}

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})
</script>