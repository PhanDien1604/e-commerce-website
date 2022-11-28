<template lang="">
  <div class="p-4 pt-0">
    <h5>Chọn hình thức thanh toán</h5>

    <div>
      <a-radio-group v-model:value="value">
        <a-radio :value="1" class="mt-3"><span class="font-size-18">Thanh toán khi nhận hàng</span> <span class="text-success">(Mặc định)</span></a-radio> <br>
        <a-radio :value="2" class="mt-3"><span class="font-size-18">Thanh toán qua Momo</span></a-radio>
      </a-radio-group>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent ({
  setup() {
    const value = ref(1);
    return {
      value,
    };
  },
})
</script>
<style lang="">
    
</style>