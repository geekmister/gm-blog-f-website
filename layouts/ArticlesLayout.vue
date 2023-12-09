<template>
  <t-layout style="height: 100%">
    <t-header style="height: auto;">
      <Header />
    </t-header>
    <t-layout>
      <t-content>Content</t-content>
      <t-aside>Aside</t-aside>
    </t-layout>
    <t-footer class="footer">
      <div style="width: 500px">
        <t-table row-key="index" :data="data" :columns="columns" :bordered="false" height="200" />
      </div>
    </t-footer>
  </t-layout>
</template>

<script setup lang="jsx">
  import { ref } from 'vue';

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
            <t-link href={row.about.link} theme="primary">{row.about.name}</t-link>
        );
      }
    },
    {
      colKey: 'links',
      title: '友情链接',
      width: '100',
      cell: (h, {row}) => {
        return (
            <t-link theme="primary" href={row.links.link}>{row.links.name}</t-link>
        );
      }
    },
    {
      colKey: 'works',
      title: '我的作品',
      width: '100',
      cell: (h, {row}) => {
        return (
            <t-link theme="primary" href={row.links.link}>{row.works.name}</t-link>
        );
      }
    }
  ]);
</script>

<style scoped>
  .footer {
    width: 100%; height: auto; position: absolute; bottom: 0; background: #a7abb326;
  }

  :deep(.t-table th), :deep(.t-table td) {
    border-bottom: none
  }

  :deep(.t-table tr) {
    background-color: rgba(0, 0, 255, 0);
  }

  :deep(.t-table) {
    background-color: rgba(0, 0, 255, 0);
  }

</style>