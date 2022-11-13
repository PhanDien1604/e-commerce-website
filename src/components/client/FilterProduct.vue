<template lang="">
  <div class="filter-product bg-light">
    <div class="filter-item">
      <h5>Địa chỉ nhận hàng</h5>
      <span class="text-ellipsis address">Mộ Lao, Hà Đông, Hà Nội</span> <br>
      <div class="change-address" @click="setVisibleChangeAddress(true)">Đổi địa chỉ</div>
      <ChangeAddress />
    </div>

    <div class="custom-hr"></div>

    <div class="filter-item">
      <h5>Dịch vụ</h5>
      <div class="list-checkbox">
        <a-checkbox><img src="/src/assets/images/icons/icon-now.png" class="icon-service"> <br>Giao Siêu Tốc 2H</a-checkbox> <br>
        <a-checkbox><img src="/src/assets/images/icons/icon-astra.png" class="icon-service"> <br>Thưởng Thêm Astra</a-checkbox> <br>
        <a-checkbox><img src="/src/assets/images/icons/icon-freeship.png" class="icon-service"> <br>Không Giới Hạn</a-checkbox> <br>
      </div>
    </div>

    <div class="custom-hr"></div>

    <div class="filter-item">
      <h5>Nơi bán</h5>
      <div class="list-checkbox">
        <a-checkbox>Hồ Chí Minh</a-checkbox> <br>
        <a-checkbox>Hà Nội</a-checkbox> <br>
        <a-checkbox>Đà Nẵng</a-checkbox> <br>
        <a-checkbox>Ninh Bình</a-checkbox> <br>
        <a-checkbox>Hả Phòng</a-checkbox> <br>
      </div>
    </div>

    <div class="custom-hr"></div>

    <div class="filter-item">
      <h5>Giá</h5>
      <div class="list-checkbox">
        <span class="checked-price">Dưới 2.500.000</span>
        <span class="checked-price">2.500.000 -> 6.000.000</span>
        <span class="checked-price">6.000.000 -> 24.500.000</span>
        <span class="checked-price">Trên 24.500.000</span>
      </div>

      <div class="select-range-price mt-2">
        <h5>Chọn khoảng giá</h5>

        <div class="box-input">
          <input type="text" :value="priceFrom" placeholder="Giá từ" @change="changePriceFrom">
          <span>-</span>
          <input type="text" :value="priceTo" placeholder="Giá đến" @change="changePriceTo">
        </div>

        <a-button type="primary" ghost class="w-100 mt-2">Áp dụng</a-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import ChangeAddress from '@/components/client/ChangeAddress.vue'

export default {
  data() {
    return {
      priceFrom: 0,
      priceTo: 0
    }
  },
  components: {
    ChangeAddress,
  },
  methods: {
    changePriceFrom(e) {
      if(Number.isInteger(e.target.value) && e.target.value > 0) {
        this.priceFrom = e.target.value
      } else {
        this.priceFrom = '0'
      }
    },
    changePriceTo(e) {
      if(Number.isInteger(e.target.value) && e.target.value > 0) {
        this.priceTo = e.target.value
      } else {
        this.priceTo = '0'
      }
    },
    ...mapMutations(['setVisibleChangeAddress']),
  }
}
</script>
<style lang="scss">
  .filter-product {
    .address {
      text-decoration: underline;
    }
    .change-address {
      font-weight: 600;
      color: #1890ff;
      cursor: pointer;
    }
    .filter-item {
      padding: 1rem;

      h4 {
        color: #808089;
      }
    }

    .icon-service {
      height: 12px;
      margin-top: -8px;
    }

    .ant-checkbox-wrapper {
      margin-bottom: 8px;

      .ant-checkbox {
        margin-right: 0.5rem;
      }
    }

    .checked-price {
      background-color: #eeeeee;
      margin-bottom: 0.25rem;
      padding: 4px 16px;
      border-radius: 16px;
      display: inline-block;
      cursor: pointer;
    }

    .select-range-price {
      .box-input {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        input {
          width: 45%;
          border-radius: 4px;
          border: 1px solid #b8b8b8;
          outline: 0px;
          font-size: 13px;
          height: 30px;
          padding: 0 8px;
        }
        
        span {
        width: 7px;
        height: 1px;
        background-color: #9a9a9a;
        font-size: 0px;
        }
      }

      .ant-btn {
        border-radius: 4px;
      }
    }
  }
</style>