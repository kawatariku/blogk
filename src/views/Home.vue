<template>
  <div class="home">
    <About />
    <ContentsItem title = "web works">
    <EntryThumbnail
      :entries = "entries"
    />
    </ContentsItem>
  </div>
</template>

<script>
// @ is an alias to /src
import { onMounted, computed } from 'vue'
import EntryThumbnail from '@/components/EntryThumbnail.vue'
import ContentsItem from '@/components/ContentsItem.vue'
import About from '@/components/About.vue'

import { useStore } from 'vuex'
export default {
  name: 'Home',
  components: {
    About,
    EntryThumbnail,
    ContentsItem
  },

  setup() {
    const store = useStore();
    const getEntries = () => store.dispatch('getEntries')
    onMounted(() => {
      getEntries()
    })
    return {
      entries: computed(() => store.state.entries),
    }
  }
}
</script>

