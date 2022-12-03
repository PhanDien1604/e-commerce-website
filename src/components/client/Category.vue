<template lang="">
  <div class="box-category">
    <h1>Danh mục</h1>
    <div v-if="categorise.length > 0">
      <Carousel :settings="settingsCarousel">
        <Slide v-for="(category, i) in categorise" :key="i">
          <a-row class="w-100">
            <a-col :span="24">
              <router-link :to="{name: 'groupProduct', params: {id: category[0].id}}">
                <a-card hoverable>
                  <template #cover>
                    <img alt="example" src="@/assets/images/icons/icon-category-1.png" />
                  </template>
                  <a-card-meta>
                    <template #title>
                      <span class="font-size-13">{{ category[0].title }}</span>
                    </template>
                  </a-card-meta>
                </a-card>
              </router-link>
            </a-col>
            <a-col :span="24">
              <router-link :to="{name: 'groupProduct', params: {id: category[1].id}}">
                <a-card hoverable>
                  <template #cover>
                    <img alt="example" src="@/assets/images/icons/icon-category-1.png" />
                  </template>
                  <a-card-meta>
                    <template #title>
                      <span class="font-size-13">{{ category[1].title }}</span>
                    </template>
                  </a-card-meta>
                </a-card>
              </router-link>
            </a-col>
          </a-row>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  data() {
    return {
      settingsCarousel: {
        itemsToShow: 8,
        wrapAround: false,
        itemsToScroll: 8,
        snapAlign: 'start'
      }
    }
  },
  props: [
    'categorise'
  ],
  components: { 
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
}
</script>
<style lang="scss">
  .box-category {
    .ant-card-cover {
      width: 60px;
      height: 60px;
      border-radius: 20px;
      margin: 0 auto;
      overflow: hidden;
    }

    .ant-card-meta-title {
      text-align: center;
    }

    .ant-card {
      padding: 1rem 0;
    }

    .ant-card-body {
      padding: 0;
    }

    .ant-card-meta-title {
      margin-top: 0.5rem;
    }
  }
</style>