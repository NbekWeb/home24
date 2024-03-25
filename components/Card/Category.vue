<template>
    <div class="w-[252px] h-[244px] bg-back-grey text-bold-grey rounded-lg p-6 flex flex-col justify-start items-start mebel-card">
        <nuxt-link to="/" class="w-full h-full text-center">
            <img src="@/assets/img/sof.png" alt="Category">
            <p class="text-2xl ">Mebel</p>
        </nuxt-link>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style >
    .mebel-card:hover p{
        color:rgb(255, 100, 24);
    }
    .mebel-card:hover{
        background:rgb(148, 148, 152,0.3);
    }
</style>