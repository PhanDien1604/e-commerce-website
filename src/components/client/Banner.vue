<template lang="">
  <div class="box-banner-sub">
    <a-row>
      <a-col :span="8">
        <div class="img-banner">
          <img src="@/assets/images/banners/banner-sub-1.png" alt="">
        </div>
      </a-col>
      <a-col :span="8">
        <div class="img-banner">
          <img src="@/assets/images/banners/banner-sub-2.png" alt="">
        </div>
      </a-col>
      <a-col :span="8">
        <div class="img-banner">
          <img src="@/assets/images/banners/banner-sub-3.png" alt="">
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .box-banner-sub {
      margin: 0.5rem 0;
      .ant-row {
        margin: 0 -1rem;
      }
      .ant-col {
        padding: 1rem;
      }
      .img-banner {
        width: 100%;
        overflow: hidden;
        border-radius: 20px;

        img {
          width: 100%;
        }
      }
    }
</style>