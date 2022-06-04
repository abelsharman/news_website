<template>
  <div class="registration">
    <div class="registration_main">
      <h1>Регистрация</h1>
      <input
        type="text"
        placeholder="Введите имя пользователя"
        v-model="registration.username"
      />
      <input
        type="text"
        placeholder="Введите имя"
        v-model="registration.name"
      />
      <input
        type="text"
        placeholder="Введите email"
        v-model="registration.email"
      />
      <input
        type="password"
        placeholder="Введите пароль"
        v-model="registration.password"
      />
      <v-btn class="error" @click="createUser">Зарегистрироваться</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    registration: {
      username: "",
      name: "",
      email: "",
      password: "",
    },
  }),
  methods: {
    createUser() {
      this.$axios
        .$post("/api/user/registration", this.registration)
        .then((res) => {
          if (res.token) {
            this.$notify.success("Поздравляем! Вы успешно прошли регистрацию!");
            this.$router.push("/Login");
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.registration {
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
    button {
      margin-top: 40px;
      width: 40%;
    }
  }
}

@media all and (max-width: 768px) {
  .registration {
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
