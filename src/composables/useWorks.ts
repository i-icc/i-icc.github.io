import { ref, computed } from 'vue'
import type { Work } from '@/types/work'

export type SortOrder = 'asc' | 'desc'
export type SortField = 'date' | 'title'

export function useWorks() {
  const works = ref<Work[]>([])
  const sortField = ref<SortField>('date')
  const sortOrder = ref<SortOrder>('desc')

  const sortedWorks = computed(() => {
    return [...works.value].sort((a, b) => {
      const aValue = a[sortField.value]
      const bValue = b[sortField.value]
      
      if (sortField.value === 'date') {
        const dateA = new Date(aValue).getTime()
        const dateB = new Date(bValue).getTime()
        return sortOrder.value === 'asc' ? dateA - dateB : dateB - dateA
      }
      
      return sortOrder.value === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue)
    })
  })

  const setSortField = (field: SortField) => {
    if (sortField.value === field) {
      sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
    } else {
      sortField.value = field
      sortOrder.value = 'desc'
    }
  }

  const setWorks = (newWorks: Work[]) => {
    works.value = newWorks
  }

  return {
    works: sortedWorks,
    sortField,
    sortOrder,
    setSortField,
    setWorks
  }
}