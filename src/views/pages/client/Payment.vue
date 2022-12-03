<template lang="">
  <div class="box-payment mt-4">
    <h4>THANH TOÁN</h4>

    <a-row :gutter="[16, 16]">
      <a-col :span="18">
        <div class="cart bg-light rounded-3 p-4">
          <h5>Sản phẩm</h5>

          <div class="cart-shop p-4 border rounded-3 mb-5 mt-5" v-for="(shop, i) in shops" :key="i">
            <a-row class="cart-item position-relative" :id="i">
              <div class="name-shop">
                <router-link :to="{name: 'shop', params: {id: shop.id}}">
                  <img src="/src/assets/images/icons/icon-shop.png" class="icon-shop me-1">
                  <span>{{ shop.title }}</span>
                </router-link>
              </div>
              <a-col :span="24" class="mt-4" v-for="(product, i) in shop.products" :key="i">
                <a-row class="product-item">
                  <a-col :span="2">
                      <router-link :to="{name: 'detailProduct',  params: {id: product.id}}">
                        <div class="d-flex align-items-center">
                          <div class="img-product">
                            <img src="/src/assets/images/products/product-10.jpg" alt="">
                          </div>
                          
                        </div>
                      </router-link>
                  </a-col>
                  <a-col :span="10" class="pe-3">
                    <div class="name-product font-size-18 text-ellipsis w-100">
                      {{ product.name }}
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="amount font-size-16">
                          SL: {{ product.amount }}
                        </div>
                        <div class="price fw-bold font-size-16">
                          {{ product.amount * product.price }} ₫
                        </div>
                    </div>
                  </a-col>
                  <a-col :span="12" class="border-start">
                    <div class="ps-3 font-size-16">
                      Đơn vị vận chuyển
                    </div>
                  </a-col>
                </a-row>
              </a-col>
            </a-row>
          </div>
        </div>

        <div class="bg-light">
          <SelectPaymentVue />
        </div>
      </a-col>
      <a-col :span="6">
        <AddressVue />
        <PromotionVue class="mt-3" />

        <div class="box-buy mt-3 bg-light rounded p-3 font-size-16">
          <div class="d-flex justify-content-between">
            <div>Tạm tính</div>
            <div>{{ totalPrice }}<span>đ</span></div>
          </div>
          <div class="d-flex justify-content-between mt-2">
            <div>Giảm giá</div>
            <div>0<span>đ</span></div>
          </div>
          <div class="d-flex justify-content-between mt-2">
            <div class="fw-bold">Tổng tiền</div>
            <div class="fw-bold">{{ totalPrice }}<span>đ</span></div>

            <div class="d-none">Vui lòng chọn sản phẩm</div>
          </div>

          <a-button type="primary" class="w-100 mt-3 btn-buy" @click="buy">
            Đặt hàng
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
import SelectPaymentVue from '@/components/client/SelectPayment.vue'

export default {
  async created() {
    this.shops = this.cart[0].shops
    var shops = []
    this.shops.forEach((shop) => {
      var products = shop.products.filter(product => product.checked === true);
      shop.products = products
      shops.push(shop)
    })

    shops = shops.filter((shop) => shop.products.length > 0)
    this.shops = shops

    this.shops.forEach((shop) => {
      shop.products.forEach((product) => {
        this.totalPrice+=product.price
      })
    })
    console.log(shops)
  },
  data() {
    return {
      statusClick: true,
      statusCLickItem: true,
      order: {},
      shops: [],
      totalPrice: 0
    }
  },
  components: {
    DeleteOutlined,
    ShopOutlined,
    MinusOutlined,
    PlusOutlined,
    PromotionVue,
    AddressVue,
    SelectPaymentVue
  },
  computed: {
    ...mapGetters(['amountProduct', 'cart'])
  },
  methods: {
    ...mapActions(['minusAmount', 'plusAmount', 'checkAmount', 'changeAmount', 'onCheckAll', 'onCheckAllShop', 'onCheckAllItem', 'addShipment', 'addPayment', 'addOrder']),
    ...mapMutations(['setVisibleChangeAddress']),
    async buy() {
      var dataShipment = {
        note: "day la note",
        cost: "12.7",
        method: "",
        address: "Ha noi"
      }
      var shipment = await this.addShipment(dataShipment)

      var dataPayment = {
          amount: "12.7",
          card: "",
          cvv: "",
          method: "thanh toan khi nhan hang", 
          shipment_id: shipment.id+''
      }
      var payment = await this.addPayment(dataPayment)
      console.log(payment)

      var dataOrder = {
          listcartId: "1,2", 
          payment_id: payment.id+''
      }
      await this.addOrder(dataOrder)
    }
  }
}
</script>
<style lang="scss">
.box-payment {
  .icon-shop {
    width: 18px;
  }

  .name-shop {
    padding: 0.5rem;
    border-radius: 12px;
    position: absolute;
    border: 1px solid #dee2e6;
    background: #f8f9fa;
    top: -46px;
    left: 0;

    a {
      color: black;
      font-size: 16px;
      font-weight: 500;
    }
  }

  .img-product {
    width: 60px;
    height: 60px;
    overflow: hidden;
    background: rgb(236, 236, 236);

    img {
      object-fit: cover;
      width: 60px;
      height: 60px;
    }
  }

  .name-product {
    cursor: pointer;
    
    &:hover {
      color: #1890ff;
    }
  }

  .box-buy {
    .btn-buy {
      height: 40px;
      font-size: 16px;
      font-weight: 500;
    }
  }
}
</style>