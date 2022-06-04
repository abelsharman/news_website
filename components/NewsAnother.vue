<template>
  <div class="another_news">
    <h2>Другие новости</h2>
    <div class="another_section">
      <div class="another_section_item" v-for="item in list" :key="item.id">
        <h3 v-text="item.tag"></h3>
        <h1 @click="goPage(item.id)" v-text="item.title"></h1>
        <p v-text="item.from_date"></p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      list: [],
      items: [],
    };
  },
  methods: {
    goPage(id) {
      this.$router.push(`/News/${id}`);
    },
    getArticles() {
      this.$axios.$get("/api/news/").then((res) => {
        this.list = res.slice(1, 7);
      });
    },
  },
  mounted() {
    this.getArticles();
  },
};
</script>

<style lang="scss" scoped>
.another_news {
  h2 {
    font-family: "Gilroy", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 40px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #333333;
  }
  .another_section {
    margin-top: 32px;
    &_item {
      margin-bottom: 24px;
      h3 {
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #ef3124;
      }
      h1 {
        margin: 8px 0;
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #181818;
        cursor: pointer;
      }
      p {
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #333333;
      }
    }
  }
}

@media all and (max-width: 768px) {
  .another_news {
    h2 {
      font-size: 16px;
      line-height: 20px;
      display: flex;
      align-items: center;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #333333;
    }
    .another_section {
      margin-top: 16px;
      &_item {
        margin-bottom: 16px;
        h3 {
          font-size: 12px;
          line-height: 12px;
        }
        h1 {
          margin: 4px 0;
          font-size: 14px;
          line-height: 19px;
        }
        p {
          font-size: 10px;
        }
      }
    }
  }
}
</style>