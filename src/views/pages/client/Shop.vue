<template lang="">
  <div class="box-shop">
    <div class="shop-header-detail">
      <a-row type="flex" justify="left">
        <a-col :span="24" class="d-flex align-items-center">
          <div class="box-avatar">
            <img src="/src/assets/images/shop/avatar.png" alt="">
          </div>
          <div class="d-flex flex-column">
            <h2 class="name-shop">
              {{ shop.shop }}
            </h2>
            
            <a-row :gutter="[8, 8]">
              <a-col>
                <a-button type="primary" class="d-flex align-items-center">
                  <ShopOutlined />Hồ sơ
                </a-button>
              </a-col>
              <a-col>
                <a-button type="primary" class="d-flex align-items-center">
                  <PlusOutlined />Theo dõi
                </a-button>
              </a-col>
            </a-row>
          </div>
        </a-col>

        <a-col :span="24" class="mt-3">
          <a-row>
            <a-col :span="17" class="">
              <a-menu v-model:selectedKeys="current" mode="horizontal" class="custom-menu">
                <a-menu-item key="shop">
                  <a href="#">Cửa hàng</a>
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
            </a-col>
            <a-col :span="7" class="form-search">
              <a-space direction="vertical" class="w-100">
                <a-input-search
                  v-model:value="value"
                  placeholder="Tìm kiếm sản phẩm"
                  enter-button
                  @search="onSearch"
                />
              </a-space>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
    <!-- <div class="category-shop box-category">
      <Carousel :itemsToShow="10" snapAlign="start">
        <Slide v-for="(category, i) in category" :key="i">
          <div class="carousel__item">{{ category }}</div>
        </Slide>
    
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div> -->
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
    <div class="shop-body">
      <div class="mt-2">
        <a-row>
          <a-col v-for="product in products.dataSource" :key="product" style="width: 20%">
              <CardProduct :product="product" />
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>
<script>
import {PlusOutlined, ShopOutlined} from '@ant-design/icons-vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import CardProduct from '@/components/client/CardProduct.vue'
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex';
import { defineComponent, ref } from 'vue';

export default defineComponent ({
  data() {
    return {
      category: [
        'Điện thoại',
        'Máy tính',
        'Đồ ăn',
        'Điện thoại',
        'Máy tính',
        'Đồ ăn',
        'Điện thoại',
        'Máy tính',
        'Đồ ăn',
        'Điện thoại',
        'Máy tính',
        'Đồ ăn',
        'Điện thoại',
        'Máy tính',
        'Đồ ăn',
        'Điện thoại',
        'Máy tính',
        'Đồ ăn',
      ],
      banners: [
        'banner-sub--1.png',
        'banner-sub--2.png',
        'banner-sub--3.png',
      ]
    }
  },
  components: {
    PlusOutlined,
    ShopOutlined,
    Carousel,
    Slide,
    Navigation,
    CardProduct
  },
  async created() {
    this.getProductByShopId(this.$route.params.id)
    await this.getShop(this.$route.params.id)
  },
  computed: {
    ...mapGetters(['products']),
    ...mapState(['shop'])
  },
  methods: {
    ...mapActions(['getProductByShopId', 'getShop'])
  },
  setup() {
    const current = ref(['shop']);
    return {
      current,
    };
  },
})
</script>
<style lang="scss">
  .shop-header-detail {
    padding: 1rem;
    background: url('/src/assets/images/shop/banner-shop.jpg');
    background-size: cover;
    color: #fff;

    .box-avatar {
      width: 80px;
      height: 80px;
      overflow: hidden;
      border-radius: 50%;
      margin-right: 1rem;

      img {
        width: 100%;
      }
    }

    .name-shop {
      color: #fff;
    }

    .custom-menu {
      border: none;
      background: transparent;
      color: #fff;

      .ant-menu-title-content a{
        color: #fff;
        font-size: 16px;
      }

      .ant-menu-horizontal > .ant-menu-item-selected::after {
        background: #fff !important;
      }
      
      .ant-menu-horizontal > .ant-menu-item:hover::after {
        background: #fff !important;
      }
    }

    .form-search {
      .ant-input {
        height: 40px;
        width: 100%;
      }

      .ant-btn {
        height: 40px;
        width: 50px;
      }
    }
  }

  .category-shop {
    background-color: #fff;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 1px;
      height: 100%;
      background: #dbdbdb;
      top: 0;
      right: 0;
      z-index: 0;
    }

    .carousel__track {
      height: 40px;

      .carousel__slide {
        background: #dbdbdb;
      }

      .carousel__slide.carousel__slide--visible {
        border-right: 1px solid #fff;
      }
      .carousel__item {
        width: 100%;
        font-weight: 500;
        font-size: 16px;
        cursor: pointer;
      }
    }

    .carousel__prev,
    .carousel__next {
      border: 4px solid #efefef;
      width: 18px;
      height: 18px;
      z-index: 1;
    }

    .carousel__prev {
      left: -22px;
    }
    .carousel__next {
      right: -22px;
    }
  }
</style>