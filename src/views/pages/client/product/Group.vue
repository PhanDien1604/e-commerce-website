<template lang="">
  <div class="group-product">
    <a-row>
      <a-col :span="5">
        <FilterProduct />
      </a-col>
      <a-col :span="19" class="ps-3">
        <div class="bg-light list-product">
          Group
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import FilterProduct from '@/components/client/FilterProduct.vue'

export default {
  components: {
    FilterProduct
  }
}
</script>
<style lang="scss">
    .group-product {
      margin-top: 1.5rem;

      .list-product {
        padding: 16px;
        width: 100%;
      }
    }
</style>