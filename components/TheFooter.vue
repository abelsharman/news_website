<template>
  <div class="footer">
    <div class="footer_nav">
      <p
        v-for="(item, index) in list"
        :key="index"
        v-text="item.text"
        @click="nav(item.link)"
      ></p>
    </div>
    <img src="../assets/images/logo.svg" alt="" />
    <div class="footer_links">
      <p>Мы в социальных сетях</p>
      <div>
        <img src="../assets/images/tg.svg" alt="" />
        <img src="../assets/images/vk.svg" alt="" />
        <img src="../assets/images/insta.svg" alt="" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      list: [
        {
          text: "Главная",
          value: "main",
          link: "/",
        },
        {
          text: "Мир",
          value: "world",
          link: "/World",
        },
        {
          text: "Бизнес",
          value: "business",
          link: "/business",
        },
        {
          text: "Политика",
          value: "politology",
          link: "/politics",
        },
        {
          text: "Спорт",
          value: "sport",
          link: "/sport",
        },
        {
          text: "Подкасты",
          value: "podcasts",
          link: "/podcast",
        },
      ],
    };
  },
  methods: {
    nav(link) {
      this.$router.push(link);
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid #000000;
  padding: 16px 0 43px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  &_nav {
    p {
      margin: 16px 0;
      font-family: "Gilroy", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 1.11vw;
      line-height: 1.38vw;
      color: #333333;
      transition: 0.5s all ease;
      text-transform: uppercase;
      cursor: pointer;
    }
    p:hover {
      text-decoration-line: underline;
      color: #ef3124;
    }
  }
  &_links {
    text-align: right;
    p {
      font-family: "Gilroy", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 1.6vw;
      line-height: 2vw;
      text-align: right;
      text-transform: uppercase;
      color: #333333;
    }
  }
}

@media all and (max-width: 768px) {
  .footer {
    overflow-x: hidden;
    border-top: 1px solid #000000;
    padding: 8px 0 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &_nav {
      display: none;
    }
    &_links {
      text-align: right;
      margin-top: 20px;
      p {
        font-family: "Gilroy", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 1.9vw;
        line-height: 2vw;
        text-align: right;
        text-transform: uppercase;
        color: #333333;
      }
      img {
        height: 5vw;
      }
    }
  }
}
</style>