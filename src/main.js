import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const sendPageView = () => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return
  }

  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href
  })
}

router.afterEach(() => {
  sendPageView()
})

const app = createApp(App)

app.use(router)

router.isReady().then(() => {
  sendPageView()
  app.mount('#app')
})
