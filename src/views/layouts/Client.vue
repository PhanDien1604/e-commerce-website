<template>
  <div class="wrapper">
    <Header/>
    <div class="container">
      <Slider />
      <router-view/>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/client/blocks/Header.vue'
import Footer from '@/components/client/blocks/Footer.vue'
import Slider from '@/components/client/blocks/Slider.vue'

export default {
  components: {
    Header,
    Footer,
    Slider,
  }
}
</script>
<style lang="">
  
</style>