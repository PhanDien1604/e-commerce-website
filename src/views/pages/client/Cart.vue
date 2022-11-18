<template lang="">
  <div class="box-cart mt-4">
    <h4>GIỎ HÀNG</h4>

    <a-row :gutter="[16, 16]">
      <a-col :span="18">
        <div class="cart">
          <a-row class="cart-header bg-light py-2 px-3 rounded">
            <a-col :span="10">
              <a-checkbox 
                v-model:checked="cart.checked" 
                class="me-3 checkAll"
                @change="onCheckAll"
              >
              </a-checkbox>
              <span>Tất cả sản phẩm</span>
            </a-col>
            <a-col :span="5">
              Đơn giá
            </a-col>
            <a-col :span="4">
              Số lượng
            </a-col>
            <a-col :span="4">
              Thành tiền
            </a-col>
            <a-col :span="1">
              <div class="d-flex align-items-center h-100 font-size-18 justify-content-end">
                <div class="btn-delete">
                  <DeleteOutlined />
                </div>
              </div>
            </a-col>
          </a-row>
          <div class="cart-body rounded">
            <div class="cart-shop bg-light p-3 mt-3" v-for="(shop, i) in cart.shops" :key="i">
              <a-row class="cart-item" :id="i">
                <a-col :span="24" class="mb-2">
                  <div class="name-shop">
                    <a-checkbox v-model:checked="shop.checked" @change="onCheckAllShop({shop, statusClick})" class="checked-shop me-3"></a-checkbox>
                    <router-link :to="{name: 'shop'}">
                      <img src="/src/assets/images/icons/icon-shop.png" class="icon-shop me-1">
                      <span>Tên Shop</span>
                    </router-link>
                  </div>
                </a-col>
                <a-col :span="24" class="mt-4" v-for="(product, i) in shop.products" :key="i">
                  <a-row class="product-item">
                    <a-col :span="10">
                      <div class="d-flex align-items-center">
                        <a-checkbox v-model:checked="product.checked" @change="onCheckAllItem({shop, product, statusCLickItem})" class="checked-item" :id="i"></a-checkbox>
                        <router-link :to="{name: 'detailProduct'}">
                          <div class="d-flex align-items-center">
                            <div class="img-product mx-3">
                              <img src="/src/assets/images/products/product-10.jpg" alt="">
                            </div>
                            <div class="name-product">
                              {{ product.name }}
                            </div>
                          </div>
                        </router-link>
                      </div>
                    </a-col>
                    <a-col :span="5">
                      <div class="d-flex align-items-center h-100 fw-bold">
                        <span class="price">{{ product.price }}</span><span>₫</span>
                      </div>
                    </a-col>
                    <a-col :span="4">
                      <div class="d-flex align-items-center h-100">
                        <div class="amount">
                          <div class="minus" @click="minusAmount(product)" :class="{disable: product.minus}"><MinusOutlined /></div>
                          <input type="text" v-model="product.amount" @change="changeAmount(product)">
                          <div class="plus" @click="plusAmount(product)" :class="{disable: product.plus}"><PlusOutlined /></div>
                        </div>
                      </div>
                    </a-col>
                    <a-col :span="4">
                      <div class="d-flex align-items-center h-100">
                        {{ product.amount * product.price }}
                      </div>
                    </a-col>
                    <a-col :span="1">
                      <div class="d-flex align-items-center h-100 font-size-18 justify-content-end">
                        <div class="btn-delete">
                          <DeleteOutlined />
                        </div>
                      </div>
                    </a-col>
                  </a-row>
                </a-col>
              </a-row>
            </div>
          </div>
        </div>
      </a-col>
      <a-col :span="6">
        <AddressVue />
        <PromotionVue class="mt-3" />

        <div class="box-buy mt-3 bg-light rounded p-3 font-size-16">
          <div class="d-flex justify-content-between">
            <div>Tạm tính</div>
            <div>{{ cart.totalPrice }}<span>đ</span></div>
          </div>
          <div class="d-flex justify-content-between mt-2">
            <div>Giảm giá</div>
            <div>0<span>đ</span></div>
          </div>
          <div class="d-flex justify-content-between mt-2">
            <div class="fw-bold">Tổng tiền</div>
            <div class="fw-bold">{{ cart.totalPrice }}<span>đ</span></div>

            <div class="d-none">Vui lòng chọn sản phẩm</div>
          </div>

          <a-button type="primary" class="w-100 mt-3 btn-buy">
            Mua hàng
          </a-button>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import {DeleteOutlined, ShopOutlined, PlusOutlined, MinusOutlined} from '@ant-design/icons-vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import PromotionVue from '@/components/client/Promotion.vue'
import AddressVue from '@/components/client/Address.vue'

export default {
  created() {
    this.getCart()
  },
  data() {
    return {
      statusClick: true,
      statusCLickItem: true
    }
  },
  components: {
    DeleteOutlined,
    ShopOutlined,
    MinusOutlined,
    PlusOutlined,
    PromotionVue,
    AddressVue
  },
  computed: {
    ...mapGetters(['amountProduct', 'cart'])
  },
  methods: {
    ...mapActions(['minusAmount', 'plusAmount', 'checkAmount', 'changeAmount', 'onCheckAll', 'onCheckAllShop', 'onCheckAllItem', 'getCart']),
    ...mapMutations(['setVisibleChangeAddress']),
  }
}
</script>
<style lang="scss">
  .cart {
    .btn-delete {
      cursor: pointer;
    }

    .cart-header {
      font-size: 18px;
    }
    .cart-body {
      .icon-shop {
        width: 18px;
      }

      .name-shop a{
        font-size: 16px;
        font-weight: 500;
        color: black;
      }

      .img-product {
        width: 80px;
        height: 80px;
        overflow: hidden;
        background: rgb(236, 236, 236);

        img {
          object-fit: cover;
          width: 80px;
          height: 80px;
        }
      }

      .name-product {
        width: calc(100% - 60px);
        color: black;
        
        &:hover {
          color: #1890ff;
        }
      }
    }
  }

  .box-buy {
    .btn-buy {
      height: 40px;
      font-size: 16px;
      font-weight: 500;
    }
  }
</style>