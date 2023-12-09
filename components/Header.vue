<template>
  <div class="container">
    <t-space direction="horizontal" align="center" size="small">
      <t-image :style="{width: '48px', height: '48px'}" src="/images/Logo@2x.png" alt="" shape="circle"/>
      <span class="name">Geekmister</span>
    </t-space>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
  .container {
    width: 100%;
    height: 64px;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    padding-left: 24px;
  }
</style>