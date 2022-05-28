<template>
  <div class="another_news">
    <h2>Другие новости</h2>
    <div class="another_section">
      <div class="another_section_item" v-for="item in list" :key="item.id">
        <h3 v-text="item.type"></h3>
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
      list: [
        {
          id: 1,
          type: "Мир",
          title: "Казахстан направит гуманитарную помощь Украине двумя рейсами",
          from_date: "10 марта, 15:30",
        },
        {
          id: 2,
          type: "Политика",
          title:
            "Габриэль Борич приведен к присяге в качестве президента Чили в резком политическом сдвиге",
          from_date: "10 марта, 15:30",
        },
        {
          id: 3,
          type: "Бизнес",
          title:
            "Роман Абрамович попал под санкции в Великобритании. Теперь он не сможет продать «Челси»",
          from_date: "10 марта, 15:30",
        },
        {
          id: 4,
          type: "Мир",
          title:
            "Города США теряют 36 миллионов деревьев в год. Вот почему это важно и как вы можете это остановить",
          from_date: "10 марта, 15:30",
        },
      ],
    };
  },
  methods: {
    goPage(id) {
      this.$router.push(`/News/${id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.another_news {
  h2 {
    font-family: "Gilroy", sans-serif;
    font-style: normal;
    font-weight: 700;
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