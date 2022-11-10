<template lang="">
  <div class="group-product">
    <a-row>
      <a-col :span="4">
        <FilterProduct />
      </a-col>
      <a-col :span="20" class="ps-3">
        <div class="bg-light list-product">
          <h2>Nhóm sản phẩm</h2>

          <Carousel>
            <Slide v-for="slide in 10" :key="slide">
              <div class="carousel__item">{{ slide }}</div>
            </Slide>
        
            <template #addons>
              <Navigation />
              <Pagination />
            </template>
          </Carousel>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import FilterProduct from '@/components/client/FilterProduct.vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

export default {
  components: {
    FilterProduct
  }
}
</script>
<style lang="scss">
    .group-product {
      margin-top: 1.5rem;

      .list-product {
        padding: 16px;
        width: 100%;
      }
    }
</style>