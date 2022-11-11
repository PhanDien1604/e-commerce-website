<template lang="">
  <div class="group-product">
    <a-row>
      <a-col :span="4">
        <FilterProduct />
      </a-col>
      <a-col :span="20" class="ps-3">
        <div class="bg-light list-product">
          <h2>Nhóm sản phẩm</h2>

          <div class="box-slider">
            <Carousel snapAlign="start" :itemsToShow="2" :wrapAround="true" :autoplay="5000">
              <Slide v-for="(banner, i) in banners" :key="i">
                <div class="carousel__item">
                  <div class="box-img">
                    <img :src="'/src/assets/images/banners/' + banner" alt="">
                  </div>
                </div>
              </Slide>
          
              <template #addons>
                <Navigation />
                <Pagination />
              </template>
            </Carousel>
          </div>

          <div class="selected-filter-menu custom-menu-ant">
            <a-menu v-model:selectedKeys="current" mode="horizontal">
              <a-menu-item key="popular">
                <a href="#">Phổ biến</a>
              </a-menu-item>
              <a-menu-item key="selling">
                <a href="#">Bán chạy</a>
              </a-menu-item>
              <a-menu-item key="new">
                <a href="#">Hàng mới</a>
              </a-menu-item>
              <a-menu-item key="asc">
                <a href="#">Giá thấp đến cao</a>
              </a-menu-item>
              <a-menu-item key="desc">
                <a href="#">Giá cao đến thấp</a>
              </a-menu-item>
            </a-menu>
          </div>
        </div>

        <div class="mt-2">
          <a-row>
            <a-col v-for="product in products.dataSource" :key="product" :style="{width: '20%'}">
                <CardProduct :product="product" />
            </a-col>
          </a-row>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import FilterProduct from '@/components/client/FilterProduct.vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import CardProduct from '@/components/client/CardProduct.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  data() {
    return {
      banners: [
        'banner-sub--1.png',
        'banner-sub--2.png',
        'banner-sub--3.png',
      ]
    }
  },
  components: {
    FilterProduct,
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
  },
  setup() {
    const current = ref(['popular']);
    return {
      current,
    };
  },
})
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