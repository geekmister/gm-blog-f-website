<template>
  <div class="gb-page-article-details-container">
    <!-- article detail & recommend read container -->
    <div class="gb-page-article-details-dr-container">
      <!-- article detail container-->
      <div class="gb-page-article-details-dr-article-detail-container">
        <!-- article info container -->
        <div class="gb-page-article-details-dr-article-detail-info-container">
          <!-- article abstract container -->
          <div class="gb-page-article-details-dr-article-detail-info-abstract-container">
            <div class="gb-page-article-details-dr-article-detail-info-abstract-left-container">
              <img class="gb-page-article-details-dr-article-detail-info-abstract-author-image" :src="articleData.author.image"/>
              <div class="gb-page-article-details-dr-article-detail-info-abstract-others-container">
                <p class="gb-page-article-details-dr-article-detail-info-abstract-others-author-name">{{articleData.author.name}}</p>
                <div class="gb-page-article-details-dr-article-detail-info-abstract-others-labels-container">
                  <div class="gb-page-article-details-dr-article-detail-info-abstract-others-labels-item-container">
                    <img class="gb-page-article-details-dr-article-detail-info-abstract-others-labels-item-icon" src="/icons/icon-time-dark@2x.png"/>
                    <span class="gb-page-article-details-dr-article-detail-info-abstract-others-labels-item-text m-left-8">{{articleData.info.publishTime}}</span>
                  </div>
                  <div class="gb-page-article-details-dr-article-detail-info-abstract-others-labels-item-container m-left-16">
                    <img class="gb-page-article-details-dr-article-detail-info-abstract-others-labels-item-icon" src="/icons/icon-date-dark@2x.png"/>
                    <span class="gb-page-article-details-dr-article-detail-info-abstract-others-labels-item-text m-left-8">{{articleData.info.publishDate}}</span>
                  </div>
                  <div class="gb-page-article-details-dr-article-detail-info-abstract-others-labels-item-container m-left-16">
                    <img class="gb-page-article-details-dr-article-detail-info-abstract-others-labels-item-icon" src="/icons/icon-read-views-dark@2x.png"/>
                    <span class="gb-page-article-details-dr-article-detail-info-abstract-others-labels-item-text m-left-8">{{articleData.info.recommendReadTime}}</span>
                  </div>
                  <div class="gb-page-article-details-dr-article-detail-info-abstract-others-labels-item-container m-left-16">
                    <img class="gb-page-article-details-dr-article-detail-info-abstract-others-labels-item-icon" src="/icons/icon-location-dark@2x.png"/>
                    <span class="gb-page-article-details-dr-article-detail-info-abstract-others-labels-item-text m-left-8">{{articleData.info.publishAddress}}</span>
                  </div>
                </div>
              </div>
            </div>
            <img class="gb-page-article-details-dr-article-detail-info-abstract-right-image" src="/icons/icon-link-dark@2x.png"/>
          </div>
          <!-- article cover image container -->
          <div class="gb-page-article-details-dr-article-detail-info-cover-container m-top-24">
            <img class="gb-page-article-details-dr-article-detail-info-cover-image" :src="articleData.cover.image"/>
            <span class="gb-page-article-details-dr-article-detail-info-cover-desc m-top-8">{{articleData.cover.desc}}</span>
          </div>
          <!-- article title container -->
          <div class="gb-page-article-details-dr-article-detail-info-title-container">
            <span class="gb-page-article-details-dr-article-detail-info-title-">{{articleData.article.title}}</span>
          </div>
          <!-- article labels container -->
          <div class="gb-page-article-details-dr-article-detail-info-labels-container">
            <template v-for="(item, index) in articleData.labels" :key="index">
              <div :class="index > 0 ? 'gb-page-article-details-dr-article-detail-info-labels-item-container m-left-16' : 'gb-page-article-details-dr-article-detail-info-labels-item-container'">
                <span class="gb-page-article-details-dr-article-detail-info-labels-item-text">{{item}}</span>
              </div>
            </template>

          </div>
        </div>
        <!-- article content container -->
        <div class="gb-page-article-details-dr-article-detail-content-container">
          <p class="gb-page-article-details-dr-article-detail-content">
            观活但严而报算报边门太林且同米阶派做快向二农包该对几严南影活王么习办象速公声矿了好明。太联青列就始其深准种任走府真约例处放派气近置白利资日成把运解观省局为其业示形八制花发她导力没心长取原电又使制开进代组者江用及问。区状期起接领题战许切理究么量参约新候极军如候情方性大必由原消品的度系存内照至生白少法并断元教精领团入精和集际直时场立可热从步自又京酸约验。见专能社例立今别行族般必世么道术写化斗后天部采平教较无候关命住形人准需石空角省东证关值非际山飞建界进因光小领打标住线运际世极北引表量。<br/><br/>
            观活但严而报算报边门太林且同米阶派做快向二农包该对几严南影活王么习办象速公声矿了好明。太联青列就始其深准种任走府真约例处放派气近置白利资日成把运解观省局为其业示形八制花发她导力没心长取原电又使制开进代组者江用及问。区状期起接领题战许切理究么量参约新候极军如候情方性大必由原消品的度系存内照至生白少法并断元教精领团入精和集际直时场立可热从步自又京酸约验。见专能社例立今别行族般必世么道术写化斗后天部采平教较无候关命住形人准需石空角省东证关值非际山飞建界进因光小领打标住线运际世极北引表量。<br/><br/>
            观活但严而报算报边门太林且同米阶派做快向二农包该对几严南影活王么习办象速公声矿了好明。太联青列就始其深准种任走府真约例处放派气近置白利资日成把运解观省局为其业示形八制花发她导力没心长取原电又使制开进代组者江用及问。区状期起接领题战许切理究么量参约新候极军如候情方性大必由原消品的度系存内照至生白少法并断元教精领团入精和集际直时场立可热从步自又京酸约验。见专能社例立今别行族般必世么道术写化斗后天部采平教较无候关命住形人准需石空角省东证关值非际山飞建界进因光小领打标住线运际世极北引表量。<br/><br/>
            观活但严而报算报边门太林且同米阶派做快向二农包该对几严南影活王么习办象速公声矿了好明。太联青列就始其深准种任走府真约例处放派气近置白利资日成把运解观省局为其业示形八制花发她导力没心长取原电又使制开进代组者江用及问。区状期起接领题战许切理究么量参约新候极军如候情方性大必由原消品的度系存内照至生白少法并断元教精领团入精和集际直时场立可热从步自又京酸约验。见专能社例立今别行族般必世么道术写化斗后天部采平教较无候关命住形人准需石空角省东证关值非际山飞建界进因光小领打标住线运际世极北引表量。<br/><br/>
            观活但严而报算报边门太林且同米阶派做快向二农包该对几严南影活王么习办象速公声矿了好明。太联青列就始其深准种任走府真约例处放派气近置白利资日成把运解观省局为其业示形八制花发她导力没心长取原电又使制开进代组者江用及问。区状期起接领题战许切理究么量参约新候极军如候情方性大必由原消品的度系存内照至生白少法并断元教精领团入精和集际直时场立可热从步自又京酸约验。见专能社例立今别行族般必世么道术写化斗后天部采平教较无候关命住形人准需石空角省东证关值非际山飞建界进因光小领打标住线运际世极北引表量。
          </p>
        </div>
        <!-- article end container -->
        <div class="gb-page-article-details-dr-article-detail-end-container">
          <span class="gb-page-article-details-dr-article-detail-end-text">END</span>
        </div>
      </div>
      <!-- recommend read container -->
      <div>
        <div class="gb-page-article-details-dr-recommend-read-tag-container">
          <p class="gb-page-article-details-dr-recommend-read-tag-text">推荐阅读</p>
        </div>
        <!-- article list container -->
        <div>
          <ArticleList/>
        </div>
      </div>
    </div>

    <!-- article special columns -->
    <div class="gb-page-article-details-asc-container">
      <p class="gb-page-article-details-asc-title">文章专栏</p>
      <!-- article special columns list -->
      <ArticleSpecialColumnList/>
    </div>
  </div>
