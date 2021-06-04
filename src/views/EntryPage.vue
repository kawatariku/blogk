<template>
  <article class="entry-container" v-if="entry">
    <h1 class="entry-title">{{entry.title}}</h1>
    <div class="body" v-html="entry.body">
    </div>
  </article>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import Entry from '@/components/Entry.vue'
export default {
  components: {
    Entry
  },
  setup() {
    const store = useStore()
    const route = useRoute()
    const getEntry = () => store.dispatch('getEntry', route.params.id)

    onMounted(() => {
      getEntry()
    })

    return {
      getEntry,
      entry: computed(() => store.state.entry),
    }
  }
}
</script>

<style>
.entry-container{
    padding: 16px 24px;
    margin: 0 auto;
    max-width: 896px;
    }
.entry-container:before{
       margin: 0 auto;
       position: absolute;
       display: block;
       content: '';
       width: 80%;
       height: 300px;
       background-color: rgba(0,0,0,0.1);
       top: 0;
       right: 0;
       z-index: -2;
    }

.entry-container:after{
       margin: 0 auto;
       position: absolute;
       display: block;
       content: '';
       width: 2000px;
       height: 1000px;
       background-color: #fff;
       transform: rotate(15deg) translateX(-1900px);
       top: -300px;
       left: 50%;
       z-index: -1;
}

.entry-title{
    margin: 0 auto 40px;
    font-size: 24px;
    position: relative;
    color: #333;
    }
.entry-title:after{
    content: '';
    display: block;
    border-bottom: 1px solid #333;
    width: 200px;
}

.body {
    ::v-deep h2{
      padding: 4px 8px;
      font-size:24px;
      border-left: 8px solid #333;
  }
    ::v-deep img {
    height: auto;
    max-width: 70%;
  }
    ::v-deep h2:after{
    content: '';
    display: block;
    border-bottom: 1px solid #333;
    width: 300px;
  }
    ::v-deep h3{
    padding: 8px 0;
    font-size: 16px;
  }
  ::v-deep ol{
    margin: 16px;
    font-size: 16px;
  }
}
</style>

