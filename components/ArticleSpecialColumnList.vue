<template>
  <div class="gb-component-ascl-container">
    <template v-for="(item, index) in specialColumns" :key="index">
      <div :class="index > 0 ? 'gb-component-ascl-item-container m-top-16' : 'gb-component-ascl-item-container'">
        <img class="gb-component-ascl-item-cover-image" :src="item.coverImage"/>
        <div class="gb-component-ascl-item-info-container">
          <p class="gb-component-ascl-item-info-name">{{item.name}}</p>
          <p class="gb-component-ascl-item-info-desc">{{item.desc}}</p>
          <div class="gb-component-ascl-item-info-pops-container">
            <div class="gb-component-ascl-item-info-pops-item-container">
              <img class="gb-component-ascl-item-info-pops-item-icon" src="/icons/icon-read-views-light@2x.png"/>
              <span class="gb-component-ascl-item-info-pops-item-text">{{item.readViews}}</span>
            </div>
            <div class="gb-component-ascl-item-info-pops-item-container m-left-24px">
              <img class="gb-component-ascl-item-info-pops-item-icon" src="/icons/icon-edit-light@2x.png"/>
              <span class="gb-component-ascl-item-info-pops-item-text">{{item.articles}}</span>
            </div>
            <div class="gb-component-ascl-item-info-pops-item-container m-left-24px">
              <img class="gb-component-ascl-item-info-pops-item-icon" src="/icons/icon-time-light@2x.png"/>
              <span class="gb-component-ascl-item-info-pops-item-text">{{item.date}}</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  const specialColumns = [
  {
    coverImage: "/images/todo-delete/article-special-column-cover-image-one@2x.png",
    name: "微信小程序研发",
    desc: "全部原创编写微信小程序研发相关文章专栏，Bug修复、教程等等",
    readViews: "1.1K",
    articles: 12,
    date: "2022-11-05"
  },
  {
    coverImage: "/images/todo-delete/article-special-column-cover-image-two@2x.png",
    name: "企业官网研发",
    desc: "企业官网研发中的各种体验和项目案例…",
    readViews: "1.1K",
    articles: 12,
    date: "2022-11-05"
  },
  {
    coverImage: "/images/todo-delete/acticle-special-column-cover-image-three@2x.png",
    name: "UI设计",
    desc: "被逼无奈自学UI设计的种...",
    readViews: "1.1K",
    articles: 12,
    date: "2022-11-05"
  }
]
</script>

<style scoped>
  /* asc is article special column list abbreviation */
  .gb-component-ascl-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 432px;
  }
  .gb-component-ascl-item-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 98px;
    border-bottom: 1px solid #a7abb333;
    padding-bottom: 16px;
  }
  .gb-component-ascl-item-cover-image {
    width: 140px;
    height: 98px;
  }
  .gb-component-ascl-item-info-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 276px;
    margin-left: 16px;
  }
  .gb-component-ascl-item-info-name {
    height: 25px;
    font-weight: 600;
    font-size: 18px;
    color: #18191B;
    letter-spacing: 2px;
    margin: 0 0 0 0;
  }
  .gb-component-ascl-item-info-desc {
    height: 40px;
    font-weight: 400;
    font-size: 14px;
    color: #A7ABB3;
    letter-spacing: 0;
    margin-top: 8px;
    margin-bottom: 0;
  }
  .gb-component-ascl-item-info-pops-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 8px;
  }
  .gb-component-ascl-item-info-pops-item-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .gb-component-ascl-item-info-pops-item-icon {
    width: 16px;
    height: 16px;
  }
  .gb-component-ascl-item-info-pops-item-text {
    font-weight: 400;
    font-size: 12px;
    color: #18191B;
    letter-spacing: 0;
    margin-left: 4px;
  }
</style>