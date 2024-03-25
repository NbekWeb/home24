<template>
  <div>
    <div class="container mx-auto mt-8 mb-28">
      <div class="flex gap-2 text-xl text-grey">
        <nuxt-link to="/" class="text-orenge">Главная</nuxt-link>
        <img src="@/assets/img/icon/arrow-right.svg" alt="arrow" srcset="" />
        <nuxt-link to="/comparison">Сравнение</nuxt-link>
      </div>
      <div class="mt-2 text-xl font-normal text-bold-grey">
        <h2 class="mb-5 text-4xl font-medium">Список сравнения</h2>
        <p>Товаров:0</p>
      </div>
      <CardEmpty
        img="empty-comparison"
        title="Сравнивать пока нечего"
        description="Добавляйте товары к сравнению характеристик и выбирайте самый
           подходящий вам товар"
      />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
