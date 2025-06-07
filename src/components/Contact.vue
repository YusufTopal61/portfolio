
<template>
  <div class="min-h-screen py-20 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Neem <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">contact</span> op
        </h1>
        <p class="text-xl text-gray-400">Laten we samen iets moois bouwen!</p>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div class="space-y-8">
          <div v-for="item in contactInfo" :key="item.title" class="flex items-start gap-4">
            <div class="bg-purple-600/20 p-3 rounded-lg">
              <div class="text-purple-400 text-xl">{{ item.icon }}</div>
            </div>
            <div>
              <h3 class="text-white font-semibold mb-1">{{ item.title }}</h3>
              <p class="text-gray-400">{{ item.description }}</p>
              <a v-if="item.link" :href="item.link" class="text-purple-400 hover:text-purple-300 transition-colors">
                {{ item.value }}
              </a>
              <span v-else class="text-gray-300">{{ item.value }}</span>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-slate-800/50 rounded-2xl p-8">
          <h2 class="text-2xl font-bold text-white mb-6">Stuur een bericht</h2>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-gray-300 mb-2">Naam</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Je naam"
              />
            </div>
            
            <div>
              <label for="email" class="block text-gray-300 mb-2">Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="je@email.com"
              />
            </div>
            
            <div>
              <label for="message" class="block text-gray-300 mb-2">Bericht</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                class="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                placeholder="Vertel me over je project..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              class="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Verstuur bericht
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const contactInfo = [
  {
    icon: '📍',
    title: 'Locatie',
    description: 'Gevestigd in',
    value: 'Amsterdam-Noord, Nederland'
  },
  {
    icon: '📧',
    title: 'Email',
    description: 'Stuur me een email',
    value: 'yusuf@example.com',
    link: 'mailto:yusuf@example.com'
  },
  {
    icon: '💼',
    title: 'LinkedIn',
    description: 'Laten we connecten',
    value: 'linkedin.com/in/yusuftopal',
    link: 'https://linkedin.com'
  },
  {
    icon: '💻',
    title: 'GitHub',
    description: 'Bekijk mijn code',
    value: 'github.com/yusuftopal',
    link: 'https://github.com'
  }
]

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
  // Here you would typically send the form data to a backend
  alert('Bedankt voor je bericht! Ik neem zo snel mogelijk contact op.')
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    message: ''
  }
}
</script>
