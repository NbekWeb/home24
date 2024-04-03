<template>
  <div class="flex items-center w-full h-32 bg-white">
    <div class="w-full">
      <div class="container mx-auto">
        <div class="flex items-center justify-between leading-6 text-x head">
          <nuxt-link to="/">
            <img src="@/assets/img/logo.png" class="h-11" />
          </nuxt-link>
          <div
            @click="toggleCatalog"
            class="flex items-center gap-2 px-4 rounded cursor-pointer bg-orange-100 h-11 hover:bg-orange-200 katalog"
          >
            <img
              src="@/assets/img/icon/menu.svg"
              v-show="!$store.state.catalog"
            />
            <img
              src="@/assets/img/icon/cancel.svg"
              alt="x"
              v-show="$store.state.catalog"
            />
            <span class="font-semibold text-orange">{{ $t("catalog") }}</span>
          </div>
          <div class="flex gap-0 border rounded border-gray-300 h-11">
            <input
              type="text"
              placeholder="Искать"
              v-model="search"
              class="ml-2 outline-none w-44"
              @keypress.enter="performSearch"
            />
            <button
              class="flex items-center justify-center w-20 bg-gray-300"
              @click="performSearch"
            >
              <img src="@/assets/img/icon/Search.svg" />
            </button>
          </div>
          <div class="flex gap-5 text-gray-600">
            <nuxt-link
              to="/comparison"
              class="flex items-center gap-2 icon-hover"
            >
              <img src="@/assets/img/icon/Swap.svg" alt="" />
              <span>{{ $t("comparison") }}</span>
            </nuxt-link>
            <nuxt-link to="/wishes" class="flex items-center gap-2 icon-hover">
              <img src="@/assets/img/icon/Heart.svg" alt="" />
              <span>{{ $t("favorites") }}</span>
            </nuxt-link>
            <nuxt-link to="/cart" class="flex items-center gap-2 icon-hover">
              <img src="@/assets/img/icon/bag.svg" alt="" />
              <span>{{ $t("cart") }}</span>
            </nuxt-link>
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
              :to="`/category/${link.slug}`"
              class="flex items-center gap-2 icon-hover"
            >
              <!-- <img :src="require(`../../assets/img/icon/${link.icon}.svg`)" /> -->
              <span>{{ link.name }} </span>
            </nuxt-link>

            <div
              class="flex items-center gap-2 icon-hover"
              @click="toggleCatalog"
            >
              <img src="@/assets/img/icon/arrow.svg" />
              <span>Ещё </span>
            </div>
          </div>
        </div>
        <Catalog v-if="$store.state.catalog" />
      </div>
    </div>
  </div>
</template>

<script>
import productsApi from "@/api/productsApi.js";
import Catalog from "./Catalog";

export default {
  data() {
    return {
      search: "",
      links: [],
    };
  },
  methods: {
    toggleCatalog() {
      this.$store.commit("toggleCatalog");
    },
    async getCatalog() {
      try {
        const dataCatalog = await productsApi.getCatalog();
        this.links = dataCatalog?.data?.data;
      } catch (error) {
        console.error(error);
      }
    },
    performSearch() {
      this.$router.push(`/search/${this.search}`);
      this.search=""
    },
  },
  async mounted() {
    await this.getCatalog();
  },
  components: {
    Catalog,
  },
};
</script>

<style></style>
