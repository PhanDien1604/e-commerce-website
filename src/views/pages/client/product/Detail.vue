<template lang="">
  <div class="box-detail">
    <div class="bg-light rounded">
      <a-row>
        <a-col :span="9" class="box-image">
          <Carousel id="gallery" :items-to-show="1" :wrap-around="true" v-model="currentSlide" >
            <Slide v-for="(image, i) in product.images" :key="i">
              <div class="carousel__item carousel__item--main">
                <img :src="'/src/assets/images/products/' + image.path" alt="">
              </div>
            </Slide>
          </Carousel>
          <Carousel
            id="thumbnails"
            :itemsToShow="3.95"
            :wrapAround="true"
            :transition="500"
            v-model="currentSlide"
            ref="carousel"
            class="image-product-sub"
          >
            <Slide v-for="(image, i) in product.images" :key="i">
              <div class="carousel__item" @click="slideTo(i)">
                <div class="box-img">
                  <img :src="'/src/assets/images/products/' + image.path" alt="">
                </div>
              </div>
            </Slide>
          </Carousel>
        </a-col>
        <a-col :span="15" class="box-content">
          <h3 class="title">
            {{ product.title }}
          </h3>
  
          <a-row>
            <a-col :span="16" class="left">
              <div class="box-price">
                <span class="price">
                  {{ product.price }} <span>₫</span>
                  <span class="price-discount">500.000 <span>₫</span></span>
                  <span class="price-discount--percent">-45%</span>
                </span>
              </div>
  
              <div class="my-3 custom-hr"></div>
  
              <div class="delivery-address">
                Giao đến: <span class="address">Mộ lao, Hà Đông, Hà Nội</span> - <span class="change-address" @click="setVisibleChangeAddress(true)">Đổi địa chỉ</span>
                <ChangeAddress />
              </div>
  
              <div class="my-3 custom-hr"></div>
  
              <div class="box-amount">
                <h3>Số lượng</h3>
  
                <div class="amount">
                  <div class="minus" @click="minusAmount(product)" :class="{disable: product.minus}"><MinusOutlined /></div>
                  <input type="text" v-model="product.amount" @change="changeAmount(product)">
                  <div class="plus" @click="plusAmount(product)" :class="{disable: product.plus}"><PlusOutlined /></div>
                </div>
              </div>
  
              <div class="box-btn">
                <a-row>
                  <a-col :span="12">
                    <a-button type="primary" class="btn-buy">Mua hàng</a-button>
                  </a-col>
                  <a-col :span="12">
                    <a-button type="primary" class="btn-add-cart" @click="addCartUser">Thêm vào giỏ hàng</a-button>
                  </a-col>
                </a-row>
              </div>
            </a-col>
            <a-col :span="8" class="right">
              <div class="box-shop">
                <div class="shop-header">
                  <div class="box-avatar">
                    <img src="/src/assets/images/shop/avatar.png" alt="">
                  </div>
                  <h4 class="name-shop text-ellipsis">
                    {{ shop }}
                  </h4>
                </div>
                <div class="shop-slider">
                  <a-row :gutter="[8,8]">
                    <a-col :span="12">
                      <router-link :to="{name: 'shop', params: {id: idShop}}">
                        <a-button type="primary" ghost class="w-100 d-flex align-items-center" >
                            <ShopOutlined />
                            Xem shop
                        </a-button>
                    </router-link>
                    </a-col>
                    <a-col :span="12">
                      <a-button type="primary" ghost class="w-100 d-flex align-items-center">
                        <PlusOutlined />
                        Theo dõi
                      </a-button>
                    </a-col>
                  </a-row>
                </div>
                <div class="custom-hr"></div>
                <div class="shop-body">
                  Thông tin shop
                </div>
              </div>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
    
    <div class="similar-product bg-light mt-3 p-3 rounded">
      <h4>Sản phẩm tương tự</h4>

      <SimilarProduct />
    </div>

    <div class="describe-product bg-light mt-3 p-3 rounded">
      <h4>Mô tả sản phẩm</h4>

      <DescribeProduct :text="product.description"/>
    </div>
  </div>
