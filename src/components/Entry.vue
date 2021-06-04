<template>
  <section class="entry">
    <h2 class="title"><router-link :to="'/entry/${id}'">{{title}}</router-link></h2>
    <figure>
      <img :src="image.url" :width="image.width" :height="image.height" />
    </figure>
    <div class="body" v-html="body">
    </div>
  </section>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  props: {
    title: String,
    image: Object,
    body: String
  },
  setup(props){
    const router = useRouter()

    return{
    }
  }
}
</script>
<style lang="scss" scoped>
.entry {
  padding-top: 8px;
  margin: 0 16px 16px;
  background-color: #f5f5f5;
}
.title {
  margin: 0 8px;
  padding: 8px 16px;
  background-color: rgba(0, 0, 0, 0.02);
  border-bottom: 2px solid #eee;
}
.body {
  padding: 16px;
}
</style>