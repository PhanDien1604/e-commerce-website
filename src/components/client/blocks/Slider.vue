<template lang="">
  <div class="box-carousel mt-3">
    <a-row>
      <a-col :span="16" class="pe-2">
        <Carousel :items-to-show="1" :autoplay="2000" :wrap-around="true">
          <Slide v-for="slide in banners" :key="slide">
            <div class="carousel__item">
              <img :src="'src/assets/images/banners/'+ slide" alt="">
            </div>
          </Slide>
      
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </carousel>
      </a-col>
      <a-col :span="8">
        <div class="banner-sub">
          <img src="src/assets/images/banners/banner-sub.png" alt="">
        </div>
      </a-col>
    </a-row>
    
  </div>
</template>
<script>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  data() {
    return {
      banners: [
        'banner-1.png',
        'banner-2.png',
        'banner-3.png',
        'banner-4.png',
      ]
    }
  },
  components: { 
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
}
</script>
<style lang="scss">

</style>