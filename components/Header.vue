<template>
  <div class="gb-component-header-container">
    <img class="gb-component-header-logo-image" src="/images/Logo@2x.png"/>
    <span class="gb-component-header-logo-name">Geekmister</span>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
  .gb-component-header-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 1392px;
    padding: 0 24px 0 24px;
    height: 64px;
  }

  .gb-component-header-logo-image {
    width: 48px;
    height: 48px;
  }
  .gb-component-header-logo-name {
    font-weight: 600;
    font-size: 18px;
    color: #18191B;
    letter-spacing: 2px;
    margin-left: 8px;
  }
</style>