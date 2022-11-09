<template>
  <div class="wrapper">
    <Header/>
    <div class="container">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/client/blocks/Header.vue'
import Footer from '@/components/client/blocks/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  }
}
</script>
<style lang="">
  
</style>