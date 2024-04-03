<template>
  <div class="container mx-auto pt-8">
    <div class="flex" v-if="searchs.length > 0">
      <div class="w-64 overflow-y-auto border text-bold-grey">
        <div class="pb-10">
          <p>Категории</p>
        </div>
        <div class="flex-col">
          <p class="pb-4 text-xl font-semibold">Сортировать</p>
          <div class="flex flex-col text-xs font-normal gap-y-2">
            <el-radio v-model="radio" label="popular">
              по популярности
            </el-radio>
            <el-radio v-model="radio" label="addNew">
              добавлено недавно</el-radio
            >
            <el-radio v-model="radio" label="price"> цена</el-radio>
          </div>
        </div>

        <div class="flex-col pt-10">
          <p class="pb-4 text-xl font-semibold">Цена</p>
          <div class="flex flex-col text-xs font-normal gap-y-2">
            sotr------
          </div>
        </div>

        <div class="flex-col pt-10">
          <p class="pb-4 text-xl font-semibold">Материал корпуса</p>
          <div class="flex flex-col text-xs font-normal gap-y-2">
            <el-checkbox-group
              v-model="checkMaterial"
              class="flex flex-col gap-y-2"
            >
              <el-checkbox label="ДСП"></el-checkbox>
              <el-checkbox label="МДФ"></el-checkbox>
              <el-checkbox label="Шпон"></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="flex-col pt-10">
          <p class="pb-4 text-xl font-semibold">Обслуживаемая площадь</p>
          <div class="flex flex-col text-xs font-normal gap-y-2">
            <el-checkbox-group
              v-model="checkPlace"
              class="flex flex-col gap-y-2"
            >
              <el-checkbox label="Ддо 25 м2"></el-checkbox>
              <el-checkbox label="от 25 м2"></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="flex-col pt-10">
          <p class="pb-4 text-xl font-semibold">Обслуживаемая площадь</p>
          <div class="flex flex-col text-xs font-normal gap-y-2">
            <el-checkbox-group
              v-model="checkPlace"
              class="flex flex-col gap-y-2"
            >
              <el-checkbox label="Ддо 25 м2"></el-checkbox>
              <el-checkbox label="от 25 м2"></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="flex-col pt-10">
          <p class="pb-4 text-xl font-semibold">Обслуживаемая площадь</p>
          <div class="flex flex-col text-xs font-normal gap-y-2">
            <el-checkbox-group
              v-model="checkPlace"
              class="flex flex-col gap-y-2"
            >
              <el-checkbox label="Ддо 25 м2"></el-checkbox>
              <el-checkbox label="от 25 м2"></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
      </div>
      <div class="overflow-y-auto ml-6">
        <nuxt-child :searchs="searchs" />
      </div>
    </div>
    <div v-else>
      <CardEmpty
        img="empty-search"
        text="Мы не нашли то, что вы искали"
        description="Возможно, в названии товара ошибка или у нас пока нет такого товара"
      />
    </div>
  </div>
</template>

<script>
import porductsApi from "@/api/productsApi.js";

export default {
  data() {
    return {
      radio: "popular",
      checkMaterial: [],
      checkPlace: [],
      searchs: {},
    };
  },
  methods: {
    async __GET_SEARCH() {
      try {
        const data = await porductsApi.getSearch(this.$route.params.search);
        this.searchs = data?.data?.products;
        console.log(this.searchs);
      } catch (e) {
        console.log(e);
      }
    },
  },
  async mounted() {
    await this.__GET_SEARCH();
  },
  watch: {
    "$route.params.search": {
      handler(newSearch, oldSearch) {
        if (newSearch !== oldSearch) {
          this.__GET_SEARCH(newSearch);
        }
      },
      immediate: true,
    },
  },
};
</script>

<style>
.el-radio__inner {
  border: 1px solid rgb(255, 100, 24) !important;
  background: #fff !important;
  width: 18px !important;
  height: 18px !important;
}
.el-radio__inner::after {
  width: 10px !important;
  height: 10px !important;
  border-radius: 100%;
  background-color: rgb(255, 100, 24) !important;
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.15s ease-in;
}
.el-radio__input.is-checked + .el-radio__label {
  color: rgb(255, 100, 24);
}

.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: rgb(255, 100, 24) !important;
  border-color: rgb(255, 100, 24) !important;
}
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: rgb(255, 100, 24) !important;
}
</style>
