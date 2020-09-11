<template>
<div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
</div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import {reqFoodCategorys} from './api'

export default {
     mounted(){
        this.$store.dispatch('getAddress') //应用一打开就获取地址
        this.$store.dispatch('getUserInfo') //获取用户信息
    },
    components: {
        FooterGuide
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
    width 100%
    height 100%
    background #f5f5f5
</style>