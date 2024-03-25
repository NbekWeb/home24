<template>
    <div class="w-full bg-white">
        <div class="container mx-auto pt-28">
            <h2 class="mb-6 text-3xl font-bold text-black">{{ $t('categories') }}</h2>
            <div class="flex flex-wrap justify-between gap-6">
                <Card v-for="n of 20" :key="n"/>
            </div>
        </div>
    </div>
</template>
<script>
import Card from '../Card/Category.vue'
export default {
    components:{
        Card
    }
}
</script>
<style lang="">
    
</style>