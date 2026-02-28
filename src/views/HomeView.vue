<template>
  <main class="container">
    <div class="m-5 home">
      <div class="display-1">某猫創作倉庫</div>
      <div class="display-8 mb-2">思いついたものを暇な時に作っています</div>
    </div>

    <div class="row border-bottom p-3">
      <div class="col-md-3 display-6 link" v-for="link in links" :key="link.l">
        <router-link class="nav-link" :to="link.l" style="color: black">{{
          link.t
        }}</router-link>
      </div>
    </div>

    <div class="m-5">
      <div class="display-5"><b>recommend works</b></div>
      <div class="works">
        <WorksComponent :works="works" :tag="tag" />
      </div>
    </div>
  </main>
</template>

<script>
import WorksComponent from "@/components/WorksComponent.vue";
import "../../public/css/home.css";
import "../../public/css/works.css";

export default {
  data() {
    return {
      links: [
        { l: "/works", t: "Works" },
        { l: "/about", t: "About" },
        { l: "/info", t: "Info" },
        { l: "/blog", t: "Blog" },
      ],
      works: [],
    };
  },
  mounted() {
    const recommended_ids = [13, 25, 35];
    Promise.all(
      recommended_ids.map((i) =>
        fetch(`/works/${i}.json`).then((response) => response.json())
      )
    ).then((jsons) => {
      this.works = jsons;
    });
  },
  components: {
    WorksComponent,
  },
};
</script>
