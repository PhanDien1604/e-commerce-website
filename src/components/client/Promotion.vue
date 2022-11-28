<template lang="">
  <div class="box-promotion bg-light rounded">
    <div class="d-flex justify-content-between">
      <div class="title">Khuyến Mãi</div>
      <div class="note">Có thể chọn 2</div>
    </div>

    <Voucher :actionBtn="'Xóa'" />
    <div>
      <div class="select-promotion mt-2" @click="showModal">
        Chọn hoặc nhập Khuyến mãi khác
      </div>
      <a-modal v-model:visible="visible" title="Chọn mã khuyến mại" @ok="handleOk">
        <Voucher :actionBtn="'Chọn'" />
      </a-modal>
    </div>
    
  </div>
</template>
<script>
import Voucher from '@/components/client/Voucher.vue'
export default {
  data() {
    return {
      visible: false
    }
  },
  components: {
    Voucher
  },
  methods: {
    showModal() {
      this.visible = true
    },
    handleOk () {
      this.visible = false
    }
  }
}
</script>
<style lang="scss" scoped>
  .box-promotion {
    padding: 1rem;

    .title {
      font-size: 16px;
    }

    .note {
      color: #1890ff;
    }

    .select-promotion {
      color: #1890ff;
      cursor: pointer;
    }

  }
</style>