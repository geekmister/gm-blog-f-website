<template>
  <div class="gm-page-article-details-container">
    <!-- article detail & recommend read container -->
    <div class="gm-page-article-details-dr-container">
      <!-- article detail container-->
      <div class="gm-page-article-details-dr-article-detail-container">
        <!-- article info container -->
        <div class="gm-page-article-details-dr-article-detail-info-container">
          <!-- article abstract container -->
          <div class="gm-page-article-details-dr-article-detail-info-abstract-container">
            <img class="gm-page-article-details-dr-article-detail-info-abstract-author-image" :src="articleData.author.image"/>
            <div class="gm-page-article-details-dr-article-detail-info-abstract-others-container">
              <p class="gm-page-article-details-dr-article-detail-info-abstract-others-author-name">{{articleData.author.name}}</p>
              <div class="gm-page-article-details-dr-article-detail-info-abstract-others-labels-container">
                <div class="gm-page-article-details-dr-article-detail-info-abstract-others-labels-item-container">
                  <img class="gm-page-article-details-dr-article-detail-info-abstract-others-labels-item-icon" src="/icons/icon-time@2x.png"/>
                  <span class="gm-page-article-details-dr-article-detail-info-abstract-others-labels-item-text m-left-8">{{articleData.info.publishTime}}</span>
                </div>
                <div class="gm-page-article-details-dr-article-detail-info-abstract-others-labels-item-container m-left-16">
                  <img class="gm-page-article-details-dr-article-detail-info-abstract-others-labels-item-icon" src="/icons/icon-date@2x.png"/>
                  <span class="gm-page-article-details-dr-article-detail-info-abstract-others-labels-item-text m-left-8">{{articleData.info.publishDate}}</span>
                </div>
                <div class="gm-page-article-details-dr-article-detail-info-abstract-others-labels-item-container m-left-16">
                  <img class="gm-page-article-details-dr-article-detail-info-abstract-others-labels-item-icon" src="/icons/icon-read-views@2x.png"/>
                  <span class="gm-page-article-details-dr-article-detail-info-abstract-others-labels-item-text m-left-8">{{articleData.info.recommendReadTime}}</span>
                </div>
                <div class="gm-page-article-details-dr-article-detail-info-abstract-others-labels-item-container m-left-16">
                  <img class="gm-page-article-details-dr-article-detail-info-abstract-others-labels-item-icon m-left-8" src="/icons/icon-location@2x.png"/>
                  <span class="gm-page-article-details-dr-article-detail-info-abstract-others-labels-item-text">{{articleData.info.publishAddress}}</span>
                </div>
              </div>
            </div>
            <img src=""/>
          </div>
          <!-- article cover image container -->
          <div>
            <img src=""/>
            <span></span>
          </div>
          <!-- article title container -->
          <div>
            <span></span>
          </div>
          <!-- article labels container -->
          <div>
            <div>
              <span></span>
            </div>
          </div>
        </div>
        <!-- article content container -->
        <div>
          <p></p>
        </div>
        <!-- article end container -->
        <div>
          END
        </div>
      </div>
      <!-- recommend read container -->
      <div>
        <p>推荐阅读</p>
        <!-- article list container -->
        <div>
          <template>
            <NuxtLink to="/article-details">
              <div>
                <img src=""/>
                <p></p>
                <p></p>
                <div />
                <div>
                  <div>
                    <img src=""/>
                    <sapn></sapn>
                  </div>
                  <div>
                    <img src=""/>
                    <sapn></sapn>
                  </div>
                  <div>
                    <img src=""/>
                    <sapn></sapn>
                  </div>
                </div>
                <div>
                  <span></span>
                </div>
              </div>
            </NuxtLink>
          </template>
        </div>
      </div>
    </div>
    <!-- article special columns container -->
    <div>
      <p>文章专栏</p>
      <template>
        <!-- article special columns container -->
        <div>
          <img src=""/>
          <div>
            <p></p>
            <p></p>
            <div>
              <div>
                <img src=""/>
                <span></span>
              </div>
              <div>
                <img/>
                <span></span>
              </div>
              <div>
                <img src=""/>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
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
    }
  }

</script>

<style scoped>
  .gm-page-article-details-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 1392px;
    padding: 32px 24px 32px 24px;
  }

    /* article detail & recommend read */
    .gm-page-article-details-dr-container {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }

      /* article detail */
      .gm-page-article-details-dr-article-detail-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
      }

        /* article detail info */
        .gm-page-article-details-dr-article-detail-info-container {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
        }

          /* article detail info abstract */
          .gm-page-article-details-dr-article-detail-info-abstract-container {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: flex-start;
          }
            .gm-page-article-details-dr-article-detail-info-abstract-author-image {
              width: 64px;
              height: 64px;
            }
            .gm-page-article-details-dr-article-detail-info-abstract-others-container {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: flex-start;
              margin-left: 16px;
            }
              .gm-page-article-details-dr-article-detail-info-abstract-others-author-name {
                font-weight: 600;
                font-size: 18px;
                color: #18191B;
                letter-spacing: 2px;
                margin: 0 0;
              }
              .gm-page-article-details-dr-article-detail-info-abstract-others-labels-container {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                margin-top: 8px;
              }
                .gm-page-article-details-dr-article-detail-info-abstract-others-labels-item-container {
                  display: flex;
                  flex-direction: row;
                  justify-content: flex-start;
                  align-items: flex-start;
                }
                  .gm-page-article-details-dr-article-detail-info-abstract-others-labels-item-icon {
                    width: 14px;
                    height: 14px;
                  }
                  .gm-page-article-details-dr-article-detail-info-abstract-others-labels-item-text {
                    font-weight: 400;
                    font-size: 12px;
                    color: #A7ABB3;
                    letter-spacing: 0;
                  }

</style>