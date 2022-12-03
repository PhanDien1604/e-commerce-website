<template>
  <div class="content">
    <Slider />
    <Category :categorise="categoriseList" />
    <Banner />
    <div class="list-product">
      <a-row>
        <a-col style="width: 20%" v-for="product in products.dataSource" :key="product" >
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

import { mapGetters, mapActions, mapMutations, mapState } from 'vuex';

export default {
  components: {
    CardProduct,
    Slider,
    Category,
    Banner
  },
  async created() {
    this.getDataSourceProducts()
    await this.getCategorise()
    for (let i = 0; i < this.categorise.length; i+=2) {
      var categoriseTwo = []
      categoriseTwo.push(this.categorise[i])
      if(this.categorise[i+1]) {
        categoriseTwo.push(this.categorise[i+1])
      }
      this.categoriseList.push(categoriseTwo)
    }
  },
  data() {
    return {
      categoriseList: []
    }
  },
  computed: {
    ...mapGetters(['products']),
    ...mapState(['categorise'])
  },
  methods: {
    ...mapActions(['getDataSourceProducts', 'getAllProducts', 'getCategorise'])
  }
}
</script>
<style>
.list-product {
  margin: 0 -2px;
} 
</style>