
<template>
  <div class="min-h-screen py-20 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Neem <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Contact</span> op
        </h1>
        <p class="text-xl text-gray-400">
          Heb je een vraag of wil je samenwerken? Ik hoor graag van je!
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-slate-800/50 rounded-2xl p-8">
          <h2 class="text-2xl font-bold text-white mb-6">Stuur een bericht</h2>
          
          <div v-if="submitStatus === 'success'" class="bg-green-500/20 border border-green-500/30 text-green-300 p-4 rounded-lg mb-6">
            Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-gray-300 font-medium mb-2">
                Naam *
              </label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                required
                class="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Je naam"
              />
            </div>

            <div>
              <label for="email" class="block text-gray-300 font-medium mb-2">
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                required
                class="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="je@email.com"
              />
            </div>

            <div>
              <label for="message" class="block text-gray-300 font-medium mb-2">
                Bericht *
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                required
                rows="5"
                class="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                placeholder="Vertel me over je project of stel je vraag..."
              />
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              {{ isSubmitting ? 'Verzenden...' : 'Verstuur bericht' }}
            </button>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="space-y-8">
          <div class="bg-slate-800/50 rounded-2xl p-8">
            <h2 class="text-2xl font-bold text-white mb-6">Laten we verbinden</h2>
            <p class="text-gray-400 mb-6 leading-relaxed">
              Ik ben altijd geïnteresseerd in nieuwe projecten, samenwerkingen of 
              gewoon een goede technische discussie. Aarzel niet om contact op te nemen!
            </p>
            
            <div class="space-y-4">
              <div class="flex items-center gap-3 text-gray-300">
                <div class="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center">
                  📍
                </div>
                <span>Amsterdam-Noord, Nederland</span>
              </div>
              
              <div class="flex items-center gap-3 text-gray-300">
                <div class="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center">
                  🎓
                </div>
                <span>HBO-ICT Software Engineering (HvA)</span>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="bg-slate-800/50 rounded-2xl p-8">
            <h3 class="text-xl font-bold text-white mb-4">Volg me online</h3>
            <div class="flex gap-4">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 bg-purple-600/20 hover:bg-purple-600/40 text-purple-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                v-html="social.icon"
              />
            </div>
          </div>

          <!-- CV Download -->
          <div class="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8">
            <h3 class="text-xl font-bold text-white mb-4">Mijn CV</h3>
            <p class="text-gray-400 mb-4">
              Download mijn CV voor een volledig overzicht van mijn ervaring en vaardigheden.
            </p>
            <button class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
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

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>'
  }
]

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  setTimeout(() => {
    console.log('Form submitted:', formData.value)
    submitStatus.value = 'success'
    isSubmitting.value = false
    formData.value = { name: '', email: '', message: '' }
    
    setTimeout(() => {
      submitStatus.value = 'idle'
    }, 3000)
  }, 1000)
}
</script>
