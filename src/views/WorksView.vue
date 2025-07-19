<template>
  <main class="container">
    <div
      class="text-lg-center mb-4 mt-2"
      style="font-size: 4rem; font-family: 'Kosugi Maru', sans-serif"
    >
      制作物
    </div>
    <div v-for="([year, yearGroup]) in groupedWorks" :key="year" class="mb-5">
      <h2 class="display-5 mb-3 text-center" style="color: #666;">{{ year }}</h2>
      <div class="works">
        <WorksComponent :works="yearGroup" :tag="tag" />
      </div>
    </div>
  </main>
</template>

<script>
import WorksComponent from "@/components/WorksComponent.vue";

import "../../public/css/works.css";

export default {
  data() {
    return {
      all_works: [],
      works: [],
      tag: null,
    };
  },
  computed: {
    groupedWorks() {
      const groups = {};
      this.works.forEach(work => {
        let year = work.date.substring(0, 4);
        if (year === '????') year = '年不明';
        if (!groups[year]) groups[year] = [];
        groups[year].push(work);
      });

      // 配列で返すことで順序を保証
      return Object.entries(groups)
        .sort(([a], [b]) => {
          if (a === '年不明') return 1;
          if (b === '年不明') return -1;
          return parseInt(b) - parseInt(a); // 新しい年が上
        });
    }
  },
  methods: {
    select_work: function () {
      // console.log("test", this.tag, this.all_works, this.works);
      this.works = [];
      for (const work of this.all_works) {
        // console.log(work);
        if (work.tag.includes(this.tag) || this.tag == null) this.works.push(work);
      }
    },
  },
  watch: {
    $route: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.tag = this.$route.query.tag;
        this.select_work();
      } else {
        this.select_work();
      }
    },
  },
  mounted() {
    this.tag = this.$route.query.tag;
    fetch(`/works/show_list.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const promises = [];
        for (var i = data.from; i <= data.to; i++) {
          promises.push(
            fetch(`/works/${i}.json`)
              .then((response) => response.json())
          );
        }
        
        Promise.all(promises).then((allWorks) => {
          this.all_works = allWorks.sort((a, b) => {
            const dateA = new Date(a.date.replace(/\?/g, '1').replace('/', '-'));
            const dateB = new Date(b.date.replace(/\?/g, '1').replace('/', '-'));
            return dateB - dateA;
          });
          this.select_work();
        });
      });
  },
  components: {
    WorksComponent,
  },
};
</script>
