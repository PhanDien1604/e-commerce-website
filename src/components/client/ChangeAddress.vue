<template lang="">
  <a-modal 
    v-model:visible="visibleChangeAddress" 
    title="Địa chỉ giao hàng" 
    @ok="setVisibleChangeAddress(false)" 
    @cancel="setVisibleChangeAddress(false)"
    class="modal-change-address"
  >
    <a-radio-group v-model:value="value">
      <a-radio :value="1">Phường Mộ Lao, Quận Hà Đông, Hà Nội <span class="text-success">(Mặc định)</span></a-radio> <br>
      <a-radio :value="2">Phường Mỹ Đình, Quận Nam Từ Liêm, Hà Nội</a-radio> <br>
      <a-radio :value="0">
        Chọn khu vực giao hàng khác
      </a-radio>
    </a-radio-group>
    <div v-if="value === 0" class="form-input mt-1">
      <a-row class="mb-2">
        <a-col :span="1" :offset="1"></a-col>
        <a-col :span="10" class="font-size-16">Tỉnh/Thành phố</a-col>
        <a-col :span="10">
          <a-select
            ref="select"
            v-model:value="value1"
            @focus="focus"
            @change="handleChange"
            class="w-100"
          >
            <a-select-option value="1">Hà Nội</a-select-option>
            <a-select-option value="2">Ninh Bình</a-select-option>
            <a-select-option value="3">Thái Bình</a-select-option>
            <a-select-option value="4">Nam Định</a-select-option>
          </a-select>
        </a-col>
      </a-row>
      <a-row class="mb-2">
        <a-col :span="1" :offset="1"></a-col>
        <a-col :span="10" class="font-size-16">Quận/Huyện</a-col>
        <a-col :span="10">
          <a-select
            ref="select"
            v-model:value="value1"
            @focus="focus"
            @change="handleChange"
            class="w-100"
          >
            <a-select-option value="1">Hà Nội</a-select-option>
            <a-select-option value="2">Ninh Bình</a-select-option>
            <a-select-option value="3">Thái Bình</a-select-option>
            <a-select-option value="4">Nam Định</a-select-option>
          </a-select>
        </a-col>
      </a-row>
      <a-row class="mb-2">
        <a-col :span="1" :offset="1"></a-col>
        <a-col :span="10" class="font-size-16">Phường/Xã</a-col>
        <a-col :span="10">
          <a-select
            ref="select"
            v-model:value="value1"
            @focus="focus"
            @change="handleChange"
            class="w-100"
          >
            <a-select-option value="1">Hà Nội</a-select-option>
            <a-select-option value="2">Ninh Bình</a-select-option>
            <a-select-option value="3">Thái Bình</a-select-option>
            <a-select-option value="4">Nam Định</a-select-option>
          </a-select>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="1" :offset="1"></a-col>
        <a-col :span="10" class="font-size-16">Địa chỉ</a-col>
        <a-col :span="10">
          <a-input></a-input>
        </a-col>
      </a-row>
    </div>
  </a-modal>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default defineComponent ({
  computed: {
    ...mapGetters(['visibleChangeAddress'])
  },
  methods: {
    ...mapMutations(['setVisibleChangeAddress']),
  },
  setup() {
    const value = ref(1);
    return {
      value,
    };
  },
})
</script>
<style lang="scss">
  .modal-change-address {
    .ant-modal-title {
      font-size: 20px;
      color: rgb(255, 34, 71);
    }

    .ant-radio {
      top: 0;
    }
    .ant-radio-wrapper {
      align-items: center;
      margin-bottom: 8px;
      font-size: 16px;
    }

    .ant-radio-inner {
      width: 24px;
      height: 24px;
      border-width: 2px;
      position: relative;

      &::after {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        top: 6px;
        left: 6px;
      }
    }
  }
</style>