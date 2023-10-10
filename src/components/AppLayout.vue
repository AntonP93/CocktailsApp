<script setup>
import {computed} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {Back} from '@element-plus/icons-vue'
import {ROUTERS_PATHS} from '../constants'

    const props = defineProps({
        imgUrl:  {
            type: String,
            required: true
        },
        backFunc:{
            type: Function,
            required: true,
        },
        isBackButtonVisible:{
            type: Boolean,
            default: true,    
        }

    }) 
    
    const route = useRoute();
    const router = useRouter();
    const routeName = computed(() => route.name)
    function getCocktailRandom(){
        router.push(ROUTERS_PATHS.COCKTAIL_RANDOM);

        if(routeName.value === ROUTERS_PATHS.COCKTAIL_RANDOM ){
            router.go();
        }
    }

   
</script>

<template>
    <div class="root">
        <div :style="`background-image: url(${imgUrl})`" class="img"></div>
        <div class="main">
            <div class="btns">
                <el-button type="primary" :icon="Back" circle class="back" @click="backFunc"  v-if="isBackButtonVisible"/>
                <el-button class="btnRandom" @click="getCocktailRandom">Get random cocktail</el-button> 
            </div>
            
            <slot></slot>   
        </div>

    </div>
</template>

<style lang="sass" scoped>
@import "../assets/styles/main"


.root
    display: flex
    min-height: 100vh
    background-color: $background
.img
    width: 50%
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: cover
.main
    position: relative
    padding: 32px 40px
    width: 50%
.btnRandom
    position: absolute
    width: 182px
    height: 32px
    border-radius: 4px
    top: 32px
    right: 40px
    background-color: $accent
    border-color: $accent
    font-family: Raleway
    font-size: 16px
    font-weight: 400
    line-height: 19px
    letter-spacing: 0em
    // text-align: left
    color: $text
    &:hover,
    &:active
        background-color: darken($accent, 10% )
        border-color: darken($accent, 10% )
.btns
    display: flex 
    width: 100%
    justify-content: space-between
    align-items: center
    flex-wrap: nowrap
.back
    background-color: transparent  
    border-color: $text
    &:hover,
    &:active
        background-color: darken($accent, 10% )
        border-color: darken($accent, 10% )        

</style>