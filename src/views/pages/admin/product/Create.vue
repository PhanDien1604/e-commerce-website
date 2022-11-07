<template lang="">
  <a-layout-content>
    Create Product
  </a-layout-content>
</template>
<script>
import {mapGetters, mapMutations, mapActions} from 'vuex';

export default {
  created() {
    this.setSelectedKeys(['product'])
  },
  methods: {
    ...mapMutations(['setSelectedKeys'])
  }
}
</script>
<style>
.ant-layout-content {
  margin: calc(24px + 64px) 16px;
  padding: 24px;
  background-color: #fff;
  height: 2000px;
}
</style>