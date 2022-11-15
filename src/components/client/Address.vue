<template lang="">
  <div class="box-address bg-light rounded">
    <div class="d-flex justify-content-between">
      <div class="title">Giao tới</div>
      <div class="change-address" @click="setVisibleChangeAddress(true)">Thay đổi</div>
      <ChangeAddress />
    </div>

    <div class="d-flex">
      <div class="name-user">Phan Điện</div>
      <div class="phone-user">0963865764</div>
    </div>
    <div class="address-user">SN 10, ngõ 1, đường 18M, Phường Mộ Lao, Quận Hà Đông, Hà Nội</div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
import ChangeAddress from './ChangeAddress.vue';
export default {
  components: {
    ChangeAddress
  },
  methods: {
    ...mapMutations(['setVisibleChangeAddress']),
  }
}
</script>
<style lang="scss" scoped>
  .box-address {
    padding: 1rem;
    .title {
      font-size: 18px;
    }

    .change-address {
      color: #1890ff;
      cursor: pointer;
    }

    .name-user {
      font-size: 16px;
      font-weight: 700;
      border-right: 1px solid #d8d8d8;
      padding-right: 8px;
      margin-right: 8px;
    }

    .phone-user {
      font-size: 16px;
      font-weight: 700;
    }

    .address-user {
      font-size: 16px;
      line-height: 18px;
      margin-top: 4px;
    }
  }
</style>