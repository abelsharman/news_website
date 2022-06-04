<template>
  <div class="header">
    <img src="../assets/images/logo.svg" alt="" @click="goMain" />
    <div class="nav">
      <span
        v-for="(item, index) in list"
        :key="index"
        v-text="item.text"
        @click="nav(item.link)"
      ></span>
    </div>
    <v-btn icon
      ><v-icon color="error" @click="goSearch">mdi-magnify</v-icon></v-btn
    >
    <v-btn color="error" v-if="!$auth.$state.loggedIn" @click="goLogin">Войти</v-btn>
    <v-btn color="error" v-else @click="logout">Выйти</v-btn>
    <v-btn class="error nav_mobile" @click="drawer = true">Меню</v-btn>
    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list nav>
        <v-list-item-group>
          <v-list-item v-for="(item, index) in list" :key="index">
            <v-list-item-title @click="tab = index">{{
              item.text
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
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
          link: "/",
        },
        {
          text: "Бизнес",
          value: "business",
          link: "/",
        },
        {
          text: "Политика",
          value: "politology",
          link: "/",
        },
        {
          text: "Спорт",
          value: "sport",
          link: "/",
        },
        {
          text: "Подкасты",
          value: "podcasts",
          link: "/",
        },
        {
          text: "Интервью",
          value: "interview",
          link: "/",
        },
      ],
      drawer: false,
      tab: null,
    };
  },
  methods: {
    async logout(){
      await this.$auth.logout()
    },
    goSearch() {
      this.$router.push("/Search");
    },
    goLogin() {
      this.$router.push("/Login");
    },
    goMain() {
      this.$router.push("/");
    },
    nav(link) {
      this.$router.push(link);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  padding: 8px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  img,
  button:nth-child(2) {
    width: 9vw;
  }
  .nav_mobile {
    display: none;
  }
  div {
    span {
      display: inline-block;
      margin: 0 0.7vw;
      font-family: "Gilroy", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 1.11vw;
      line-height: 20px;
      color: #333333;
      transition: 0.5s all ease;
      text-transform: uppercase;
      cursor: pointer;
    }
    span:hover {
      text-decoration-line: underline;
      color: #ef3124;
    }
  }
}

@media all and (max-width: 768px) {
  .header {
    .nav {
      display: none;
    }
    img {
      width: 40%;
    }
    button {
      display: none;
    }
    .nav_mobile {
      display: flex;
      font-size: 14px;
    }
  }
}
</style>