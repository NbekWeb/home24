<template>
  <div class="w-[650px] border rounded-lg border-bor-grey">
    <div class="w-full">
      <div
        class="flex items-center justify-between px-4 py-5 font-semibold border-b font-firs"
      >
        <p class="text-base text-bold-grey">Персональные данные</p>
        <div
          class="flex items-center gap-3 px-5 py-3 text-sm border rounded-lg border-orenge edit text-orenge"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.4165 14.5807H14.7307"
              stroke="#FF7E00"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
              style="transition: stroke 0.3s ease"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.71259 2.12902C9.32675 1.34652 10.3193 1.38735 11.1026 2.00152L12.2609 2.90985C13.0443 3.52402 13.3218 4.47652 12.7076 5.26069L5.80009 14.0732C5.56925 14.3682 5.21676 14.5424 4.84176 14.5465L2.17759 14.5807L1.57426 11.9849C1.48926 11.6207 1.57426 11.2374 1.80509 10.9415L8.71259 2.12902Z"
              stroke="#FF7E00"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.41895 3.7793L11.4139 6.91096"
              stroke="#FF7E00"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span class="">Изменит</span>
        </div>
      </div>
      <div>
        <div>
          <div>
            <p>Имя:</p>
            <span>{{ data.name ? data.name : "Пусто" }}</span>
          </div>
          <div>
            <p>E-mail:</p>
            <span>{{ data.email || Пусто }}</span>
          </div>
          <div>
            <p>Пароль:</p>
            <span>{{ data }}</span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
import authApi from "@/api/authApi";
export default {
  data() {
    return {
      data: [],
    };
  },
  methods: {
    async __GET_ME() {
      const data = await authApi.getMe();
      this.data = data?.data?.user;
    },
  },
  async mounted() {
    this.__GET_ME();
  },
};
</script>
<style>
.edit:hover svg path {
  transition: 0.3s ease;
  stroke: #fff;
}
.edit:hover {
  color: #fff;
  background: rgb(255, 126, 0);
}
</style>
