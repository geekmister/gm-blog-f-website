<template>
  <div class="container">
    <div class="logo_placeholder_container">
      <span class="logo_placeholder_text">Logo 占位</span>
    </div>
    <div class="navigation_container">
      <t-link theme="primary">首页</t-link>
      <t-select
          v-model="value"
          :borderless="true"
          style="width: 200px"
          placeholder="我的作品"
          clearable
          auto-width
          :options="options">
      </t-select>
      <t-link theme="primary">博客文章</t-link>
    </div>
    <div>
      <!-- TODO: search bar -->
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const options = [
    {
      label: '我的作品一',
      value: '1',
    },
    {
      label: '我的作品二',
      value: '2',
    },
    {
      label: '我的作品三',
      value: '3',
    },
  ];

  const value = ref('1');
</script>

<style scoped>
  .container {
    width: 100%;
    height: 64px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .logo_placeholder_container {
    width: 192px;
    height: 48px;
    background-color: #D8D8D8;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .logo_placeholder_text {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #000000;
    letter-spacing: 0;
  }

  .navigation_container {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
</style>