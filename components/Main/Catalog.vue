<template>
  <div class="absolute top-0 z-10 flex w-full h-auto bg-white py-14">
    <div class="flex border">
      <div class="flex flex-col gap-y-14 border justify-start w-[250px] gap-6">
        <div class="flex items-center gap-2 icon-hover">
          <img src="@/assets/img/icon/Heart.svg" alt="Heart Icon" />
          <span>{{ $t('favorites') }}</span>
        </div>
        <div class="flex items-center gap-2 icon-hover">
          <img src="@/assets/img/icon/Heart.svg" alt="Heart Icon" />
          <span>{{ $t('favorites') }}</span>
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </div>

    <div>
        <h2 class="text-3xl font-medium text-orenge">Texnika</h2>

        <div class="flex flex-wrap pt-10 text-xl font-normal gap-y-6 text-grey">
            <div class="w-[450px] border">
                <h3 class="pb-6 text-2xl font-medium text-bold-grey">
                        title
                </h3>
                <div>
                    <p>link1</p>
                    <p>link1</p>
                    <p>link1</p>
                    <p>link1</p>
                </div>
            </div>
            <div class="w-[450px] border">
                <h3 class="pb-6 text-2xl font-medium text-bold-grey">
                        title
                </h3>
                <div>
                    <p>link1</p>
                    <p>link1</p>
                    <p>link1</p>
                    <p>link1</p>
                </div>
            </div>
            <div class="w-[450px] border ">
                <h3 class="pb-6 text-2xl font-medium text-bold-grey">
                        title
                </h3>
                <div>
                    <p>link1</p>
                    <p>link1</p>
                    <p>link1</p>
                    <p>link1</p>
                </div>
            </div>
            <div class="w-[450px]">
                <h3 class="pb-6 text-2xl font-medium text-bold-grey">
                        title
                </h3>
                <div>
                    <p>link1</p>
                    <p>link1</p>
                    <p>link1</p>
                    <p>link1</p>
                </div>
            </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
