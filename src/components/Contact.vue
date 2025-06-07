<template>
  <div class="min-h-screen py-20 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Neem <span class="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Contact</span> op
        </h1>
        <p class="text-xl text-gray-400">
          Heb je een vraag of wil je samenwerken? Ik hoor graag van je!
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-slate-800/50 rounded-2xl p-8">
          <h2 class="text-2xl font-bold text-white mb-6">Stuur een bericht</h2>

          <div
              v-if="submitStatus === 'success'"
              class="bg-green-500/20 border border-green-500/30 text-green-300 p-4 rounded-lg mb-6"
          >
            Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-gray-300 font-medium mb-2">Naam *</label>
              <input
                  id="name"
                  v-model="formData.name"
                  required
                  placeholder="Je naam"
                  class="w-full bg-slate-900/50 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label for="email" class="block text-gray-300 font-medium mb-2">E-mail *</label>
              <input
                  id="email"
                  v-model="formData.email"
                  required
                  type="email"
                  placeholder="je@email.com"
                  class="w-full bg-slate-900/50 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label for="message" class="block text-gray-300 font-medium mb-2">Bericht *</label>
              <textarea
                  id="message"
                  v-model="formData.message"
                  rows="5"
                  required
                  placeholder="Vertel me over je project of stel je vraag..."
                  class="w-full bg-slate-900/50 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 resize-none"
              ></textarea>
            </div>

            <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isSubmitting ? 'Verzenden...' : 'Verstuur bericht' }}
            </button>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="space-y-8">
          <div class="bg-slate-800/50 rounded-2xl p-8">
            <h2 class="text-2xl font-bold text-white mb-6">Laten we verbinden</h2>
            <p class="text-gray-400 mb-6">
              Ik sta altijd open voor samenwerkingen of nieuwe projecten. Neem gerust contact op!
            </p>

            <div class="space-y-4">
              <div class="flex items-center gap-3 text-gray-300">
                <div class="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">📍</div>
                <span>Amsterdam-Noord, Nederland</span>
              </div>
              <div class="flex items-center gap-3 text-gray-300">
                <div class="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">🎓</div>
                <span>HBO-ICT Software Engineering (HvA)</span>
              </div>
            </div>
          </div>

          <!-- Socials -->
          <div class="bg-slate-800/50 rounded-2xl p-8">
            <h3 class="text-xl font-bold text-white mb-4">Volg me online</h3>
            <div class="flex gap-4">
              <a
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-12 h-12 bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  v-html="social.icon"
              />
            </div>
          </div>

          <!-- CV Download -->
          <div class="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-2xl p-8">
            <h3 class="text-xl font-bold text-white mb-4">Mijn CV</h3>
            <p class="text-gray-400 mb-4">Download mijn CV voor een volledig overzicht van mijn ervaring en skills.</p>
            <button class="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-transform duration-300 hover:scale-105 flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({ name: '', email: '', message: '' })
const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success'>('idle')

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..."/></svg>' // gebruik jouw volledige pad hier
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..."/></svg>' // idem
  }
]

const handleSubmit = async () => {
  isSubmitting.value = true
  setTimeout(() => {
    submitStatus.value = 'success'
    isSubmitting.value = false
    formData.value = { name: '', email: '', message: '' }
    setTimeout(() => {
      submitStatus.value = 'idle'
    }, 3000)
  }, 1000)
}
</script>