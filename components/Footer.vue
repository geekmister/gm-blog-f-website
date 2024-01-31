<template>
  <div class="gm-components-footer-container">
    <div class="footer_top_container">
      <t-table row-key="index" :data="data" :columns="columns" :bordered="false" height="200" />
      <div class="footer_top_qrcode_container">
        <t-image class="footer_top_qrcode" src="/images/qrcode@2x.png" />
        <span class="gm-components-footer-top-qrcode-text">关注极客先生公众号</span>
        <span class="gm-components-footer-top-qrcode-text">获得我的最新动态</span>
      </div>
    </div>
    <span class="gm-components-footer-subsidiary">Copyright © 2022 Geekmister. All Rights Reserved. 极客先生 版权所有</span>
  </div>
</template>

<script setup lang="jsx">
  import {ref} from "vue";

  const data = [
    {
      about: {name: "敬请期待...", link: ""},
      links: {name: "敬请期待...", link: ""},
      works: {name: "敬请期待...", link: ""}
    }
  ]

  const columns = ref([
    {
      colKey: 'about',
      title: '关于',
      width: '100',
      cell: (h, {row}) => {
        console.log(1)
        console.log(row)
        return (
            <a class="gm-components-footer-top-table-cell" href={row.about.link}>{row.about.name}</a>
      );
      }
    },
    {
      colKey: 'links',
      title: '友情链接',
      width: '100',
      cell: (h, {row}) => {
        return (
            <a class="gm-components-footer-top-table-cell" href={row.links.link}>{row.links.name}</a>
      );
      }
    },
    {
      colKey: 'works',
      title: '我的作品',
      width: '100',
      cell: (h, {row}) => {
        return (
            <a href={row.links.link}>{row.works.name}</a>
      );
      }
    }
  ]);
</script>

<style scoped>
  .gm-components-footer-container {
    width: 1392px;
    padding: 32px 24px 32px 24px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .footer_top_container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
  }

  .gm-components-footer-top-table-cell {
    height: 20px;
    line-height: 20px;
    font-weight: 400;
    font-size: 14px;
    color: #52555A;
    letter-spacing: 0;
  }

  .footer_top_qrcode_container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: auto;
    height: auto;
  }

  .footer_top_qrcode {
    width: 184px;
    height: 184px;
  }

  .gm-components-footer-top-qrcode-text {
    height: 20px;
    font-weight: 400;
    font-size: 14px;
    color: #52555A;
    letter-spacing: 0;
    margin-top: 8px;
  }

  .gm-components-footer-subsidiary {
    height: 20px;
    line-height: 20px;
    font-weight: 400;
    font-size: 12px;
    color: #52555A;
    letter-spacing: 0;
    text-align: center;
    margin-top: 86px;
  }

  :deep(.t-table thead td), :deep(.t-table th) {
    font-weight: 600;
    font-size: 18px;
    color: #18191B;
    letter-spacing: 2px;
  }

  :deep(.t-table th), :deep(.t-table td) {
    border-bottom: none;
    padding-left: 0;
    padding-top: 0;
  }

  :deep(.t-table tr) {
    background-color: rgba(0, 0, 255, 0);
  }

  :deep(.t-table) {
    width: calc(100% - 184px - 48px);
    background-color: rgba(0, 0, 255, 0);
  }
</style>