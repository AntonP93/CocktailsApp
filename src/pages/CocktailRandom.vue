<script setup>
import axios from 'axios'
import { ref, computed } from "vue";
import { useRoute,useRouter} from "vue-router";
import { cocktail_random,INGR_IMG } from "@/constants";
import AppLayout from "../components/AppLayout.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const route = useRoute();
const router = useRouter();
const cocktail = ref(null);

async function getCocktail(){
    const data = await axios.get(`${cocktail_random}`);
    cocktail.value = data?.data?.drinks[0];
}
function goBack(){
    router.go(-1);    
}

getCocktail();

const ingredients = computed(()=>{

    const ingredients=[];
    for(let i = 1; i <=15;i++){
        if(!cocktail.value[`strIngredient${i}`]) break;
        
        const ingredient = cocktail.value[`strIngredient${i}`];
        ingredients.push(ingredient);
    }
    return ingredients;
})
</script>

<template>
    <div v-if="cocktail" class="wrap">
        <AppLayout :imgUrl="cocktail.strDrinkThumb" :backFunc="goBack">
        <div class="wrapper">
            <div  class="info">
                <div class="title">{{cocktail.strDrink}}</div>
                <div class="line"></div>
                <div class="slider">
                    <swiper
                        :slides-per-view="3"
                        :space-between="50"
                        class = "swiper"
                    >
                        <swiper-slide v-for="ingredient in ingredients" :key="ingredient">
                            <img :src="`${INGR_IMG}${ingredient}-Small.png`" :alt="`${ingredient}`">
                            <div class="info_slide">{{ingredient}}</div>
                        </swiper-slide>

                    </swiper>
                </div>
                <div class="instr">
                   {{cocktail.strInstructions}} 
                </div>
            </div>
        </div> 
    </AppLayout>     
    </div>          
</template>

<style lang="sass" scoped>
@import "../assets/styles/main"
.slider
    padding:  50px 0 
.swiper
    width: 586px 
.img-slide
    width: 100px
    height: 100px   
.info_slide
    margin-top: 20px
    color: $textMuted
    text-align: center
    font-size: 16px
    font-weight: 400
    line-height: 22px
    letter-spacing: 1.6px 
.instr
    margin-top: 50px    
</style>