</template>
<script>
import {PlusOutlined, MinusOutlined, ShopOutlined} from '@ant-design/icons-vue';
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import SimilarProduct from '@/components/client/SimilarProduct.vue'
import DescribeProduct from '@/components/client/DescribeProduct.vue'
import ChangeAddress from '@/components/client/ChangeAddress.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  async created() {
    await this.getProduct(this.$route.params.id)
    this.shop = this.product.seller.shop
    this.idShop = this.product.seller.id
  },
  data() {
    return {
      currentSlide: 0,
      images: [
        'product-10.jpg',
        'product-2.jpg',
        'product-3.jpg'
      ],
      shop: '',
      idShop: 0
    }
  },
  components: {
    PlusOutlined,
    MinusOutlined,
    Carousel,
    Slide,
    Navigation,
    SimilarProduct,
    DescribeProduct,
    ShopOutlined,
    ChangeAddress
  },
  computed: {
    ...mapGetters(['disablePlus', 'disableMinus', 'product'])
  },
  methods: {
    ...mapActions(['minusAmount', 'plusAmount', 'checkAmount', 'changeAmount', 'getProduct', 'addCart']),
    ...mapMutations(['setVisibleChangeAddress']),
    slideTo(val) {
        this.currentSlide = val
    },
    addCartUser() {
      var product = {
        product_id: Number(this.$route.params.id),
        quantity: this.product.amount
      }
      console.log(product)
      this.addCart(product)
    }
  }
}
</script>
<style lang="scss">
  .box-detail {
    margin: 1.5rem 0;
    border-radius: 4px;

    .box-image {
      width: 100%;
      padding: 1rem;

      img {
        width: 100%;
      }

      .carousel__item--main {
        width: 100%;
        height: 444px;
        background: red;
        overflow: hidden;

        img {
          width: 100%;
        }
      }

      .image-product-sub {
        margin-top: 1rem;

        .carousel__item {
          padding: 0 4px;

          .box-img {
            width: 100%;
            height: 70px;
            overflow: hidden;
            cursor: pointer;

            img {
              width: 100%;
            }
          }
        }

        .carousel__track {
          transform-style: preserve-3d;
        }
        
        .carousel__slide--sliding {
          transition: 0.5s;
        }
        
        .carousel__slide {
          opacity: 0.9;
          transform: rotateY(-20deg) scale(0.9);
        }
        
        .carousel__slide--active ~ .carousel__slide {
          transform: rotateY(20deg) scale(0.9);
        }
        
        .carousel__slide--prev {
          opacity: 1;
          transform: rotateY(-10deg) scale(0.95);
        }
        
        .carousel__slide--next {
          opacity: 1;
          transform: rotateY(10deg) scale(0.95);
        }
        
        .carousel__slide--active {
          opacity: 1;
          transform: rotateY(0) scale(1.1);
        }
      }
    }

    .box-content {
      padding: 1rem;
      border-left: 1px solid #f1f1f1;

      .left {
        padding-right: 1rem;
        .box-price {
          background-color: #fafafa;
          padding: 1rem;
          border-radius: 4px;
  
          .price {
            font-size: 36px;
            font-weight: 500;
            color: red;
          }

          .price-discount {
            font-size: 16px;
            color: #808089;
            text-decoration: line-through;
            margin-left: 8px;
          }

          .price-discount--percent {
            font-size: 16px;
            margin-left: 8px;
          }
        }

        .delivery-address {
          font-size: 16px;

          span {
            font-weight: 700;
            text-decoration: underline;
          }
          a {
            font-weight: 600;
          }

          .change-address {
            color: #1890ff;
            cursor: pointer;
          }
        }

        .box-amount {
          h3 {
            font-size: 18px;
          }
        }

        .box-btn {
          margin-top: 1rem;
          .ant-row {
            margin: 0 -8px;
          }

          .ant-col{
            padding: 0 8px;
          }

          .ant-btn {
            width: 100%;
            height: 60px;
            font-size: 18px;
          }
          .btn-buy {
            background-color: red;
            border: 1px solid red;
          }
        }
      }
    }

    .box-shop {
      border: 1px solid #f1f1f1;
      border-radius: 4px;

      .shop-header {
        display: flex;
        align-items: center;
        margin-bottom: 0.75rem;
        padding: 1rem;
        padding-bottom: 0;

        .box-avatar {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 8px;

          img {
            width: 100%;
          }
        }

        .name-shop {
          margin-bottom: 0;
          display: block;
          width: calc(100% - 53px);
        }
      }

      .shop-slider {
        margin: 16px 0;
        padding: 0 1rem;
      }

      .shop-body {
        padding: 1rem;
        border-radius: 4px;
      }
    }
  }
</style>