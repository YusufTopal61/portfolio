<template>
  <div class="min-h-screen flex items-center justify-center px-4 pt-16">
    <div class="max-w-4xl mx-auto text-center">
      <div class="mb-8">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-4">
          Hi, ik ben
          <span class="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-700 bg-clip-text text-transparent">
            Yusuf Topal
          </span>
        </h1>
        <h2 class="text-2xl md:text-3xl text-gray-300 mb-6">
          {{ displayText }}
          <span class="animate-pulse">|</span>
        </h2>
        <p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          19-jarige developer die graag moderne webapplicaties bouwt en
          altijd op zoek is naar verbeteringen gebruikersvriendelijke oplossingen.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <button
            @click="$emit('navigate', 'projects')"
            class="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
        >
          Bekijk mijn projecten
        </button>
        <button
            @click="$emit('navigate', 'contact')"
            class="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
        >
          Neem contact op
        </button>
      </div>

      <!-- Tech Stack Icons -->
      <div class="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-2xl mx-auto">
        <div
            v-for="tech in techStack"
            :key="tech.name"
            class="bg-slate-800/50 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105"
        >
          <div class="text-2xl mb-2">{{ tech.icon }}</div>
          <div class="text-sm text-gray-400">{{ tech.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineEmits<{
  navigate: [page: 'home' | 'about' | 'projects' | 'contact']
}>()

const displayText = ref('')
const fullText = 'Student Software Engineering'

const techStack = [
  { name: 'TypeScript', icon: '🚀' },
  { name: 'Java', icon: '☕' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Vue', icon: '💚' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'Spring Boot', icon: '🍃' },
]

onMounted(() => {
  let index = 0
  const timer = setInterval(() => {
    displayText.value = fullText.slice(0, index + 1)
    index++
    if (index >= fullText.length) {
      clearInterval(timer)
    }
  }, 100)
})
</script>