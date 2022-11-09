<template>
  <div class="content">
    <Slider />
    <Category />
    <Banner />
    <div class="list-product">
      <a-row>
        <a-col :span="4" v-for="product in products.dataSource" :key="product" >
            <CardProduct :product="product" />
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
import Slider from '@/components/client/blocks/Slider.vue'
import CardProduct from '@/components/client/CardProduct.vue'
import Category from '@/components/client/Category.vue'
import Banner from '@/components/client/Banner.vue'

import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  components: {
    CardProduct,
    Slider,
    Category,
    Banner
  },
  created() {
    this.getDataSourceProducts()
  },
  computed: {
    ...mapGetters(['products'])
  },
  methods: {
    ...mapMutations(['setProduct']),
    ...mapActions(['getDataSourceProducts'])
  }
}
</script>
<style>
.list-product {
  margin: 0 -2px;
} 
</style>