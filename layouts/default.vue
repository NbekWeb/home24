<template lang="">
  <div class="relative">
    <MainContact />
    <MainNavbar />
    <div>
      <nuxt />
      <div
        class="w-full flex justify-center items-center absolute top-0 bg-black/80 h-screen overflow-hidden"
        v-show="getLog"
      >
        <CardLogin class="" />
      </div>
    </div>
    <Foot />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    getLog(){
        return this.$store.state.log
    }
  },
};
</script>
<style lang=""></style>
