<template>
  <div class="gb-component-article-list-container">
    <template v-for="(item, index) in articles" :key="index">
      <NuxtLink to="/article-details">
        <div :class="index > 0 ? 'gb-component-article-list-item-container m-top-24': 'gb-component-article-list-item-container'">
          <img class="gb-component-article-list-item-cover-image" :src="item.coverImage"/>
          <p class="gb-component-article-list-item-title">{{item.title}}</p>
          <p class="gb-component-article-list-item-desc">{{item.desc}}</p>
          <div class="gb-component-article-list-item-desc-divider"/>
          <div class="gb-component-article-list-item-props-container">
            <div class="gb-component-article-list-item-props-item-container">
              <img class="gb-component-article-list-item-props-item-icon"
                   src="/icons/icon-time-light@2x.png"/>
              <sapn class="gb-component-article-list-item-props-item-text">{{item.time}}</sapn>
            </div>
            <div class="gb-component-article-list-item-props-item-container gb-component-article-list-item-props-item-space">
              <img class="gb-component-article-list-item-props-item-icon"
                   src="/icons/icon-location-light@2x.png"/>
              <sapn class="gb-component-article-list-item-props-item-text">{{item.location}}</sapn>
            </div>
            <div class="gb-component-article-list-item-props-item-container gb-component-article-list-item-props-item-space">
              <img class="gb-component-article-list-item-props-item-icon"
                   src="/icons/icon-read-views-light@2x.png"/>
              <sapn class="gb-component-article-list-item-props-item-text">{{item.readViews}}</sapn>
            </div>
          </div>
          <div class="gb-component-article-list-item-date-container">
            <span class="gb-component-article-list-item-date">{{item.date}}</span>
          </div>
        </div>
      </NuxtLink>
    </template>
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
</script>

<style scoped>
  .gb-component-article-list-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 912px;
  }

  .gb-component-article-list-item-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    background: #FFFFFF;
    box-shadow: -2px -2px 10px 0 #A7ABB3, 2px 2px 10px 0 #A7ABB3;
    position: relative;
  }

  .gb-component-article-list-item-cover-image {
    width: 100%;
    height: 388px;
  }

  .gb-component-article-list-item-title {
    margin: 24px 24px 0 24px;
    font-weight: 600;
    font-size: 18px;
    color: #18191B;
    letter-spacing: 2px;
    height: 25px;
    line-height: 25px;
  }

  .gb-component-article-list-item-desc {
    margin: 8px 24px 0 24px;
    font-weight: 400;
    font-size: 14px;
    color: #52555A;
    letter-spacing: 0;
  }

  .gb-component-article-list-item-desc-divider {
    width: calc(100% - 24px - 24px);
    margin-top: 24px;
    margin-left: 24px;
    margin-right: 24px;
    border-bottom: 1px solid #a7abb333;
  }

  .gb-component-article-list-item-props-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: calc(100% - 24px - 24px);
    margin: 26px 24px 24px 24px;
  }

  .gb-component-article-list-item-props-item-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .gb-component-article-list-item-props-item-icon {
    width: 16px;
    height: 16px;
  }

  .gb-component-article-list-item-props-item-text {
    font-weight: 400;
    font-size: 12px;
    color: #18191B;
    letter-spacing: 0;
    margin-left: 4px;
  }

  .gb-component-article-list-item-props-item-space {
    margin-left: 80px;
  }

  .gb-component-article-list-item-date-container {
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

  .gb-component-article-list-item-date {
    font-weight: 600;
    font-size: 14px;
    color: #18191B;
    letter-spacing: 0;
  }
</style>