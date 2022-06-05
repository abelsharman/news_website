<template>
  <div class="search">
    <h1>Поиск</h1>
    <v-text-field
      label="Поиск по тэгам"
      clearable
      color="red"
      v-model="search"
      append-icon="mdi-magnify"
      @click:append="searchArticle"
    ></v-text-field>
    <v-row>
      <div class="search_tags">
        <p>Тэги:</p>
        <div
          class="search_tags_inner"
          v-for="(item, index) in tags"
          :key="index"
        >
          <ul>
            <li cols="12" xs="2" @click="setTag(item.text)">{{ item.text }}</li>
          </ul>
        </div>
      </div>
    </v-row>
    <v-row v-if="results">
      <div
        class="search_results"
        v-for="item in results"
        :key="item.id"
        @click="goPage(item.id)"
      >
        <div class="search_results_img">
          <img
            :src="`https://kapibackend.abelsharman.kz/${item.img}`"
            alt="#"
          />
        </div>
        <div class="search_results_body">
          <span>#{{ item.tag }}</span>
          <h1>{{ item.title }}</h1>
          <p>{{ item.subtitle }}</p>
        </div>
      </div>
    </v-row>
    <v-row v-if="results.length == 0">
      <div class="search_none">
        <h1>Ничего не найдено</h1>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      tags: [
        {
          text: "Политика",
        },
        {
          text: "Бизнес",
        },
        {
          text: "Мир",
        },
        {
          text: "Спорт",
        },
        {
          text: "Подкасты",
        },
      ],
      results: [],
    };
  },
  methods: {
    setTag(tag) {
      this.search = tag;
    },
    searchArticle() {
      this.$axios
        .$post("/api/news/search", {
          tag: this.search,
        })
        .then((res) => {
          this.results = res;
        });
    },
    goPage(id) {
      this.$router.push(`/News/${id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  h1 {
    font-family: "Gilroy";
    text-transform: uppercase;
    font-size: 32px;
    font-weight: 600;
    margin-top: 40px;
    color: #333;
  }
  &_tags {
    margin-top: 20px;
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    font-family: "Inter", sans-serif;
    ul {
      list-style: none;
      li {
        font-size: 14px;
        border: 1px solid #333;
        padding: 2px 15px;
        cursor: pointer;
        transition: 0.3s ease-out;
        &:hover {
          background-color: red;
          color: #fff;
          border-color: #fff;
        }
      }
    }
  }
  &_results {
    display: flex;
    flex-direction: row;
    margin-top: 40px;
    margin-left: 10px;
    margin-bottom: 40px;
    &_img {
      img {
        width: 350px;
        height: 200px;
      }
    }
    &_body {
      padding: 1% 0;
      margin-left: 40px;
      span {
        font-size: 10px;
      }
      h1 {
        font-size: 24px;
        margin-top: 10px;
      }
      p {
        font-size: 14px;
        margin-top: 10px;
      }
    }
  }
  &_none {
    h1 {
      margin: 40px auto;
      margin-left: 10px;
      color: #a3a3a3;
      display: flex;
      justify-content: center;
    }
  }
}

@media all and (max-width: 768px) {
  .search {
    h1 {
      font-family: "Gilroy";
      text-transform: uppercase;
      font-size: 32px;
      font-weight: 600;
      margin-top: 40px;
      color: #333;
    }
    &_tags {
      p {
        display: none;
      }
      ul {
        text-align: center;
        padding-left: 0;
        li {
          font-size: 12px;
          width: 60px;
          border: 1px solid #333;
          padding: 2px 2px;
          cursor: pointer;
          margin-right: 2px;
          transition: 0.3s ease-out;
          &:hover {
            background-color: red;
            color: #fff;
            border-color: #fff;
          }
        }
      }
    }
    &_results {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      margin-left: 10px;
      margin-bottom: 20px;
      &_img {
        img {
          width: 100%;
          height: auto;
        }
      }
      &_body {
        padding: 1% 0;
        margin-left: 0;
        span {
          font-size: 10px;
        }
        h1 {
          font-size: 18px;
          margin-top: 10px;
        }
        p {
          font-size: 10px;
          margin-top: 10px;
        }
      }
    }
    &_none {
      h1 {
        margin: 40px auto;
        margin-left: 10px;
        color: #a3a3a3;
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>