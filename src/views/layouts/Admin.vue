<template>
    <a-layout>
        <Slider/>
        <a-layout :style="{marginLeft: collapsed ? '80px' : '240px', transition: 'all 0.2s'}">
            <Header/>

            <router-view/>

            <Footer />
        </a-layout>
    </a-layout>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Slider from '@/components/Slider.vue'
import {mapGetters, mapMutations, mapActions} from 'vuex';

export default {
  components: {
    Header,
    Footer,
    Slider,
  },
  computed: {
    ...mapGetters(['collapsed'])
  },
}
</script>
<style lang="">
    
</style>