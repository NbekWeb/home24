<template>
  <div class="w-full h-10 bg-back-grey ">
      <div class="container mx-auto">
        <div class="flex justify-between text-xs font-normal text-grey">
          <a target="_blank" href="#" class="flex items-center gap-2 icon-hover">
            <img src="@/assets/img/icon/location.svg"/>
            <span class="">Город: <span class="underline text-bold-grey">Ташкент</span></span>
          </a>

          <div class="flex items-center gap-10">
            <a target="_blank" href="#" class="flex items-center gap-2 icon-hover">
              <img src="@/assets/img/icon/insta.svg" />
              <span>home24.uz</span>
            </a>
            <a target="_blank" href="" class="flex items-center gap-2 icon-hover">
              <img src="@/assets/img/icon/tg.svg" />
              <span>t.me/home24uz</span>
            </a>
            <a href="tel:+4733378901" class="font-bold text-bold-orenge"> +998 71 200 7 002 </a>
            <el-select v-model="value" placeholder="Select" class="flex items-center icon-hover"  @change="handleChange">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: "ru",
          label: "Rus",
        },
        {
          value: "uz",
          label: "Uz",
        },
      ],
      value: "uz",
    };
  },
  methods:{
    handleChange(newLoc) {
      this.$i18n.locale = newLoc;
    },
  }
};
</script>
<style>
.el-input input {
  border: none;
  width: 60px;
  margin: 0;
  padding: 0;
  background: inherit;
}

</style>

