<template>
  <div class="px-4 text-xl text-grey">
    <div class="flex gap-10 h-7">
      <nuxt-link
        to=""
        class="border-b border-white hover:text-orenge hover:underline"
        >Все заказы</nuxt-link
      >
      <nuxt-link
        to=""
        class="border-b border-white hover:text-orenge hover:underline"
        >Неоплаченные</nuxt-link
      >
    </div>
    <div class="flex flex-wrap justify-between gap-5 mt-6 text-xs zakazs pb-14">
      <div
        class="zakaz w-[544px] border border-bor-grey p-6 rounded-lg hover:bg-grey/10"
      >
        <div class="flex items-center justify-between border-b border-grey/40">
          <div class="pb-4">
            <p class="text-xl font-medium text-black">ID заказа 32839</p>
            <p>Обновлен 8 ноября 2022 г., 13:00</p>
          </div>
          <button class="px-4 py-2 bg-grey/10 hover:bg-grey/30">
            Ожидания
          </button>
        </div>
        <div class="flex pb-4 mt-4 border-b gap-14 border-grey/40">
          <div class="right">
            <p class="">Дата заказа</p>
            <p class="mb-5 text-xl font-medium text-black">
              Вторник, 8 ноября 2022 г., 12:59
            </p>
            <p>Способ оплаты</p>
            <p class="text-xl font-medium text-black">Payme</p>
          </div>
          <div class="left">
            <p>Способ доставки</p>
            <p class="mb-5 text-xl font-medium text-black">Доствака</p>
            <p>Сумма заказа</p>
            <p class="text-xl font-medium text-black">250 000 сум</p>
          </div>
        </div>
        <div class="flex items-center gap-6 py-4 zakaz-rasmi">
          <div
            class="w-[81px] h-[81px] border border-bor-grey flex items-center justify-center"
          >
            <img src="@/assets/img/kreslo.png" alt="" class="w-auto h-full" />
          </div>
          <div class="flex flex-col gap-y-6">
            <p class="flex items-center gap-1">
              Ноиманование:<span class="text-bold-grey font-min">
                ОФИСНОЕ КРЕСЛО 6206A-2 ОФИСНОЕ КРЕСЛО 6206A-2 ОФИСНОЕ
                КРЕСЛО6206A-2
              </span>
            </p>
            <div class="flex justify-between text-bold-grey">
              <p>1 x 1 000 000 сум</p>
              <p>1 000 000 сум</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="zakaz w-[544px] border border-bor-grey p-6 rounded-lg hover:bg-grey/10"
      >
        <div class="flex items-center justify-between border-b border-grey/40">
          <div class="pb-4">
            <p class="text-xl font-medium text-black">ID заказа 32839</p>
            <p>Обновлен 8 ноября 2022 г., 13:00</p>
          </div>
          <button class="px-4 py-2 bg-grey/10 hover:bg-grey/30">
            Ожидания
          </button>
        </div>
        <div class="flex pb-4 mt-4 border-b gap-14 border-grey/40">
          <div class="right">
            <p class="">Дата заказа</p>
            <p class="mb-5 text-xl font-medium text-black">
              Вторник, 8 ноября 2022 г., 12:59
            </p>
            <p>Способ оплаты</p>
            <p class="text-xl font-medium text-black">Payme</p>
          </div>
          <div class="left">
            <p>Способ доставки</p>
            <p class="mb-5 text-xl font-medium text-black">Доствака</p>
            <p>Сумма заказа</p>
            <p class="text-xl font-medium text-black">250 000 сум</p>
          </div>
        </div>
        <div class="flex items-center gap-6 py-4 zakaz-rasmi">
          <div
            class="w-[81px] h-[81px] border border-bor-grey flex items-center justify-center"
          >
            <img src="@/assets/img/kreslo.png" alt="" class="w-auto h-full" />
          </div>
          <div class="flex flex-col gap-y-6">
            <p class="flex items-center gap-1">
              Ноиманование:<span class="text-bold-grey font-min">
                ОФИСНОЕ КРЕСЛО 6206A-2 ОФИСНОЕ КРЕСЛО 6206A-2 ОФИСНОЕ
                КРЕСЛО6206A-2
              </span>
            </p>
            <div class="flex justify-between text-bold-grey">
              <p>1 x 1 000 000 сум</p>
              <p>1 000 000 сум</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="zakaz w-[544px] border border-bor-grey p-6 rounded-lg hover:bg-grey/10"
      >
        <div class="flex items-center justify-between border-b border-grey/40">
          <div class="pb-4">
            <p class="text-xl font-medium text-black">ID заказа 32839</p>
            <p>Обновлен 8 ноября 2022 г., 13:00</p>
          </div>
          <button class="px-4 py-2 bg-grey/10 hover:bg-grey/30">
            Ожидания
          </button>
        </div>
        <div class="flex pb-4 mt-4 border-b gap-14 border-grey/40">
          <div class="right">
            <p class="">Дата заказа</p>
            <p class="mb-5 text-xl font-medium text-black">
              Вторник, 8 ноября 2022 г., 12:59
            </p>
            <p>Способ оплаты</p>
            <p class="text-xl font-medium text-black">Payme</p>
          </div>
          <div class="left">
            <p>Способ доставки</p>
            <p class="mb-5 text-xl font-medium text-black">Доствака</p>
            <p>Сумма заказа</p>
            <p class="text-xl font-medium text-black">250 000 сум</p>
          </div>
        </div>
        <div class="flex items-center gap-6 py-4 zakaz-rasmi">
          <div
            class="w-[81px] h-[81px] border border-bor-grey flex items-center justify-center"
          >
            <img src="@/assets/img/kreslo.png" alt="" class="w-auto h-full" />
          </div>
          <div class="flex flex-col gap-y-6">
            <p class="flex items-center gap-1">
              Ноиманование:<span class="text-bold-grey font-min">
                ОФИСНОЕ КРЕСЛО 6206A-2 ОФИСНОЕ КРЕСЛО 6206A-2 ОФИСНОЕ
                КРЕСЛО6206A-2
              </span>
            </p>
            <div class="flex justify-between text-bold-grey">
              <p>1 x 1 000 000 сум</p>
              <p>1 000 000 сум</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="zakaz w-[544px] border border-bor-grey p-6 rounded-lg hover:bg-grey/10"
      >
        <div class="flex items-center justify-between border-b border-grey/40">
          <div class="pb-4">
            <p class="text-xl font-medium text-black">ID заказа 32839</p>
            <p>Обновлен 8 ноября 2022 г., 13:00</p>
          </div>
          <button class="px-4 py-2 bg-grey/10 hover:bg-grey/30">
            Ожидания
          </button>
        </div>
        <div class="flex pb-4 mt-4 border-b gap-14 border-grey/40">
          <div class="right">
            <p class="">Дата заказа</p>
            <p class="mb-5 text-xl font-medium text-black">
              Вторник, 8 ноября 2022 г., 12:59
            </p>
            <p>Способ оплаты</p>
            <p class="text-xl font-medium text-black">Payme</p>
          </div>
          <div class="left">
            <p>Способ доставки</p>
            <p class="mb-5 text-xl font-medium text-black">Доствака</p>
            <p>Сумма заказа</p>
            <p class="text-xl font-medium text-black">250 000 сум</p>
          </div>
        </div>
        <div class="flex items-center gap-6 py-4 zakaz-rasmi">
          <div
            class="w-[81px] h-[81px] border border-bor-grey flex items-center justify-center"
          >
            <img src="@/assets/img/kreslo.png" alt="" class="w-auto h-full" />
          </div>
          <div class="flex flex-col gap-y-6">
            <p class="flex items-center gap-1">
              Ноиманование:<span class="text-bold-grey font-min">
                ОФИСНОЕ КРЕСЛО 6206A-2 ОФИСНОЕ КРЕСЛО 6206A-2 ОФИСНОЕ
                КРЕСЛО6206A-2
              </span>
            </p>
            <div class="flex justify-between text-bold-grey">
              <p>1 x 1 000 000 сум</p>
              <p>1 000 000 сум</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
