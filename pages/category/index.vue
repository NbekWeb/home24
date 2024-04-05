<template>
  <div class="container flex pt-8 mx-auto">
    <div class="w-64 overflow-y-auto border text-bold-grey">
    <div class="pb-10">
      <p>Категории</p>
    </div>
    <div class="flex-col">
      <p class="pb-4 text-xl font-semibold">Сортировать</p>
      <div class="flex flex-col text-xs font-normal gap-y-2">
        <el-radio v-model="radio" label="popular"> по популярности </el-radio>
        <el-radio v-model="radio" label="addNew"> добавлено недавно</el-radio>
        <el-radio v-model="radio" label="price"> цена</el-radio>
      </div>
    </div>

    <div class="flex-col pt-10">
      <p class="pb-4 text-xl font-semibold">Цена</p>
      <div class="flex flex-col text-xs font-normal gap-y-2">sotr------</div>
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
        <el-checkbox-group v-model="checkPlace" class="flex flex-col gap-y-2">
          <el-checkbox label="Ддо 25 м2"></el-checkbox>
          <el-checkbox label="от 25 м2"></el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
    <div class="flex-col pt-10">
      <p class="pb-4 text-xl font-semibold">Обслуживаемая площадь</p>
      <div class="flex flex-col text-xs font-normal gap-y-2">
        <el-checkbox-group v-model="checkPlace" class="flex flex-col gap-y-2">
          <el-checkbox label="Ддо 25 м2"></el-checkbox>
          <el-checkbox label="от 25 м2"></el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
    <div class="flex-col pt-10">
      <p class="pb-4 text-xl font-semibold">Обслуживаемая площадь</p>
      <div class="flex flex-col text-xs font-normal gap-y-2">
        <el-checkbox-group v-model="checkPlace" class="flex flex-col gap-y-2">
          <el-checkbox label="Ддо 25 м2"></el-checkbox>
          <el-checkbox label="от 25 м2"></el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
  </div>
 <div class="overflow-y-auto ml-12 w-full">
  <nuxt-child />
 </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "popular",
      checkMaterial: [],
      checkPlace: [],
    };
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
  transition: transnform 0.15s ease-in;
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
.el-checkbox__inner{
  z-index: 0;
}
</style>
