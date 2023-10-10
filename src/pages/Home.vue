<script setup>
import AppLayout from "../components/AppLayout.vue";
import CocktailThumb from "../components/CocktailThumb.vue"
import { useRootStore } from "@/stores/root";
import { storeToRefs } from "pinia"

const rootStore = useRootStore();
rootStore.getIngredients();
const {ingredients, cocktails, ingredient} = storeToRefs(rootStore);


function getCocktails(){
    rootStore.getCocktails(rootStore.ingredient)
}

function removeIngredient(){
    rootStore.setIgredient(null)    
}


</script>

<template>
    <AppLayout imgUrl="/src/assets/img/bg-1.jpg" :backFunc="removeIngredient" :is-back-button-visible="!!ingredient">
        <div class="wrapper">
            <div v-if="!ingredient || !cocktails" class="info">
                <div class="title">Choose your drink</div>
                <div class="line"></div>
                <div class="select-wrapper">
                    <el-select v-model="rootStore.ingredient" placeholder="Choose main ingredient" class="select" size="large"
                    @change="getCocktails()" filterable>
                        <el-option
                        v-for="item in ingredients"
                        :key="item.strIngredient1"
                        :label="item.strIngredient1"
                        :value="item.strIngredient1"
                        />
                    </el-select>
                    <div class="text">
                        Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by ingredient through our cocktail generator.    
                    </div>
                    <img src="/src/assets/img/cocktail_img.png" alt="Coctail" class="img">
                </div>    
            </div>
            <div v-else class="info">
                <div class="title">COCKTAILS WITH {{ingredient}}</div>
                <div class="line"></div>
                <div class="cocktails">
                    <CocktailThumb v-for="cocktail in cocktails" :key="cocktail.idDrink" :cocktail = "cocktail" />        
                </div>    
            </div>
        </div>
    </AppLayout>
</template>

<style lang="sass" scoped>
@import "../assets/styles/main"


.select-wrapper
    margin-top: 50px

.select
    width: 220px
.text
    min-width: 516px
    padding-top: 50px
    margin: 0 auto
    font-family: Raleway
    font-size: 16px
    font-weight: 400
    line-height: 36px
    letter-spacing: 0.1em
    text-align: center
    color: $textMuted
.img
    margin-top: 60px 

.cocktails
    display: flex
    align-items: center
    flex-wrap: wrap
    max-height: 400px
    overflow-y: auto
    margin-top: 60px

</style>