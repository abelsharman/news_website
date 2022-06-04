<template>
  <div class="main_news">
    <h2>Главные новости</h2>
    <img :src="`https://kapibackend.abelsharman.kz/${articles.img}`" alt="" />
    <span class="main_news_tag"> #{{ articles.tag }} </span>
    <h1 v-text="articles.title"></h1>
    <p v-text="articles.date"></p>
  </div>
</template>


<script>
export default {
  data() {
    return {
      info: {
        img: require("../assets/images/test/main_news.svg"),
        tags: ["#Политика", "#Мир"],
        name: "Россия отказалась участвовать в работе Совета Европы. Что это значит?",
        from_date: "неделю назад",
      },
      articles: [],
    };
  },
  methods: {
    getArticles() {
      this.$axios.$get("/api/news").then((res) => {
        console.log(res);
        this.articles = res[0];
        console.log(this.articles);
      });
    },
  },
  mounted() {
    this.getArticles();
  },
};
</script>

<style lang="scss" scoped>
.main_news {
  h2 {
    font-family: "Gilroy", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #333333;
  }
  img {
    width: 100%;
    margin: 22px 0 12px 0;
  }
  &_tag {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin-right: 8px;
    color: #ef3124;
  }
  h1 {
    font-family: "Gilroy", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 59px;
    color: #181818;
    margin: 8px 0;
  }
  p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #333333;
  }
}

@media all and (max-width: 768px) {
  .main_news {
    margin-bottom: 60px;
    h2 {
      font-size: 16px;
    }
    img {
      width: 100%;
      margin: 10px 0 5px 0;
    }
    &_tag {
      font-size: 10px;
    }
    h1 {
      font-size: 24px;
      line-height: 24px;
      margin: 4px 0;
    }
    p {
      font-size: 8px;
      line-height: 16px;
      color: #333333;
    }
  }
}
</style>