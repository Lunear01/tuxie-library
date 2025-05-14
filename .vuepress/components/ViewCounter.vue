<script setup>
import { ref, onMounted } from 'vue'

const views = ref(0)

onMounted(() => {
  // Initialize GA4
  if (typeof window.gtag === 'undefined') {
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-LCT48BR4CV'
    document.head.appendChild(script)
    
    window.dataLayer = window.dataLayer || []
    function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date())
    gtag('config', 'G-LCT48BR4CV')
  }

  // Client-side counter (fallback)
  const key = `views-${window.location.pathname}`
  views.value = parseInt(localStorage.getItem(key)) || 0
  views.value++
  localStorage.setItem(key, views.value)
})
</script>

<div class="view-counter" style="float:right; font-size:0.85em; color:#666;">
  👁️ {{ views.toLocaleString() }} views
</div>
