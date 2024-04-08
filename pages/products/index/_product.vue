<template>
  <div class="w-full h-auto font-firs text-grey">
    <div class="flex gap-2 mb-8 text-xl text-grey">
      <nuxt-link to="/" class="text-orenge">{{ $t("home") }}</nuxt-link>
      <img src="@/assets/img/icon/arrow-right.svg" alt="arrow" srcset="" />
      <nuxt-link :to="'/products/'+product?.product?.slug">{{product?.product?.name}}</nuxt-link>
      </div>
    <!-- product -->
    <div class="flex">
      <!-- product title  -->
      <div class="flex gap-8">
        <!-- product imgs -->
        <div class="flex gap-4">
          <div class="flex flex-col w-20 gap-y-5">
            <img
              :src="img.sm_img"
              alt=""
              srcset=""
              class="h-20 border rounded border-grey"
              v-for="(img, ind) of product?.product?.images"
              :class="defaultImg == ind && 'border-orenge'"
              :key="img.id"
              @click="defaultImg = ind"
            />
          </div>
          <div class="w-[530px] h-[530px] rounded-2xl border p-3">
            <img
              :src="product?.product?.images?.[defaultImg]?.sm_img"
              alt=""
              class="w-full h-full"
            />
          </div>
        </div>

        <!-- product text -->
        <div class="">
          <!-- stars -->
          <div class="flex items-center gap-5 text-sm">
            <div class="flex gap-1">
              <img src="@/assets/img/icon/stardegre.svg" alt="star" />
              <span class="text-bold-grey">{{
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
                >{{
                  product?.product?.info?.stars || "Не "
                }}
                комментировать</span
              >
            </div>
            <p>Код товара: {{ product?.product?.info?.default_product_id }}</p>
          </div>

          <!-- name -->
          <p class="mt-4 mb-6 text-2xl font-medium">
            {{ product?.product?.name }}
          </p>
          <!-- soni -->
          <div class="flex flex-col gap-4 mb-4">
            <p>
              Производитель:<span class="text-bold-grey">{{
                product?.product?.info?.brand?.name
              }}</span>
            </p>
            <p>
              Модель:<span class="text-bold-grey">{{
                product?.product?.model
              }}</span>
            </p>
          </div>
          <div v-if="product?.product?.info?.products?.length">
            <!-- <div v-for="atrName,atr of getAttr(product?.product?.info?.products)" :key="atr" >
              {{ atrName }}
             </div> -->
            <div
              v-for="(values, attributeName) in getAttr(
                product?.product?.info?.products
              )"
              :key="attributeName"
              class="flex flex-col gap-3"
            >
              <p>{{ attributeName }} :</p>
              <div class="flex flex-row gap-6">
                <div
                  v-for="(value, index) in values"
                  :key="index"
                  class="p-1 mb-6 border rounded border-bor-grey text-bold-grey"
                >
                  <div
                    v-if="attributeName == 'Цвет'"
                    class="w-5 h-5"
                    :style="{ backgroundColor: value }"
                  ></div>
                  <div v-else class="p-2">
                    {{ value }}
                  </div>
                </div>
              </div>
            </div>

            <!-- {{ product?.product?.info?.products }} -->
          </div>
          <!-- <div
            v-for="(products, ind) of product?.product?.info?.products"
            :key="ind"
          > -->
          <!-- <div
              v-for="(attributes, index) of products.attribute_options"
              :key="index"
            > -->
          <!-- {{index}}////{{ attributes.name }} -->
          <!-- <div v-if="attributes.attribute.name.ru"> -->

          <!-- </div> -->
          <!-- </div> -->
          <!-- </div> -->
        </div>
      </div>

      <!-- Buy -->
      <div></div>
    </div>

    <!-- comments -->
    <div class="mt-16">
      <div class="flex gap-12 my-8 hover:cursor-pointer">
        <p
          :class="
            tab === 'desc'
              ? 'text-bold-grey  border-bold-grey  pb-1'
              : 'border-transparent'
          "
          class="border-b-2"
          @click="tab = 'desc'"
        >
          Описание товара
        </p>
        <p
          :class="
            tab === 'coment'
              ? 'text-bold-grey  border-bold-grey  pb-1'
              : ' border-transparent'
          "
          class="border-b-2"
          @click="tab = 'coment'"
        >
          Отзывы (0)
        </p>
        <p
          :class="
            tab === 'character'
              ? 'text-bold-grey border-bold-grey  pb-1'
              : ' border-transparent'
          "
          class="border-b-2"
          @click="tab = 'character'"
        >
          Характеристики
        </p>
      </div>
      <div
        v-if="tab == 'desc'"
        v-html="product?.product?.info?.desc"
        class="mt-8 max-w-[900px]"
      ></div>
      <div v-else-if="tab == 'coment'" class="mt-8 max-w-[900px]">
        <div
          v-for="(coment, index) of product?.product?.info?.comments"
          :key="index"
        >
          {{ comment }}
        </div>
      </div>
      <div v-else>
        <div v-for="(char, id) of product?.characteristics" :key="id">
          <p class="mb-6 text-xl text-bold-grey">{{ char.name }}</p>
          <div class="w-[390px] flex flex-col gap-6">
            <div
              v-for="(character, ind) of char?.characteristics"
              :key="ind"npm 
              class="flex items-center gap-2 text-base"
            >
              <p>{{ character?.name }}</p>
              <div class="flex-grow h-1 border-b-2 border-dashed"></div>
              <p class="text-bold-grey">{{ character?.options?.[0]?.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import productsApi from "@/api/productsApi";
export default {
  data() {
    return {
      product: [],
      k: {},
      produc_ids: {},
      defaultImg: 0,
      tab: "desc",
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
    getAttr(products) {
      // console.log('1',products);
      products.forEach((items) => {
        // console.log('2',items);
        items?.attribute_options.forEach((item) => {
          if (!this.k[item.attribute.name.ru]) {
            this.k[item.attribute.name.ru] = [];
          }
          if (!this.k[item.attribute.name.ru].includes(item.name)) {
            this.k[item.attribute.name.ru].push(item.name);
          }
          this.k[item.attribute.name.ru] = Array.from(
            new Set(this.k[item.attribute.name.ru])
          );
          // console.log(this.k);
        });
      });
      return this.k;
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
