<template>
    <footer class="footer">
    <Sns />
     <p class="copy">kawa</p>
    </footer>
</template> 

 <script>
 import Sns from '@/components/Sns.vue'

 export default {
   components: {
       Sns,
    },
   }
 </script>
<style lang="scss" scoped>
.footer{
    background: #333;
}
.copy{
    padding: 16px;
    font-size: 14px;
    color: #fff;
    text-align: center;
}
</style>