</template>

<script setup lang="ts">
  import ArticleList from "~/components/ArticleList.vue";

  const articleData = {
    author: {
      image: "/images/logo@2x.png",
      name: "Geekmister"
    },
    info: {
      publishTime: "19:25 PM",
      publishDate: "2022-11-07",
      recommendReadTime: "9分钟",
      publishAddress: "北京 ~ 颐和园景区"
    },
    cover: {
      image: "/images/todo-delete/acticle-cover-image-two@2x.png",
      desc: "将听象圆阶毛了头同对易率置已活接头管机"
    },
    article: {
      title: "少，确更好"
    },
    labels: ["UI设计", "产品设计"]
  }
</script>

<style scoped>
  .gb-page-article-details-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 1392px;
    padding: 32px 24px 32px 24px;
  }

  /* article detail & recommend read */
  .gb-page-article-details-dr-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 912px;
  }

  /* article detail */
  .gb-page-article-details-dr-article-detail-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }

  /* article detail info */
  .gb-page-article-details-dr-article-detail-info-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }

  /* article detail info abstract */
  .gb-page-article-details-dr-article-detail-info-abstract-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  .gb-page-article-details-dr-article-detail-info-abstract-left-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 888px;
  }
  .gb-page-article-details-dr-article-detail-info-abstract-author-image {
    width: 64px;
    height: 64px;
  }
  .gb-page-article-details-dr-article-detail-info-abstract-others-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 16px;
  }
  .gb-page-article-details-dr-article-detail-info-abstract-others-author-name {
    font-weight: 600;
    font-size: 18px;
    color: #18191B;
    letter-spacing: 2px;
    margin: 0 0;
  }
  .gb-page-article-details-dr-article-detail-info-abstract-others-labels-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 8px;
  }
  .gb-page-article-details-dr-article-detail-info-abstract-others-labels-item-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .gb-page-article-details-dr-article-detail-info-abstract-others-labels-item-icon {
    width: 14px;
    height: 14px;
  }
  .gb-page-article-details-dr-article-detail-info-abstract-others-labels-item-text {
    font-weight: 400;
    font-size: 12px;
    color: #A7ABB3;
    letter-spacing: 0;
  }
  .gb-page-article-details-dr-article-detail-info-abstract-right-image {
    width: 24px;
    height: 24px;
  }
  .gb-page-article-details-dr-article-detail-info-cover-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  .gb-page-article-details-dr-article-detail-info-cover-image {
    width: 912px;
    height: 388px;
  }
  .gb-page-article-details-dr-article-detail-info-cover-desc {
    font-weight: 400;
    font-size: 12px;
    color: #A7ABB3;
    letter-spacing: 0;
  }
  .gb-page-article-details-dr-article-detail-info-title-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding-top: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #a7abb333;
  }
  .gb-page-article-details-dr-article-detail-info-title- {
    font-weight: 600;
    font-size: 32px;
    color: #18191B;
    letter-spacing: 2px;
  }
  .gb-page-article-details-dr-article-detail-info-labels-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding-top: 24px;
    padding-bottom: 24px;
  }

  .gb-page-article-details-dr-article-detail-info-labels-item-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 88px;
    height: 36px;
    background-color: #E94328;
    border-radius: 18px;
  }
  .gb-page-article-details-dr-article-detail-info-labels-item-text {
    font-weight: 600;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0;
  }

  /* article content */
  .gb-page-article-details-dr-article-detail-content-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }
  .gb-page-article-details-dr-article-detail-content {
    font-weight: 400;
    font-size: 14px;
    color: #52555A;
    letter-spacing: 2px;
    line-height: 25px;
    margin: 0 0;
  }

  /* article end */
  .gb-page-article-details-dr-article-detail-end-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 81px;
    border-bottom: 1px solid #a7abb333;;
  }
  .gb-page-article-details-dr-article-detail-end-text {
    font-weight: 600;
    font-size: 24px;
    color: #18191B;
    letter-spacing: 1.5px;
  }
  .gb-page-article-details-dr-recommend-read-tag-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 81px;
    margin-top: 8px;
  }
  .gb-page-article-details-dr-recommend-read-tag-text {
    font-weight: 600;
    font-size: 24px;
    color: #18191B;
    letter-spacing: 2px;
    margin: 0 0;
  }

  /* article special column */

  /* asc is article special column abbreviation */
  .gb-page-article-details-asc-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 432px;
    border-left: 1px solid #a7abb333;
    padding-left: 23px;
    margin-left: 24px;
  }
  .gb-page-article-details-asc-title {
    font-weight: 600;
    font-size: 24px;
    color: #18191B;
    letter-spacing: 2px;
    margin: 0 0 24px 0;
  }
</style>