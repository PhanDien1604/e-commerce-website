<template lang="">
  <div class="card-product">
    
    <router-link :to="{name: 'detailProduct', params: {id: product.id} }">
      <a-card hoverable >
        <template #cover>
          <img alt="example" :src="'/src/assets/images/products/' + product.images[0].path" />
        </template>
        <a-card-meta>
          <template #title>
              {{ product.title }}
          </template>
          <template #description>
            <a-progress :percent="50" :show-info="false" />
            <span class="price">{{ product.price }} <span>₫</span> <span class="promotion">-5%</span></span>
            <div class="font-size-12 text-ellipsis-2 txt-promotion">
              {{ product.description }}
            </div>
          </template>
        </a-card-meta>
      </a-card>
    </router-link>
  </div>
</template>
<script>
export default {
  props: [
    'product'
  ],
}
</script>
<style lang="scss">
.card-product {
  padding: 1px;

  .price {
    color: red;
    font-weight: 600;
    font-size: 18px;
  }
  
  .promotion {
    font-size: 12px;
  }
  
  .ant-card-cover {
    height: 222px;
    overflow: hidden;
  
    img {
      width: 100%;
    }
  }
  
  .ant-card-body {
    padding: 8px 16px 16px 16px;
  }
  
  .ant-card-meta-title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
    height: 50.28px;
  }
  .txt-promotion {
    height: 37.69px;
  }
}
</style>