<template>
  <div v-if="content" v-html="content"></div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import MarkdownIt from 'vue3-markdown'

export default {
  name: 'AppMarkdown',
  setup() {
    const route = useRoute()
    const content = ref(null)

    onMounted(async () => {
      const markdownPath = route.meta.markdown
      if (markdownPath) {
        const response = await fetch(markdownPath)
        const mdContent = await response.text()
        content.value = MarkdownIt().render(mdContent)
      }
    })

    return { content }
  }
}
</script>
