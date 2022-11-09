<template lang="">
  <div class="slider-product">
    <Carousel :items-to-show="6" snapAlign="start">
        <Slide v-for="(product, i) in products.dataSource" :key="i">
            <CardProduct :product="product" />
        </Slide>
    
        <template #addons>
          <Navigation />
        </template>
    </Carousel>
  </div>
</template>
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { mapGetters, mapActions, mapMutations } from 'vuex';
import CardProduct from '@/components/client/CardProduct.vue'

export default {
  components: { 
    Carousel,
    Slide,
    Pagination,
    Navigation,
    CardProduct
  },
  created() {
    this.getDataSourceProducts()
  },
  computed: {
    ...mapGetters(['products'])
  },
  methods: {
    ...mapActions(['getDataSourceProducts'])
  }
}
</script>
<style lang="scss">

.slider-product {
    .carousel {
        text-align: left;
    }
}

</style>