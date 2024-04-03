<template>
  <div class="flex items-center w-full h-32 bg-white">
    <div class="w-full">
      <div class="container mx-auto">
        <div class="flex items-center justify-between leading-6 text-x head">
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
            <nuxtLink
              to="/comparison"
              class="flex items-center gap-2 icon-hover"
            >
              <img src="@/assets/img/icon/Swap.svg" alt="" />
              <span>{{ $t("comparison") }}</span>
            </nuxtLink>
            <nuxtLink to="/wishes" class="flex items-center gap-2 icon-hover">
              <img src="@/assets/img/icon/Heart.svg" alt="" />
              <span>{{ $t("favorites") }}</span>
            </nuxtLink>
            <nuxtLink to="/cart" class="flex items-center gap-2 icon-hover">
              <img src="@/assets/img/icon/bag.svg" alt="" />
              <span>{{ $t("cart") }}</span>
            </nuxtLink>
            <div
              class="flex items-center gap-2 icon-hover"
              @click="$store.commit('toggleLog')"
            >
              <img src="@/assets/img/icon/Profile.svg" alt="" />
              <span>{{ $t("login") }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="relative">
        <div class="container mx-auto">
          <div class="flex justify-between w-full leading-6 text-x pt-7">
          <nuxt-link
            v-for="link in links"
            :key="link.id"
            :to="link.slug"
            class="flex items-center gap-2 icon-hover"
          >
            <!-- <img :src="require(`../../assets/img/icon/${link.icon}.svg`)" /> -->
            <span>{{ link.name }} </span>
          </nuxt-link>

          <div
            class="flex items-center gap-2 icon-hover"
            @click="$store.commit('toggleCatalog')"
          >
            <img src="@/assets/img/icon/arrow.svg" />
            <span>Ещё </span>
          </div>
        </div>
        </div>
        <Catalog v-show="$store.state.catalog" />
      </div>
    </div>
  </div>
</template>

<script>
import porductsApi from "@/api/productsApi.js";
import Catalog from "./Catalog";

export default {
  data() {
    return {
      catalog: false,
      links: [],
    };
  },
  methods: {
    toggleCatalog() {
      this.catalog = !this.catalog;
    },
    async __GET_CATALOG() {
      try {
        const dataCatalog = await porductsApi.getCatalog();
        this.links = dataCatalog?.data?.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
  async mounted() {
    await this.__GET_CATALOG();
  },
  components: {
    Catalog,
  },
};
</script>

<style></style>
