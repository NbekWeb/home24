<template>
  <div class="w-full pt-20 text-xs font-normal text-grey">
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-between w-full border border-b">
        <div class="flex flex-col gap-y-4">
          <h3 class="mb-4 text-xl font-medium text-bold-grey">Информация</h3>
          <nuxt-link to="/">О компании</nuxt-link>
          <nuxt-link to="/">Наши партнеры</nuxt-link>
          <nuxt-link to="/">Блог </nuxt-link>
          <nuxt-link to="/">О наших акциях и скидках</nuxt-link>
          <nuxt-link to="/">Пользовательское соглашение</nuxt-link>
        </div>

        <div class="flex flex-col gap-y-4">
          <h3 class="mb-4 text-xl font-medium text-bold-grey">
            Поддержка и сервис
          </h3>
          <nuxt-link to="/">Вопросы и ответы </nuxt-link>
          <nuxt-link to="/">Отзывы</nuxt-link>
          <nuxt-link to="/">Контакты</nuxt-link>
          <nuxt-link to="/">Для партнеров</nuxt-link>
        </div>
        <div class="flex flex-col gap-y-4">
          <h3 class="mb-4 text-xl font-medium text-bold-grey">Мой профиль</h3>
          <nuxt-link to="/">Личный кабинет </nuxt-link>
          <nuxt-link to="/">Избранные товары</nuxt-link>
          <nuxt-link to="/">Список сравнения</nuxt-link>
          <nuxt-link to="/"> Мои заказы</nuxt-link>
        </div>
        <div class="flex flex-col gap-y-4 w-[300px]">
          <h3 class="mb-4 text-xl font-medium text-bold-grey">Контакты</h3>
          <p>Телефон: +998 (71) 200-7-002</p>
          <p>Ташкент, ул. Коратош, 106</p>
          <div class="flex items-center">
            <img src="@/assets/img/qr.png" alt="dav" srcset="" />
            <p class="flex">
              Наведите камеру на QR-код, чтобы найти местоположение
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-between py-5 ">
        <div>
          <div class="flex gap-4">
            <a
              class="flex items-center justify-center w-10 h-10 rounded-full bg-light-grey/20 hover:bg-light-grey/40 icon-hover"
            >
              <img src="@/assets/img/icon/tg.svg" class="w-5" />
            </a>
            <a
              class="flex items-center justify-center w-10 h-10 rounded-full bg-light-grey/20 hover:bg-light-grey/40 icon-hover"
            >
              <img src="@/assets/img/icon/insta.svg" class="w-5" />
            </a>
            <a
              class="flex items-center justify-center w-10 h-10 rounded-full bg-light-grey/20 hover:bg-light-grey/40 icon-hover"
            >
              <img src="@/assets/img/icon/Facebook.svg" class="w-5" />
            </a>
          </div>
          <p class="mt-8">© 2022 ООО «Интернет магазин «Home24».</p>
        </div>
        <div class="flex items-center gap-3 text-xl">
          <p>Мобильное приложение:</p>
          <a
            class="flex items-center justify-center w-10 h-10 rounded-full bg-light-grey/20 hover:bg-light-grey/40 icon-hover"
          >
            <img src="@/assets/img/icon/apple.svg" class="w-5" />
          </a>
          <a
            class="flex items-center justify-center w-10 h-10 rounded-full bg-light-grey/20 hover:bg-light-grey/40 icon-hover"
          >
            <img src="@/assets/img/icon/android.svg" class="w-5" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
