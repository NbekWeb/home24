<template>
  <div>
    <div class="container mx-auto order">
      <div class="router"></div>
      <p class="mt-4 mb-6 text-3xl font-medium text-bold-grey">Мои заказы</p>
      <div class="flex ">
        <div
          class="flex flex-col w-[408px] gap-y-5 border-r border-bor-grey pb-72 mt-2"
        >
          <nuxt-link
            to="/user/orders"
            class="flex items-center gap-2 order-icons"
          >
            <div
              class="flex items-center justify-center w-10 h-10 rounded-full bg-light-grey/20"
            >
              <img src="@/assets/img/icon/Profile.svg" class="w-4" />
            </div>
            <span> Мои заказы</span>
          </nuxt-link>
          <nuxt-link to="/user/reg" class="flex items-center gap-2 order-icons">
            <div
              class="flex items-center justify-center w-10 h-10 rounded-full bg-light-grey/20"
            >
              <img src="@/assets/img/icon/Profile.svg" class="w-4" />
            </div>
            <span> Профиль</span>
          </nuxt-link>
          <nuxt-link to="" class="flex items-center gap-2 order-icons">
            <div
              class="flex items-center justify-center w-10 h-10 rounded-full bg-light-grey/20"
            >
              <img src="@/assets/img/icon/Profile.svg" class="w-4" />
            </div>
            <span>Выйти</span>
          </nuxt-link>
        </div>
<nuxt-child />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.font-min {
  font-size: 12px;
}
</style>
