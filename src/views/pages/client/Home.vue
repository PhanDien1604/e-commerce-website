<template>
  <div class="content">
    <Slider />
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
import CardProduct from '@/components/client/CardProduct.vue'
import Slider from '@/components/client/blocks/Slider.vue'

import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  components: {
    CardProduct,
    Slider
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
  margin: 16px -2px;
} 
</style>