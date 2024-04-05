<template lang="">
  <div class="relative">
    <MainContact />
    <MainNavbar />
    <div>
      <nuxt />
      <div
        class="absolute top-0 z-30 flex items-center justify-center w-full h-screen overflow-hidden bg-black/80"
        v-show="getLog"
      >
        <CardLogin class="" />
      </div>
    </div>
    <Foot />
  </div>
</template>
<script>
export default {
  computed: {
    getLog(){
        return this.$store.state.log
    }
  },
};
</script>
<style lang=""></style>
