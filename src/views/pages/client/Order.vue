<template lang="">
  <div class="box-payment mt-4">
    <h4>Đơn hàng</h4>

    <a-steps :current="current" size="medium" class="mt-4">
      <a-step title="Chờ xác nhận" @click="setStatus('pending')" />
      <a-step title="Chờ lấy hàng"  @click="setStatus('accept')"/>
      <a-step title="Đang giao"  @click="setStatus('shipping')"/>
      <a-step title="Giao hàng thành công"  @click="setStatus('done')"/>
    </a-steps>

    <a-row v-if="current === 1" :gutter="[16, 16]" class="bg-light rounded-3 p-4 mt-4" v-for="(order, i) in orderFilterAccept" :key="i">
      <a-col :span="18">
        <div class="cart">
          <h5>Sản phẩm</h5>
          <div class="cart-shop p-4 border rounded-3 mb-5 mt-5">
            <a-row class="cart-item position-relative">
              <a-col :span="24" class="mt-4" v-for="(orderdetail, i) in order.orderdetails" :key="i">
                <a-row class="product-item">
                  <a-col :span="2">
                      <router-link :to="{name: 'detailProduct', params: {id: orderdetail.id}}">
                        <div class="d-flex align-items-center">
                          <div class="img-product">
                            <img src="/src/assets/images/products/product-10.jpg" alt="">
                          </div>
                        </div>
                      </router-link>
                  </a-col>
                  <a-col :span="10" class="pe-3">
                    <div class="name-product font-size-18 text-ellipsis w-100">
                      {{ orderdetail.product.title }}
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="amount font-size-16">
                          SL: {{ orderdetail.quantity }}
                        </div>
                        <div class="price fw-bold font-size-16">
                          {{ orderdetail.quantity * orderdetail.product.price }} ₫
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
      </a-col>
      <a-col :span="6" class="ps-3">
        <h5>Thông tin</h5>

        <div class="font-size-18 mt-4">
          <span class="fw-bold">Địa điểm nhận hàng: </span><span>{{ order.payment.shipment.address }}</span> <br>
          <span class="fw-bold">Hình thức thanh toán </span><span>{{ order.payment.method }}</span>
        </div>

        <div class="d-flex justify-content-between mt-3 font-size-18">
          <div class="fw-bold">Giảm giá</div>
          <div class="fw-bold">0<span>đ</span></div>
        </div>
        <div class="d-flex justify-content-between mt-3 font-size-18">
          <div class="fw-bold">Ship</div>
          <div class="fw-bold">{{ order.payment.shipment.cost }}<span>đ</span></div>
        </div>
        <div class="d-flex justify-content-between font-size-18">
          <div class="fw-bold">Tổng tiền</div>
          <div class="fw-bold">{{ order.totalPrice + order.payment.shipment.cost }}<span>đ</span></div>
        </div>
      </a-col>
    </a-row>

    <a-row  v-if="current === 0" :gutter="[16, 16]" class="bg-light rounded-3 p-4 mt-4" v-for="(order, i) in orderFilterPending" :key="i">
      <a-col :span="18">
        <div class="cart">
          <h5>Sản phẩm</h5>
          <div class="cart-shop p-4 border rounded-3 mb-5 mt-5">
            <a-row class="cart-item position-relative">
              <a-col :span="24" class="mt-4" v-for="(orderdetail, i) in order.orderdetails" :key="i">
                <a-row class="product-item">
                  <a-col :span="2">
                      <router-link :to="{name: 'detailProduct', params: {id: orderdetail.id}}">
                        <div class="d-flex align-items-center">
                          <div class="img-product">
                            <img src="/src/assets/images/products/product-10.jpg" alt="">
                          </div>
                        </div>
                      </router-link>
                  </a-col>
                  <a-col :span="10" class="pe-3">
                    <div class="name-product font-size-18 text-ellipsis w-100">
                      {{ orderdetail.product.title }}
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="amount font-size-16">
                          SL: {{ orderdetail.quantity }}
                        </div>
                        <div class="price fw-bold font-size-16">
                          {{ orderdetail.quantity * orderdetail.product.price }} ₫
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
      </a-col>
      <a-col :span="6" class="ps-3">
        <h5>Thông tin</h5>

        <div class="font-size-18 mt-4">
          <span class="fw-bold">Địa điểm nhận hàng: </span><span>{{ order.payment.shipment.address }}</span> <br>
          <span class="fw-bold">Hình thức thanh toán </span><span>{{ order.payment.method }}</span>
        </div>

        <div class="d-flex justify-content-between mt-3 font-size-18">
          <div class="fw-bold">Giảm giá</div>
          <div class="fw-bold">0<span>đ</span></div>
        </div>
        <div class="d-flex justify-content-between mt-3 font-size-18">
          <div class="fw-bold">Ship</div>
          <div class="fw-bold">{{ order.payment.shipment.cost }}<span>đ</span></div>
        </div>
        <div class="d-flex justify-content-between font-size-18">
          <div class="fw-bold">Tổng tiền</div>
          <div class="fw-bold">{{ order.totalPrice + order.payment.shipment.cost }}<span>đ</span></div>
        </div>
      </a-col>
    </a-row>

    <a-row  v-if="current === 2" :gutter="[16, 16]" class="bg-light rounded-3 p-4 mt-4" v-for="(order, i) in orderFilterShipping" :key="i">
      <a-col :span="18">
        <div class="cart">
          <h5>Sản phẩm</h5>
          <div class="cart-shop p-4 border rounded-3 mb-5 mt-5">
            <a-row class="cart-item position-relative">
              <a-col :span="24" class="mt-4" v-for="(orderdetail, i) in order.orderdetails" :key="i">
                <a-row class="product-item">
                  <a-col :span="2">
                      <router-link :to="{name: 'detailProduct', params: {id: orderdetail.id}}">
                        <div class="d-flex align-items-center">
                          <div class="img-product">
                            <img src="/src/assets/images/products/product-10.jpg" alt="">
                          </div>
                        </div>
                      </router-link>
                  </a-col>
                  <a-col :span="10" class="pe-3">
                    <div class="name-product font-size-18 text-ellipsis w-100">
                      {{ orderdetail.product.title }}
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="amount font-size-16">
                          SL: {{ orderdetail.quantity }}
                        </div>
                        <div class="price fw-bold font-size-16">
                          {{ orderdetail.quantity * orderdetail.product.price }} ₫
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
      </a-col>
      <a-col :span="6" class="ps-3">
        <h5>Thông tin</h5>

        <div class="font-size-18 mt-4">
          <span class="fw-bold">Địa điểm nhận hàng: </span><span>{{ order.payment.shipment.address }}</span> <br>
          <span class="fw-bold">Hình thức thanh toán </span><span>{{ order.payment.method }}</span>
        </div>

        <div class="d-flex justify-content-between mt-3 font-size-18">
          <div class="fw-bold">Giảm giá</div>
          <div class="fw-bold">0<span>đ</span></div>
        </div>
        <div class="d-flex justify-content-between mt-3 font-size-18">
          <div class="fw-bold">Ship</div>
          <div class="fw-bold">{{ order.payment.shipment.cost }}<span>đ</span></div>
        </div>
        <div class="d-flex justify-content-between font-size-18">
          <div class="fw-bold">Tổng tiền</div>
          <div class="fw-bold">{{ order.totalPrice + order.payment.shipment.cost }}<span>đ</span></div>
        </div>
      </a-col>
    </a-row>

    <a-row  v-if="current === 3" :gutter="[16, 16]" class="bg-light rounded-3 p-4 mt-4" v-for="(order, i) in orderFilterDone" :key="i">
      <a-col :span="18">
        <div class="cart">
          <h5>Sản phẩm</h5>
          <div class="cart-shop p-4 border rounded-3 mb-5 mt-5">
            <a-row class="cart-item position-relative">
              <a-col :span="24" class="mt-4" v-for="(orderdetail, i) in order.orderdetails" :key="i">
                <a-row class="product-item">
                  <a-col :span="2">
                      <router-link :to="{name: 'detailProduct', params: {id: orderdetail.id}}">
                        <div class="d-flex align-items-center">
                          <div class="img-product">
                            <img src="/src/assets/images/products/product-10.jpg" alt="">
                          </div>
                        </div>
                      </router-link>
                  </a-col>
                  <a-col :span="10" class="pe-3">
                    <div class="name-product font-size-18 text-ellipsis w-100">
                      {{ orderdetail.product.title }}
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="amount font-size-16">
                          SL: {{ orderdetail.quantity }}
                        </div>
                        <div class="price fw-bold font-size-16">
                          {{ orderdetail.quantity * orderdetail.product.price }} ₫
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
      </a-col>
      <a-col :span="6" class="ps-3">
        <h5>Thông tin</h5>

        <div class="font-size-18 mt-4">
          <span class="fw-bold">Địa điểm nhận hàng: </span><span>{{ order.payment.shipment.address }}</span> <br>
          <span class="fw-bold">Hình thức thanh toán </span><span>{{ order.payment.method }}</span>
        </div>

        <div class="d-flex justify-content-between mt-3 font-size-18">
          <div class="fw-bold">Giảm giá</div>
          <div class="fw-bold">0<span>đ</span></div>
        </div>
        <div class="d-flex justify-content-between mt-3 font-size-18">
          <div class="fw-bold">Ship</div>
          <div class="fw-bold">{{ order.payment.shipment.cost }}<span>đ</span></div>
        </div>
        <div class="d-flex justify-content-between font-size-18">
          <div class="fw-bold">Tổng tiền</div>
          <div class="fw-bold">{{ order.totalPrice + order.payment.shipment.cost }}<span>đ</span></div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import {DeleteOutlined, ShopOutlined, PlusOutlined, MinusOutlined} from '@ant-design/icons-vue'
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import PromotionVue from '@/components/client/Promotion.vue'
import AddressVue from '@/components/client/Address.vue'
import SelectPaymentVue from '@/components/client/SelectPayment.vue'
import { isSet } from '@vue/shared'

