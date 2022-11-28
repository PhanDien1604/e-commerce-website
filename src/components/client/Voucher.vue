<template lang="">
  <div class="promotion">
    <div class="promotion-item">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286 60" class="coupon-bg">
        <g fill="none" fill-rule="evenodd">
          <g><g><g><g><g>
            <path fill="#FFF" d="M278 0c4.418 0 8 3.582 8 8v44c0 4.418-3.582 8-8 8H64.5c0-2.21-1.79-4-4-4s-4 1.79-4 4H8c-4.418 0-8-3.582-8-8V8c0-4.418 3.582-8 8-8h48.5c0 2.21 1.79 4 4 4s4-1.79 4-4H278z" transform="translate(-544 -2912) translate(80 2252) translate(0 460) translate(464) translate(0 200)"></path>
              <g stroke="#EEE" stroke-dasharray="2 4" stroke-linecap="square">
                <path d="M0.5 0L0.5 48" transform="translate(-544 -2912) translate(80 2252) translate(0 460) translate(464) translate(0 200) translate(60 8)"></path>
              </g>
          </g></g></g></g></g>
        </g>
      </svg>
      <div class="promotion-box">
        <div class="logo">
          <img src="@/assets/images/promotions/logo-1.jpg" alt="">
        </div>
        <div class="d-flex justify-content-between align-items-center p-2 w-100">
          <div class="promotion-info">
            Giảm 19K {{ actionBtn }}
          </div>
          <div class="btn-apply" @click="chooseVoucher">
            {{ actionBtn }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      countVoucherSelect: 0
    }
  },
  props: {
    actionBtn: String
  },
  methods: {
    chooseVoucher() {
      if(this.actionBtn === 'Chọn') {
        this.countVoucherSelect++
      } else {
        this.countVoucherSelect--
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.promotion {
      
  .promotion-item {
    margin-top: 8px;
    height: 60px;
    position: relative;

    .promotion-box {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      display: flex;
      width: 280px;
    }

    .logo {
      min-width: 60px;
      width: 60px;
      height: 60px;
      padding: 8px;

      img {
        width: 44px;
        height: 44px;
        object-fit: cover;
      }
    }
    .coupon-bg {
      height: 60px;
      filter: drop-shadow(rgba(0, 0, 0, 0.15) 0px 1px 3px);
    }

    .btn-apply {
      background: #1890ff;
      border-radius: 8px;
      width: 60px;
      height: 30px;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
}
</style>