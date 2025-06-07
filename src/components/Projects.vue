<template>
  <div class="min-h-screen py-20 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Mijn <span class="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Projecten</span>
        </h1>
        <p class="text-xl text-gray-400 mb-8">
          Een overzicht van de projecten die ik heb ontwikkeld
        </p>

        <!-- Filter Buttons -->
        <div class="flex flex-wrap justify-center gap-4 mb-8">
          <button
              v-for="filter in filters"
              :key="filter.id"
              @click="activeFilter = filter.id"
              :class="[
              'px-6 py-3 rounded-lg font-medium transition-all duration-300',
              activeFilter === filter.id
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800/50 text-gray-400 hover:bg-slate-700/50 hover:text-white'
            ]"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
            v-for="(project, index) in filteredProjects"
            :key="project.title"
            :class="[
            'group bg-slate-800/50 rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-slate-700/50 hover:border-blue-500/50',
            project.featured ? 'ring-2 ring-blue-500/30' : ''
          ]"
            :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div
              v-if="project.featured"
              class="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs px-3 py-1 rounded-full mb-4"
          >
            ⭐ Featured
          </div>

          <h3 class="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
            {{ project.title }}
          </h3>

          <p class="text-gray-400 mb-4 leading-relaxed">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-2 mb-6">
            <span
                v-for="tech in project.technologies"
                :key="tech"
                :class="['px-3 py-1 rounded-full text-xs border', getTechColor(tech)]"
            >
              {{ tech }}
            </span>
          </div>

          <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            <span>Bekijk op GitLab</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      <div v-if="filteredProjects.length === 0" class="text-center py-12">
        <p class="text-gray-400 text-lg">
          Geen projecten gevonden voor de geselecteerde filter.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Project {
  title: string
  description: string
  technologies: string[]
  link: string
  category: string
  featured?: boolean
}

const activeFilter = ref('all')

const projects: Project[] = [
  {
    title: 'Dokkie',
    description: 'Een moderne Tikkie-achtige betaalapp ontwikkeld met TypeScript en object-georiënteerd programmeren.',
    technologies: ['HTML', 'CSS', 'TypeScript', 'OOP'],
    link: 'https://gitlab.com',
    category: 'frontend',
    featured: true
  },
  {
    title: 'Code Exchange',
    description: 'Een volledig functioneel Q&A platform geïnspireerd door Stack Overflow.',
    technologies: ['HTML', 'CSS', 'TypeScript', 'OOP'],
    link: 'https://gitlab.com',
    category: 'frontend',
    featured: true
  },
  {
    title: 'The Game',
    description: 'Een interactieve game met Lit en TypeScript.',
    technologies: ['TypeScript', 'Lit', 'Game Engine', 'OOP'],
    link: 'https://gitlab.com',
    category: 'frontend'
  },
  {
    title: 'Webshop',
    description: 'Fullstack webshop met gebruikersauthenticatie, database en beheer.',
    technologies: ['Node.js', 'Express', 'MySQL', 'TypeScript', 'Lit'],
    link: 'https://gitlab.com',
    category: 'fullstack',
    featured: true
  },
  {
    title: 'Elections',
    description: 'Realtime verkiezingsresultaten met Spring Boot + Vue.',
    technologies: ['Java', 'Spring Boot', 'Vue', 'TailwindCSS'],
    link: 'https://gitlab.com',
    category: 'fullstack'
  }
]

const filters = [
  { id: 'all', label: 'Alle Projecten' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'fullstack', label: 'Fullstack' }
]

const filteredProjects = computed(() => {
  return activeFilter.value === 'all'
      ? projects
      : projects.filter(project => project.category === activeFilter.value)
})

const getTechColor = (tech: string) => {
  const colors: Record<string, string> = {
    'HTML': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    'CSS': 'bg-blue-400/20 text-blue-200 border-blue-400/30',
    'TypeScript': 'bg-blue-600/20 text-blue-300 border-blue-600/30',
    'JavaScript': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    'Vue': 'bg-green-500/20 text-green-300 border-green-500/30',
    'Java': 'bg-red-500/20 text-red-300 border-red-500/30',
    'Node.js': 'bg-emerald-600/20 text-emerald-300 border-emerald-600/30',
    'Express': 'bg-gray-500/20 text-gray-300 border-gray-500/30',
    'MySQL': 'bg-blue-700/20 text-blue-300 border-blue-700/30',
    'Spring Boot': 'bg-emerald-700/20 text-emerald-300 border-emerald-700/30',
    'TailwindCSS': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    'Lit': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    'OOP': 'bg-slate-500/20 text-slate-300 border-slate-500/30',
    'Game Engine': 'bg-sky-500/20 text-sky-300 border-sky-500/30'
  }
  return colors[tech] || 'bg-blue-500/20 text-blue-300 border-blue-500/30'
}
</script>