<template>
  <div class="min-h-screen py-20 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Over <span class="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">mij</span>
        </h1>
        <p class="text-xl text-gray-400">Leer meer over mijn achtergrond en passie voor development</p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <div class="bg-gradient-to-br from-blue-600 to-indigo-600 p-1 rounded-2xl">
            <div class="bg-slate-900 rounded-2xl p-8">
              <h2 class="text-2xl font-bold text-white mb-6">Persoonlijke Info</h2>
              <div class="space-y-4">
                <div v-for="info in personalInfo" :key="info.label">
                  <span class="text-blue-400 font-medium">{{ info.label }}:</span>
                  <span class="text-gray-300 ml-2">{{ info.value }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-white mb-6">Over Mij</h2>
          <div class="text-gray-300 space-y-4 leading-relaxed">
            <p v-for="paragraph in storyParagraphs" :key="paragraph.substring(0, 50)">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="bg-slate-800/50 rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-white mb-8 text-center">Technische Vaardigheden</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(skillList, category) in skills" :key="category" class="bg-slate-900/50 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-blue-400 mb-4 capitalize">
              {{ getCategoryLabel(category) }}
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                  v-for="skill in skillList"
                  :key="skill"
                  class="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const personalInfo = [
  { label: 'Naam', value: 'Yusuf Topal' },
  { label: 'Leeftijd', value: '19 jaar' },
  { label: 'Locatie', value: 'Amsterdam-Noord' },
  { label: 'Opleiding', value: 'HBO-ICT Software Engineering (HvA)' },
]

const storyParagraphs = [
  'Ik ben Yusuf, 19 jaar oud en ik woon in Amsterdam-Noord. Ik ben rustig, zelfstandig en iemand die graag anderen helpt.',
  'Ik werk graag aan duidelijke en overzichtelijke projecten, en vind het fijn als dingen logisch in elkaar zitten. Ik kan goed zelfstandig werken, maar ook goed samenwerken.',
  'Wat ik leuk vind aan development is dat je zelf iets moois en bruikbaars kunt maken. Vooral het ontwerpen en bouwen van moderne en gebruiksvriendelijke websites vind ik leuk.'
]

const skills = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue'],
  backend: ['Java', 'Node.js', 'Express', 'Spring Boot'],
  database: ['MySQL', 'Database Design'],
  mobile: ['Kotlin', 'Jetpack Compose'],
  tools: ['Git', 'GitLab', 'OOP', 'TailwindCSS']
}

const getCategoryLabel = (category: string) => {
  const labels: Record<string, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    mobile: 'Mobile',
    tools: 'Tools'
  }
  return labels[category] || category
}
</script>