export default {
  async created() {
    await this.getOrder(1)
    if(this.order['accept']) {
      this.orderFilterAccept=this.order['accept']
      this.customData(this.orderFilterAccept)
    }
    if(this.order['pending']) {
      this.orderFilterPending=this.order['pending']
      console.log(this.order['pending'])
      this.customData(this.orderFilterPending)
    }
    if(this.order['shipping']) {
      this.orderFilterShipping=this.order['shipping']
      this.customData(this.orderFilterShipping)
    }
    if(this.order['done']) {
      this.orderFilterDone=this.order['done']
      this.customData(this.orderFilterDone)
    }
  },
  data() {
    return {
      statusClick: true,
      statusCLickItem: true,
      current: 0,
      orderFilterAccept: {},
      orderFilterPending: [],
      orderFilterShipping: [],
      orderFilterDone: [],
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
    ...mapGetters(['amountProduct']),
    ...mapState(['order'])
  },
  methods: {
    ...mapActions(['minusAmount', 'plusAmount', 'checkAmount', 'changeAmount', 'onCheckAll', 'onCheckAllShop', 'onCheckAllItem', 'getOrder']),
    ...mapMutations(['setVisibleChangeAddress']),
    setStatus(value) {
      if(value === 'pending') {
        this.current = 0
      }else if(value === 'accept') {
        this.current = 1
      } else if(value === 'shipping') {
        this.current = 2
      } else {
        this.current = 3
      }
    },
    customData(orderFilter) {
      orderFilter.forEach(order => {
        var totalPrice = 0
        order.orderdetails.forEach(orderDetail => {
          totalPrice+=orderDetail.product.price*orderDetail.quantity
        })
        order.totalPrice = totalPrice
      });
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