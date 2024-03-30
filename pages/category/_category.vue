<template>
    <div class="container mx-auto">
        <div class="flex gap-2 mt-8 text-xl text-grey">
        <nuxt-link to="/" class="text-orenge">{{ $t('home') }}</nuxt-link>
        <img src="@/assets/img/icon/arrow-right.svg" alt="arrow" srcset="" />
        <nuxt-link to="/wishes">{{ $t("favorites") }}</nuxt-link>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>