<template>
  <div class="gb-page-index-article-special-column-container">
    <p class="gb-page-index-article-special-column-title">文章专栏</p>
    <template v-for="(item, index) in specialColumns" :key="index">
      <div class="gb-page-index-article-special-column-item-container">
        <img class="gb-page-index-article-special-column-item-cover-image" :src="item.coverImage"/>
        <div class="gb-page-index-article-special-column-item-info-container">
          <p class="gb-page-index-article-special-column-item-info-name">{{item.name}}</p>
          <p class="gb-page-index-article-special-column-item-info-desc">{{item.desc}}</p>
          <div class="gb-page-index-article-special-column-item-info-pops-container">
            <div class="gb-page-index-article-special-column-item-info-pops-item-container">
              <img class="gb-page-index-article-special-column-item-info-pops-item-icon" src="/icons/icon-read-views-light@2x.png"/>
              <span class="gb-page-index-article-special-column-item-info-pops-item-text">{{item.readViews}}</span>
            </div>
            <div class="gb-page-index-article-special-column-item-info-pops-item-container gb-page-index-article-special-column-item-info-pops-item-space">
              <img class="gb-page-index-article-special-column-item-info-pops-item-icon" src="/icons/icon-edit-light@2x.png"/>
              <span class="gb-page-index-article-special-column-item-info-pops-item-text">{{item.articles}}</span>
            </div>
            <div class="gb-page-index-article-special-column-item-info-pops-item-container gb-page-index-article-special-column-item-info-pops-item-space">
              <img class="gb-page-index-article-special-column-item-info-pops-item-icon" src="/icons/icon-time-light@2x.png"/>
              <span class="gb-page-index-article-special-column-item-info-pops-item-text">{{item.date}}</span>
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
  .gb-page-index-article-special-column-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-left: 1px solid #a7abb333;
    margin-left: 24px;
    margin-top: 16px;
  }

  .gb-page-index-article-special-column-title {
    height: 33px;
    font-weight: 600;
    font-size: 24px;
    color: #18191B;
    letter-spacing: 2px;
    margin: 0 0 0 24px;
  }

  .gb-page-index-article-special-column-item-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: calc(100% - 24px);
    height: 113px;
    margin-left: 24px;
    margin-top: 24px;
    border-bottom: 1px solid #a7abb333;
    padding-bottom: 16px;
  }

  .gb-page-index-article-special-column-item-cover-image {
    width: 140px;
    height: 98px;
  }

  .gb-page-index-article-special-column-item-info-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin-left: 24px;
  }

  .gb-page-index-article-special-column-item-info-name {
    height: 25px;
    font-weight: 600;
    font-size: 18px;
    color: #18191B;
    letter-spacing: 2px;
    margin: 0 0 0 0;
  }

  .gb-page-index-article-special-column-item-info-desc {
    height: 40px;
    font-weight: 400;
    font-size: 14px;
    color: #A7ABB3;
    letter-spacing: 0;
    margin: 8px 24px 0 0;
  }

  .gb-page-index-article-special-column-item-info-pops-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 8px;
  }

  .gb-page-index-article-special-column-item-info-pops-item-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .gb-page-index-article-special-column-item-info-pops-item-icon {
    width: 16px;
    height: 16px;
  }

  .gb-page-index-article-special-column-item-info-pops-item-text {
    font-weight: 400;
    font-size: 12px;
    color: #18191B;
    letter-spacing: 0;
    margin-left: 4px;
  }

  .gb-page-index-article-special-column-item-info-pops-item-space {
    margin-left: 24px;
  }
</style>