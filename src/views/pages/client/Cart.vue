<template lang="">
  <div class="box-cart">
    <h4>GIỎ HÀNG</h4>

    <a-row :gutter="[16, 16]">
      <a-col :span="18">
        <div class="cart">
          <a-row class="cart-header bg-light py-2 px-3 rounded">
            <a-col :span="10">
              <a-checkbox 
                v-model:checked="checked" 
                class="me-3 checkAll"
                @change="onCheckAll"
              >
              </a-checkbox>
              {{ checked }}
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
            <div class="cart-shop bg-light p-3 mt-3" v-for="(shop, i) in shops" :key="i">
              <a-row class="cart-item" :id="i">
                <a-col :span="24" class="mb-2">
                  <div class="name-shop">
                    <a-checkbox @change="onCheckAllShop" class="checked-shop me-3"></a-checkbox>
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
                        <a-checkbox @change="onCheckAllItem" class="checked-item" :id="i"></a-checkbox>
                        <router-link :to="{name: 'detailProduct'}">
                          <div class="d-flex align-items-center">
                            <div class="img-product mx-3">
                              <img src="/src/assets/images/products/product-10.jpg" alt="">
                            </div>
                            <div class="name-product">
                              Tên sản phẩm Tên sản phẩm Tên 
                              Tên sản phẩm Tên sản phẩm Tên 
                            </div>
                          </div>
                        </router-link>
                      </div>
                    </a-col>
                    <a-col :span="5">
                      <div class="d-flex align-items-center h-100 fw-bold">
                        <span class="price">25.000.000</span><span>₫</span>
                      </div>
                    </a-col>
                    <a-col :span="4">
                      <div class="d-flex align-items-center h-100">
                        <div class="amount">
                          <div class="minus" @click="minusAmount"><MinusOutlined /></div>
                          <input type="text" v-model="product.amount" @change="changeAmount">
                          <div class="plus" @click="plusAmount"><PlusOutlined /></div>
                        </div>
                      </div>
                    </a-col>
                    <a-col :span="4"></a-col>
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
        <div class="box-address bg-light">
          <div class="d-flex justify-content-between">
            <div>Giao tới</div>
            <div class="change-address">Thay đổi</div>
          </div>

          <div class="d-flex">
            <div class="name-user">Phan Điện</div>
            <div class="phone-user">0963865764</div>
          </div>
          <div class="address-user">SN 10, ngõ 1, đường 18M, Phường Mộ Lao, Quận Hà Đông, Hà Nội</div>
        </div>

        <div class="box-promotion">
          <div class="d-flex justify-content-between">
            <div>Khuyến Mãi</div>
            <div>Có thể chọn 2</div>
          </div>

          <div class="select-promotion">
            Chọn hoặc nhập Khuyến mãi khác
          </div>
        </div>

        <div class="box-buy">
          <div class="d-flex justify-content-between">
            <div>Tạm tính</div>
            <div>0<span>đ</span></div>
          </div>
          <div class="d-flex justify-content-between">
            <div>Giảo giá</div>
            <div>0<span>đ</span></div>
          </div>
          <div class="d-flex justify-content-between">
            <div>Tổng tiền</div>
            <div>0<span>đ</span></div>

            <div class="d-none">Vui lòng chọn sản phẩm</div>
          </div>

          <a-button type="primary">
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

export default {
  data() {
    return {
      checked: false,
      shops: [
        {
          products: [
            {
              amount: 4
            },
            {
              amount: 6
            },
          ],
          countProduct: 0
        },
        {
          products: [
            {
              amount: 5
            },
            {
              amount: 3
            }
          ],
          countProduct: 0
        }
      ],
      countShop: 0,
      countProduct: 0,
      totalProduct: 4
    }
  },
  components: {
    DeleteOutlined,
    ShopOutlined,
    MinusOutlined,
    PlusOutlined
  },
  computed: {
    ...mapGetters(['amountProduct', 'disablePlus', 'disableMinus'])
  },
  methods: {
    ...mapActions(['minusAmount', 'plusAmount', 'checkAmount', 'changeAmount']),
    ...mapMutations(['setVisibleChangeAddress']),
    onCheckAll(e) {
      if(this.checked) {
        this.countShop = this.totalShop
        this.shops.forEach(shop => {
          shop.countProduct = shop.products.length
        });
      } else {
        this.countShop = 0
        this.shops.forEach(shop => {
          shop.countProduct = 0
        });
      }

      document.querySelectorAll('.cart-body .ant-checkbox-input').forEach(element => {
        if(this.checked) {
          element.checked = true
          element.parentElement.classList.add('ant-checkbox-checked')
        } else {
          element.checked = false
          element.parentElement.classList.remove('ant-checkbox-checked')
        }
      })
    },
    onCheckAllShop(e) {
      var cartItem = e.nativeEvent.target.closest('.cart-item')
      var idShop = cartItem.getAttribute('id')

      if(e.target.checked) {
        this.countShop++
        this.countProduct += this.shops[idShop].products.length - this.shops[idShop].countProduct
        this.shops[idShop].countProduct = this.shops[idShop].products.length
      } else {
        this.countShop--
        this.shops[idShop].countProduct = 0
        this.countProduct -= this.shops[idShop].products.length
      }

      if(this.countProduct === this.totalProduct) {
        this.checked = true
      } else {
        this.checked = false
      }

      cartItem.querySelectorAll('.ant-checkbox-input').forEach(element => {
        if(e.target.checked) {
          element.checked = true
          element.parentElement.classList.add('ant-checkbox-checked')
        } else {
          element.checked = false
          element.parentElement.classList.remove('ant-checkbox-checked')
        }
      })
    },
    onCheckAllItem(e) {
      var idProduct = e.nativeEvent.target.getAttribute('id')
      var idShop = e.nativeEvent.target.closest('.cart-item').getAttribute('id')
      var cartItem = e.nativeEvent.target.closest('.cart-item')
      if(e.target.checked) {
        this.shops[idShop].countProduct++
        e.target.checked = false
        e.nativeEvent.target.parentElement.classList.add('ant-checkbox-checked')
        this.countProduct++
      } else {
        this.shops[idShop].countProduct--
        e.target.checked = true
        e.nativeEvent.target.parentElement.classList.remove('ant-checkbox-checked')
        this.countProduct--
      }

      var inputCheckShop = cartItem.querySelector('.checked-shop .ant-checkbox-input')
      if(this.shops[idShop].countProduct === this.shops[idShop].products.length) {
        inputCheckShop.checked = true
        inputCheckShop.parentElement.classList.add('ant-checkbox-checked')
      } else {
        inputCheckShop.checked = false
        inputCheckShop.parentElement.classList.remove('ant-checkbox-checked')
      }

      if(this.countProduct === this.totalProduct) {
        this.checked = true
      } else {
        this.checked = false
      }
    }
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
</style>