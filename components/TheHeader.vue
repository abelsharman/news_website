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
    <v-btn color="error" v-if="!$auth.$state.loggedIn" @click="goLogin"
      >Войти</v-btn
    >
    <div v-else>
      <v-btn color="error" @click="logout">Выйти</v-btn>
    </div>
    <v-btn class="primary nav_mobile" @click="drawer = true">Меню</v-btn>
    <v-btn
      class="error logout_mobile"
      v-if="$auth.$state.loggedIn"
      @click="logout"
      >Выйти</v-btn
    >
    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list nav>
        <v-list-item-group>
          <v-list-item v-for="(item, index) in mobile_list" :key="index">
            <v-list-item-title @click="(tab = index), nav(item.link)">{{
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
        {
          text: "Интервью",
          value: "interview",
          link: "/interview",
        },
      ],
      mobile_list: [
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
        {
          text: "Интервью",
          value: "interview",
          link: "/interview",
        },
        {
          text: "Поиск",
          value: "search",
          link: "/Search",
        },
        {
          text: "Войти",
          value: "login",
          link: "/Login",
        },
      ],
      drawer: false,
      tab: null,
    };
  },
  methods: {
    check() {
      this.$axios.$get("/api/user/auth").then((res) => {
        console.log(res);
      });
    },
    async logout() {
      await this.$auth.logout();
      this.$notify.success("Поздравляем! Вы успешно вышли из системы!");
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
  mounted() {
    this.check();
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
  .logout_mobile {
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
      width: 30%;
    }
    button {
      display: none;
    }
    .nav_mobile {
      display: flex;
      font-size: 14px;
    }
    .logout_mobile {
      display: flex;
      font-size: 14px;
    }
  }
}
</style>