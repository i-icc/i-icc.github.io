<template>
  <div class="works-container">
    <div class="sorting-controls mb-4">
      <div class="btn-group">
        <button
          class="btn"
          :class="sortField === 'date' ? 'btn-primary' : 'btn-outline-primary'"
          @click="setSortField('date')"
        >
          Date {{ getSortIcon('date') }}
        </button>
        <button
          class="btn"
          :class="sortField === 'title' ? 'btn-primary' : 'btn-outline-primary'"
          @click="setSortField('title')"
        >
          Title {{ getSortIcon('title') }}
        </button>
      </div>
    </div>

    <div class="works-grid">
      <div v-for="work in works" :key="work.id" class="card work">
        <router-link
          :to="'/work/' + work.id"
          style="text-decoration: none; color: inherit"
        >
          <div class="box">
            <img :src="work.image_path" :alt="work.title" />
            <div class="card_content">
              <div class="desc">{{ work.short_description }}</div>
            </div>
            <div class="title">
              {{ work.title }}
              <small class="text-muted">{{ formatDate(work.date) }}</small>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useWorks, type SortField } from '@/composables/useWorks'

export default defineComponent({
  name: 'WorksComponent',
  props: {
    initialWorks: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const { works, sortField, sortOrder, setSortField, setWorks } = useWorks()

    setWorks(props.initialWorks)

    const getSortIcon = (field: SortField) => {
      if (sortField.value !== field) return ''
      return sortOrder.value === 'asc' ? '↑' : '↓'
    }

    const formatDate = (dateStr: string) => {
      return new Date(dateStr).toLocaleDateString()
    }

    return {
      works,
      sortField,
      setSortField,
      getSortIcon,
      formatDate
    }
  }
})
</script>

<style scoped>
.works-container {
  padding: 20px;
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.work {
  transition: transform 0.2s;
}

.work:hover {
  transform: translateY(-5px);
}

.box {
  position: relative;
  overflow: hidden;
}

.box img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card_content {
  padding: 15px;
}

.title {
  padding: 10px 15px;
  font-weight: bold;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.desc {
  font-size: 0.9rem;
  color: #666;
}
</style>
