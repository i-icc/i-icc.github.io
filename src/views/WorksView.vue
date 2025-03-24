<template>
  <main class="container">
    <div
      class="text-lg-center mb-4 mt-2"
      style="font-size: 4rem; font-family: 'Kosugi Maru', sans-serif"
    >
      制作物
    </div>
    <div class="works">
      <WorksComponent :initialWorks="filteredWorks" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import WorksComponent from "@/components/WorksComponent.vue"
import type { Work } from '@/types/work'

import "../../public/css/works.css"

export default defineComponent({
  name: 'WorksView',
  components: {
    WorksComponent,
  },
  setup() {
    const route = useRoute()
    const allWorks = ref<Work[]>([])
    const tag = ref<string | null>(null)

    const filteredWorks = computed(() => {
      if (!tag.value) return allWorks.value
      return allWorks.value.filter(work => work.tags.includes(tag.value!))
    })

    const loadWorks = async () => {
      try {
        const response = await fetch('/works/show_list.json')
        const data = await response.json()
        
        const workPromises = []
        for (let i = data.from; i <= data.to; i++) {
          workPromises.push(fetch(`/works/${i}.json`).then(res => res.json()))
        }
        
        const works = await Promise.all(workPromises)
        allWorks.value = works
      } catch (error) {
        console.error('Error loading works:', error)
      }
    }

    watch(
      () => route.query.tag,
      (newTag) => {
        tag.value = newTag as string || null
      }
    )

    onMounted(() => {
      tag.value = route.query.tag as string || null
      loadWorks()
    })

    return {
      filteredWorks
    }
  }
})
</script>
