<template>
  <div class="w-full h-auto">
    <!-- product -->
    <div class="flex">
      <!-- product title  -->
      <div class="flex gap-8">
        <!-- product imgs -->
        <div class="flex gap-4">
          <div class="flex flex-col w-20 gap-y-5">
            <img :src="img.sm_img" alt="" srcset="" class="h-20 border rounded border-grey " v-for="img of product?.product?.images"  :key="img.id"/>
          </div>
          <div class="w-[530px] h-[530px] rounded-2xl border p-3">
            <img
              :src="product?.product?.images?.[0]?.sm_img"
              alt=""
              class="w-full h-full"
            />
          </div>
        </div>

        <!-- product text -->
        <div>
          <!-- stars -->
          <div class="flex gap-5">
            <div class="flex gap-1">
              <img src="@/assets/img/icon/stardegre.svg" alt="star" />
              <span class="text-sm">{{
                product?.product?.info?.comments.length || "Без рейтинга"
              }}</span>
            </div>
            <div class="flex gap-1">
              <img
                src="@/assets/img/icon/Chat.svg"
                alt="star"
                class="flex gap-1"
              />
              <span
                >{{ product?.product?.info?.stars || "Не " }} комментировать</span
              >
            </div>
            <p>Код товара: {{ product?.product?.info?.default_product_id }}</p>
          </div>

          <!-- name -->
          <p>{{ product?.product?.name }}</p>
          <!-- soni -->
          <div>
            <p>Производитель:{{ product?.product?.info?.brand?.name }}</p>
            <p>Модель:{{ product?.product?.model }}</p>
            <p>Доставка по Ташкенту: Самовывоз</p>
          </div>
          <div></div>
        </div>
      </div>

      <!-- Buy -->
      <div></div>
    </div>

    <!-- comments -->
    <div></div>
  </div>
</template>
<script>
import productsApi from "@/api/productsApi";
export default {
  data() {
    return {
      product: [],
    };
  },
  // ?.attribute_options?.[0]?.attribute?.name?.en
  methods: {
    async __GET_PRODUCT() {
      try {
        const data = await productsApi.getProduct(this.$route.params.product);
        console.log(this.product?.product?.info?.products);
        this.product = data?.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
  async mounted() {
    await this.__GET_PRODUCT();
  },
  watch: {
    "$route.params.product": {
      handler(newSearch, oldSearch) {
        if (newSearch !== oldSearch) {
          this.__GET_PRODUCT();
        }
      },
      immediate: true,
    },
  },
};
</script>
<style lang=""></style>
