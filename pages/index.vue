<template>
  <div class="gb-page-index-container">
    <ArticleList/>
    <!-- article special columns -->
    <div class="gb-page-index-asc-container">
      <p class="gb-page-index-asc-title">文章专栏</p>
      <!-- article special columns list -->
      <ArticleSpecialColumnList/>
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
    width: 1392px;
    padding: 32px 24px 32px 24px;
  }

  /* article special columns */
  /* asc is article special column abbreviation */
  .gb-page-index-asc-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 432px;
    border-left: 1px solid #a7abb333;
    padding-left: 23px;
    margin-left: 24px;
  }
  .gb-page-index-asc-title {
    font-weight: 600;
    font-size: 24px;
    color: #18191B;
    letter-spacing: 2px;
    margin: 0 0 24px 0;
  }
</style>