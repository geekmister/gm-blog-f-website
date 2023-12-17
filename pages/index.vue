<template>
  <div class="gb-page-index-container">
    <div class="gb-page-index-article-list-container">
      <template v-for="(item, index) in articles" :key="index">
        <NuxtLink to="/article-details">
          <div class="gb-page-index-article-list-item-container">
            <img class="gb-page-index-article-list-item-cover-image" :src="item.coverImage"/>
            <p class="gb-page-index-article-list-item-title">{{item.title}}</p>
            <p class="gb-page-index-article-list-item-desc">{{item.desc}}</p>
            <div class="gb-page-index-article-list-item-divider"/>
            <div class="gb-page-index-article-list-item-props-container">
              <div class="gb-page-index-article-list-item-props-item-container">
                <img class="gb-page-index-article-list-item-props-item-icon"
                     src="/icons/icon-time@2x.png"/>
                <sapn class="gb-page-index-article-list-item-props-item-text">{{item.time}}</sapn>
              </div>
              <div class="gb-page-index-article-list-item-props-item-container gb-page-index-article-list-item-props-item-space">
                <img class="gb-page-index-article-list-item-props-item-icon"
                     src="/icons/icon-location@2x.png"/>
                <sapn class="gb-page-index-article-list-item-props-item-text">{{item.location}}</sapn>
              </div>
              <div class="gb-page-index-article-list-item-props-item-container gb-page-index-article-list-item-props-item-space">
                <img class="gb-page-index-article-list-item-props-item-icon"
                     src="/icons/icon-read-views@2x.png"/>
                <sapn class="gb-page-index-article-list-item-props-item-text">{{item.readViews}}</sapn>
              </div>
            </div>
            <div class="gb-page-index-article-list-item-date-container">
              <span class="gb-page-index-article-list-item-date">{{item.date}}</span>
            </div>
          </div>
        </NuxtLink>
      </template>
    </div>
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
                <img class="gb-page-index-article-special-column-item-info-pops-item-icon" src="/icons/icon-read-views@2x.png"/>
                <span class="gb-page-index-article-special-column-item-info-pops-item-text">{{item.readViews}}</span>
              </div>
              <div class="gb-page-index-article-special-column-item-info-pops-item-container gb-page-index-article-special-column-item-info-pops-item-space">
                <img class="gb-page-index-article-special-column-item-info-pops-item-icon" src="/icons/icon-edit-acticle@2x.png"/>
                <span class="gb-page-index-article-special-column-item-info-pops-item-text">{{item.articles}}</span>
              </div>
              <div class="gb-page-index-article-special-column-item-info-pops-item-container gb-page-index-article-special-column-item-info-pops-item-space">
                <img class="gb-page-index-article-special-column-item-info-pops-item-icon" src="/icons/icon-time@2x.png"/>
                <span class="gb-page-index-article-special-column-item-info-pops-item-text">{{item.date}}</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  const articles = [
    {
      coverImage: "/images/todo-delete/article-cover-image-one@2x.png",
      title: "伏尔加河畔的芭蕾舞蹈 | 旅游",
      desc: "次从农六可日义从商主做验北门头还军会现元及条而风比证难个效后于七级品展日农且构制队种土斯图市直上越常米求拉无代领亲治热。治信着军照级照与音小联常太清算体查高感断利本间没从情称强何问型引品西红规为出动解对成办。重场已位形五青王术权就历家已称由进用热四统实正识前品管同路油教织第收十中家定角家使边那反飞制约备感光到广支…",
      date: "9 JUN 2022",
      time: "10:25 PM",
      location: "北京 ~ 颐和园景区",
      readViews: "1.1K"
    },
    {
      coverImage: "/images/todo-delete/acticle-cover-image-two@2x.png",
      title: "伏尔加河畔的芭蕾舞蹈 | 旅游",
      desc: "次从农六可日义从商主做验北门头还军会现元及条而风比证难个效后于七级品展日农且构制队种土斯图市直上越常米求拉无代领亲治热。治信着军照级照与音小联常太清算体查高感断利本间没从情称强何问型引品西红规为出动解对成办。重场已位形五青王术权就历家已称由进用热四统实正识前品管同路油教织第收十中家定角家使边那反飞制约备感光到广支…",
      date: "9 JUN 2022",
      time: "10:25 PM",
      location: "北京 ~ 颐和园景区",
      readViews: "1.1K"
    }
  ]

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
  .gb-page-index-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 1440px;
    padding-top: 8px;
  }

  .gb-page-index-article-list-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 912px;
  }

  .gb-page-index-article-list-item-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    background: #FFFFFF;
    box-shadow: -2px -2px 10px 0 #A7ABB3, 2px 2px 10px 0 #A7ABB3;
    position: relative;
    margin-top: 24px;
  }

  .gb-page-index-article-list-item-cover-image {
    width: 100%;
    height: 388px;
  }

  .gb-page-index-article-list-item-title {
    margin: 24px 24px 0 24px;
    font-weight: 600;
    font-size: 18px;
    color: #18191B;
    letter-spacing: 2px;
    height: 25px;
    line-height: 25px;
  }

  .gb-page-index-article-list-item-desc {
    margin: 8px 24px 0 24px;
    font-weight: 400;
    font-size: 14px;
    color: #52555A;
    letter-spacing: 0;
  }

  .gb-page-index-article-list-item-divider {
    width: calc(100% - 24px - 24px);
    margin-top: 24px;
    margin-left: 24px;
    margin-right: 24px;
    border-bottom: 1px solid #a7abb333;
  }

  .gb-page-index-article-list-item-props-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: calc(100% - 24px - 24px);
    margin: 26px 24px 24px 24px;
  }

  .gb-page-index-article-list-item-props-item-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .gb-page-index-article-list-item-props-item-icon {
    width: 16px;
    height: 16px;
  }

  .gb-page-index-article-list-item-props-item-text {
    font-weight: 400;
    font-size: 12px;
    color: #18191B;
    letter-spacing: 0;
    margin-left: 4px;
  }

  .gb-page-index-article-list-item-props-item-space {
    margin-left: 80px;
  }

  .gb-page-index-article-list-item-date-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 112px;
    height: 36px;
    background-color: #FFFFFF;
    border-radius: 18px;
    position: absolute;
    top: 24px;
    left: 24px;
  }

  .gb-page-index-article-list-item-date {
    font-weight: 600;
    font-size: 14px;
    color: #18191B;
    letter-spacing: 0;
  }

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