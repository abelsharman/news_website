<template>
  <div class="login">
    <div class="login_main">
      <h1>Войти</h1>
      <input type="text" placeholder="Введите email" v-model="email" />
      <input type="password" placeholder="Введите пароль" v-model="password" />
      <a href="#" class="registration" @click="goRegistration">Нет аккаунта?</a>
      <v-btn class="error" @click="userLogin">Войти</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    async userLogin() {
      const body = {
        email: this.email,
        password: this.password,
      };
      this.$axios.$post("/api/user/login", body).then((res) => {
        console.log(res.token);
        localStorage.setItem("token", res.token);
        this.$router.push("/");
        this.$axios.$get("/api/user/auth").then((res) => {
          console.log(res);
        });
      });
    },
    goRegistration() {
      this.$router.push("/Registration");
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  margin-top: 100px;
  margin-bottom: 400px;
  &_main {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    h1 {
      margin-bottom: 30px;
    }
    input {
      width: 40%;
      margin-bottom: 20px;
      height: 40px;
      border: 1px solid #aaaaaa;
      padding: 10px;
    }
    .registration {
      color: #3333;
      text-decoration: none;
      font-size: 14px;
      width: 100px;
      transition: 0.3s ease-in;
      &:hover {
        color: #181818;
      }
    }
    button {
      margin-top: 40px;
      width: 40%;
    }
  }
}

@media all and (max-width: 768px) {
  .login {
    margin-top: 30px;
    margin-bottom: 40px;
    &_main {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      h1 {
        margin-bottom: 30px;
        font-size: 16px;
      }
      input {
        width: 100%;
        margin-bottom: 20px;
        height: 40px;
        border: 1px solid #aaaaaa;
        padding: 10px;
      }
      button {
        margin-top: 40px;
        width: 100%;
        font-size: 14px;
      }
    }
  }
}
</style>
