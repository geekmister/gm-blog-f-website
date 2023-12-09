<template>
  <div>
    <Header />
    <div>
      <t-swiper class="tdesign-demo-block--swiper" :duration="300" :interval="2000">
        <t-swiper-item v-for="item in 1" :key="item">
          <t-image src="/images/banner_1.png" />
        </t-swiper-item>
      </t-swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
  import TopBar from "~/components/Header.vue";

</script>

<style scoped>

</style>