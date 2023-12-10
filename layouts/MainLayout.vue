<template>
  <div class="gb-layout-main-container">
    <div class="gb-layout-main-header_container">
      <Header/>
    </div>
    <div class="gb-layout-main-content_container">
      <NuxtPage/>
    </div>
    <div class="footer_container">
      <Footer/>
    </div>
  </div>
</template>

<script setup lang="jsx">

</script>

<style scoped>
  .gb-layout-main-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
  }

  .gb-layout-main-header_container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #FFFFFF;
    border-bottom: 1px solid #a7abb333;
  }

  .gb-layout-main-content_container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #FFFFFF;
  }

  .footer_container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    background: #a7abb326;
    margin-top: 32px;
  }
</style>