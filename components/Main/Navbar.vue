<template>
  <div class="flex items-center w-full h-32 bg-white">
    <div class="container items-center mx-auto">
      <div class="flex items-center justify-between text-xs head">
        <nuxt-link to="/"
          ><img src="@/assets/img/logo.png" class="h-11"
        /></nuxt-link>
        <div
          @click="$store.commit('toggleCatalog')"
          class="flex items-center gap-2 px-4 rounded cursor-pointer bg-orenge/10 h-11 hover:bg-orenge/20 katalog"
        >
          <img
            src="@/assets/img/icon/menu.svg"
            class=""
            v-show="!$store.state.catalog"
          />
          <img
            src="@/assets/img/icon/cancel.svg"
            alt="x"
            v-show="$store.state.catalog"
          />
          <span class="text-bold-orenge">{{ $t("catalog") }}</span>
        </div>
        <div class="flex gap-0 border rounded border-bor-grey h-11">
          <input
            type="text"
            placeholder="Искать"
            class="ml-2 outline-none w-44"
          />
          <div class="flex items-center justify-center w-20 bg-btn-grey">
            <img src="@/assets/img/icon/Search.svg" />
          </div>
        </div>
        <div class="flex gap-5 text-bold-grey">
          <nuxtLink to="/comparison" class="flex items-center gap-2 icon-hover">
            <img src="@/assets/img/icon/Swap.svg" alt="" />
            <span>{{ $t('comparison') }}</span>
          </nuxtLink>
          <nuxtLink to="/wishes" class="flex items-center gap-2 icon-hover">
            <img src="@/assets/img/icon/Heart.svg" alt="" />
            <span>{{ $t('favorites') }}</span>
          </nuxtLink>
          <nuxtLink to="/cart" class="flex items-center gap-2 icon-hover">
            <img src="@/assets/img/icon/bag.svg" alt="" />
            <span>{{ $t('cart') }}</span>
          </nuxtLink>
          <div
            class="flex items-center gap-2 icon-hover"
            @click="$store.commit('toggleLog')"
          >
            <img src="@/assets/img/icon/Profile.svg" alt="" />
            <span>{{ $t('login') }}</span>
          </div>
        </div>
      </div>
      <div class="relative flex justify-between w-full pt-7">
        <nuxt-link
          v-for="link in links"
          :key="link.id"
          :to="link.to"
          class="flex items-center gap-2 icon-hover"
        >
          <img :src="require(`../../assets/img/icon/${link.icon}.svg`)" />
          <span>{{ link.name }} </span>
        </nuxt-link>
        <div
          class="flex items-center gap-2 icon-hover"
          @click="$store.commit('toggleCatalog')"
        >
          <img src="@/assets/img/icon/arrow.svg" />
          <span>Ещё </span>
        </div>

        <Catalog v-show="$store.state.catalog" />
      </div>
    </div>
  </div>
</template>

<script>
import Catalog from "./Catalog";

export default {
  data() {
    return {
      catalog: false,
      links: [
        { id: 1, to: "/category/crowd", icon: "crowd", name: "Подарки" },
        { id: 2, to: "/category/sofa", icon: "sofa", name: "Мебель" },
        { id: 3, to: "/category/sofa", icon: "sofa", name: "Техника" },
        { id: 4, to: "/category/tarelka", icon: "tarelka", name: "Текстиль" },
        { id: 5, to: "/category/tarelka", icon: "tarelka", name: "Посуда" },
        { id: 6, to: "/category/mats", icon: "mats", name: "Сантехника" },
        { id: 7, to: "/category/build", icon: "build", name: "Стройматериалы" },
        { id: 8, to: "/category/pens", icon: "pens", name: "Канцтовары" },
        { id: 9, to: "/category/aksi", icon: "aksi", name: "Акции" },
      ],
    };
  },
  methods: {
    toggleCatalog() {
      this.catalog = !this.catalog;
    },
  },
  components: {
    Catalog,
  },
};
</script>

<style></style>
