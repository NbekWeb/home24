<template>
  <div class="w-64 overflow-y-auto border text-bold-grey">
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
        <p class="pb-4 text-xl font-semibold"> Цвет</p>
        <div>
            
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
</template>
<script>
export default {};
</script>
<style lang=""></style>
