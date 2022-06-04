<template>
  <div class="exclusive">
    <h2>Эксклюзив</h2>
    <div class="exclusive_first">
      <div
        class="exclusive_item"
        v-for="item in list.slice(0, 2)"
        :key="item.id"
      >
        <!-- <div :style="[ item.img ? { 'background-image': item.img } : {} ]"></div> -->
        <img :src="`https://kapibackend.abelsharman.kz/${item.img}`" alt="" />
        <span>#{{ item.tag }}</span>
        <h3 @click="goPage(item.id)" v-text="item.title"></h3>
        <h4 v-text="item.subtitle"></h4>
        <p v-text="item.date"></p>
      </div>
    </div>
    <div class="exclusive_second">
      <div
        class="exclusive_item"
        v-for="item in list.slice(2, list.length)"
        :key="item.id"
      >
        <!-- <div :style="[ item.img ? { 'background-image': item.img } : {} ]"></div> -->
        <img :src="`https://kapibackend.abelsharman.kz/${item.img}`" alt="" />
        <span>#{{ item.tag }}</span>
        <h3 @click="goPage(item.id)" v-text="item.title"></h3>
        <h4 v-text="item.subtitle"></h4>
        <p v-text="item.date"></p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    getArticles() {
      this.$axios.$get("/api/news/").then((res) => {
        this.list = res;
      });
    },
    goPage(id) {
      this.$router.push(`/News/${id}`);
    },
  },
  mounted() {
    this.getArticles();
  },
};
</script>

<style lang="scss" scoped>
.exclusive {
  margin: 64px 0 32px 0;
  h2 {
    font-family: "Gilroy", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    text-transform: uppercase;
    color: #333333;
    margin-bottom: 32px;
  }
  .exclusive_first {
    display: grid;
    grid-template-columns: repeat(2, 48%);
    grid-gap: 2%;
    justify-content: space-between;
  }
  .exclusive_second {
    display: grid;
    grid-template-columns: repeat(4, 22%);
    grid-gap: 4%;
    justify-content: space-between;
    .exclusive_item {
      img {
        height: 280px;
      }
    }
  }
  &_item {
    img {
      width: 100%;
      height: 350px;
      object-fit: cover;
      margin-bottom: 8px;
    }
    span {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      margin-right: 8px;
      color: #ef3124;
    }
    h3 {
      margin: 16px 0 8px 0;
      font-family: "Gilroy", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 23px;
      color: #181818;
      cursor: pointer;
    }
    h4 {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #333333;
      margin-bottom: 16px;
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
}

@media all and (max-width: 768px) {
  .exclusive {
    margin: 24x 0 16px 0;
    h2 {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 20px;
    }
    .exclusive_first {
      display: flex;
      flex-direction: column;
    }
    .exclusive_second {
      display: flex;
      flex-direction: column;
      .exclusive_item {
        img {
          width: 100%;
        }
      }
    }
    &_item {
      margin-bottom: 10px;
      img {
        width: 100%;
        height: 100%;
        margin-bottom: 4px;
      }
      span {
        font-size: 10px;
        line-height: 10px;
        margin-right: 6px;
      }
      h3 {
        margin: 8px 0 4px 0;
        font-size: 16px;
        line-height: 20px;
      }
      h4 {
        font-size: 12px;
        line-height: 17px;
        margin-bottom: 8px;
      }
      p {
        font-size: 10px;
        line-height: 16px;
        color: #333333;
      }
    }
  }
}
</style>