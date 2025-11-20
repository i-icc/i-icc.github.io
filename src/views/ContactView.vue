<template>
  <section class="contact-page container py-5">
    <h1 class="text-center mb-4">お問い合わせ</h1>
    <p class="lead text-center mb-5">
      ご依頼やご相談は、以下のフォームよりお気軽にご連絡ください。
    </p>
    <div class="form-wrapper mx-auto">
      <iframe
        title="Contact form"
        src="https://docs.google.com/forms/d/e/1FAIpQLScZfrPBOn0vPa0oQUvWqy36jqIojeTf7IWhSQQnrksPn8lEjw/viewform?embedded=true"
        width="640"
        height="974"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        読み込んでいます…
      </iframe>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactView",
};
</script>

<style scoped>
.form-wrapper {
  max-width: 720px;
}

iframe {
  width: 100%;
  border: none;
}
</style>
