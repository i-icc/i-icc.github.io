<template>
  <main class="container">
    <div class="m-5 home">
      <div class="display-1">某猫創作倉庫</div>
      <div class="display-6 mb-2">
        思いついたものを徒然なるまま作っています。<br />
        <s>半年に一度くらいのペースで動画も出しています。</s><br />
        連絡は下記Googleフォームまで。
      </div>
    </div>

    <div class="m-3 home">
      <!-- アイコン置きたい 上でも下でも -->
      <img src="/img/icon.png" class="icon" />
      <div class="display-4">i-icc/某猫</div>
    </div>

    <div class="links mb-5">
      <div v-for="link in links" :key="link.l">
        <a class="nav-link" :href="link.l" style="color: black" target="_blank"
          ><img :src="link.i" class="link"
        /></a>
      </div>
    </div>

    <!-- グーグルフォーム -->
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSeQ-stLKxZ87HoVHz_bt-K7SvJOQSB8vcG6RH0BrD_lTEwprw/viewform?embedded=true"
      width="95%"
      height="1000"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      >読み込んでいます…</iframe
    >
    <!-- 技術スタックとかここにいつか書くかも -->
  </main>
</template>

<script>
// 連絡はgitかツイッターのDMまでよろしくお願いします。的な？
import "../../public/css/about.css";

export default {
  data() {
    return {
      links: [
        { l: "https://github.com/i-icc", t: "git", i: "/img/git_logo.png" },
        {
          l: "https://twitter.com/bo_neko_i_icc",
          t: "twitter",
          i: "/img/twitter_logo.png",
        },
      ],
    };
  },
};
</script>
