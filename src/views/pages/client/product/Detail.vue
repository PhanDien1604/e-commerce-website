<template lang="">
  <div class="box-detail">
    <div class="bg-light rounded">
      <a-row>
        <a-col :span="9" class="box-image">
          <Carousel id="gallery" :items-to-show="1" :wrap-around="true" v-model="currentSlide" >
            <Slide v-for="(image, i) in images" :key="i">
              <div class="carousel__item carousel__item--main">
                <img :src="'/src/assets/images/products/' + image" alt="">
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
            <Slide v-for="(image, i) in images" :key="i">
              <div class="carousel__item" @click="slideTo(i)">
                <div class="box-img">
                  <img :src="'/src/assets/images/products/' + image" alt="">
                </div>
              </div>
            </Slide>
          </Carousel>
        </a-col>
        <a-col :span="15" class="box-content">
          <h1 class="title">
            Loa Nghe Nhạc Bluetooth Hỗ Trợ Khe Cắm Thẻ Nhớ, USB - Hàng Chính Hãng
          </h1>
  
          <a-row>
            <a-col :span="16" class="left">
              <div class="box-price">
                <span class="price">
                  274.000 <span>₫</span>
                  <span class="price-discount">500.000 <span>₫</span></span>
                  <span class="price-discount--percent">-45%</span>
                </span>
              </div>
  
              <div class="my-3 custom-hr"></div>
  
              <div class="delivery-address">
                Giao đến: <span class="address">Mộ lao, Hà Đông, Hà Nội</span> - <a href="#">Đổi địa chỉ</a>
              </div>
  
              <div class="my-3 custom-hr"></div>
  
              <div class="box-amount">
                <h3>Số lượng</h3>
  
                <div class="amount">
                  <div class="minus" @click="minusAmount" :class="{disableBtnAmount: disableMinus}"><MinusOutlined /></div>
                  <input type="text" :value="amount" @change="changeAmount">
                  <div class="plus" @click="plusAmount" :class="{disableBtnAmount: disablePlus}"><PlusOutlined /></div>
                </div>
              </div>
  
              <div class="box-btn">
                <a-row>
                  <a-col :span="12">
                    <a-button type="primary" class="btn-buy">Mua hàng</a-button>
                  </a-col>
                  <a-col :span="12">
                    <a-button type="primary" class="btn-add-cart">Thêm vào giỏ hàng</a-button>
                  </a-col>
                </a-row>
              </div>
            </a-col>
            <a-col :span="8" class="right">
              <div class="shop">
                Shop
              </div>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
    
    <div class="similar-product bg-light mt-3 p-3 rounded">
      <h2>Sản phẩm tương tự</h2>

      <SimilarProduct />
    </div>

    <div class="describe-product bg-light mt-3 p-3 rounded">
      <h2>Mô tả sản phẩm</h2>

      <DescribeProduct />
    </div>
  </div>
</template>
<script>
import {PlusOutlined, MinusOutlined} from '@ant-design/icons-vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import SimilarProduct from '@/components/client/SimilarProduct.vue'
import DescribeProduct from '@/components/client/DescribeProduct.vue'

export default {
  created() {
    this.checkAmount()
  },
  data() {
    return {
      amount: 1,
      disablePlus: false,
      amountProduct: 10,
      disableMinus: false,
      currentSlide: 0,
      images: [
        'product-10.jpg',
        'product-2.jpg',
        'product-3.jpg'
      ]
    }
  },
  components: {
    PlusOutlined,
    MinusOutlined,
    Carousel,
    Slide,
    Navigation,
    SimilarProduct,
    DescribeProduct
  },
  methods: {
    changeAmount(e) {
      if(e.target.value > 0 && e.target.value <= this.amountProduct) {
        this.amount = e.target.value
      } else {
        if(e.target.value <= 0) {
          this.amount = 1
          e.target.value = 1
        }

        if(e.target.value > this.amountProduct) {
          this.amount = this.amountProduct
          e.target.value = this.amountProduct
        }
      }
    },
    minusAmount() {
      if(this.amount > 1) {
        this.amount--
      }

      this.checkAmount()
    },
    plusAmount() {
      if(this.amount < this.amountProduct) {
        this.amount++
      }
      this.checkAmount()
    },
    checkAmount() {
      if(this.amount == 1) {
        this.disableMinus = true
      } else {
        this.disableMinus = false
      }

      if(this.amount == this.amountProduct) {
        this.disablePlus = true
      } else {
        this.disablePlus = false
      }
    },
    slideTo(val) {
      this.currentSlide = val
    },
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

      .custom-hr {
        background-color: #f1f1f1;
        height: 0.5px;
      }

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
        }

        .box-amount {
          h3 {
            font-size: 18px;
          }
          .amount {
            display: flex;

            .plus, .minus {
              width: 34px;
              height: 34px;
              border: 1px solid #f1f1f1;
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
            }

            .minus {
              border-top-left-radius: 4px;
              border-bottom-left-radius: 4px;
            }

            .disableBtnAmount {
              cursor: default;
              color: #bbbbbb;
            }

            .plus {
              border-top-right-radius: 4px;
              border-bottom-right-radius: 4px;
            }
            
            input {
              width: 50px;
              height: 34px;
              border: none;
              border-top: 1px solid #f1f1f1;
              border-bottom: 1px solid #f1f1f1;
              text-align: center;
              outline: none;
            }
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
  }
</style>