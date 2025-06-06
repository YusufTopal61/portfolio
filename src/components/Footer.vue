
<template>
  <footer class="bg-slate-900/50 border-t border-purple-500/20 py-8">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <div class="mb-4">
        <h3 class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
          Yusuf Topal
        </h3>
        <p class="text-gray-400">Fullstack Developer uit Amsterdam-Noord</p>
      </div>
      
      <div class="flex justify-center gap-6 mb-6">
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-purple-400 transition-colors"
        >
          {{ link.name }}
        </a>
      </div>
      
      <div class="text-gray-500 text-sm">
        <p>&copy; 2024 Yusuf Topal. Alle rechten voorbehouden.</p>
        <p class="mt-1">Gebouwd met TypeScript, Vue en Tailwind CSS</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com' },
  { name: 'LinkedIn', url: 'https://linkedin.com' },
  { name: 'GitLab', url: 'https://gitlab.com' },
]
</script>
