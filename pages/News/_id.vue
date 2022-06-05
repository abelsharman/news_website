<template>
  <div class="article">
    <v-row>
      <img
        class="artilce_img"
        :src="`https://kapibackend.abelsharman.kz/${article.img}`"
        alt=""
      />
      <div class="article_tags">
        <p>#{{ article.tag }}</p>
      </div>
      <h1 class="article_title">
        <mark>{{ article.title }}</mark>
      </h1>
    </v-row>
    <v-row>
      <v-col cols="12" lg="1" sm="12" xs="12">
        <div class="article_buttons">
          <div class="article_buttons_likes" v-if="$auth.$state.loggedIn">
            <button @click="putFake">
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_339_20)">
                  <path
                    d="M33.0908 0.659252C32.8822 0.449906 32.6342 0.283884 32.3612 0.170742C32.0882 0.0576003 31.7955 -0.00042626 31.5 2.35727e-06H13.5C13.2045 -0.00042626 12.9118 0.0576003 12.6388 0.170742C12.3658 0.283884 12.1178 0.449906 11.9093 0.659252L0.659252 11.9093C0.449906 12.1178 0.283884 12.3658 0.170742 12.6388C0.0576003 12.9118 -0.00042626 13.2045 2.35727e-06 13.5V31.5C2.35727e-06 32.0985 0.236252 32.67 0.659252 33.0908L11.9093 44.3408C12.1178 44.5501 12.3658 44.7161 12.6388 44.8293C12.9118 44.9424 13.2045 45.0004 13.5 45H31.5C32.0985 45 32.67 44.7638 33.0908 44.3408L44.3408 33.0908C44.5501 32.8822 44.7161 32.6342 44.8293 32.3612C44.9424 32.0882 45.0004 31.7955 45 31.5V13.5C45.0004 13.2045 44.9424 12.9118 44.8293 12.6388C44.7161 12.3658 44.5501 12.1178 44.3408 11.9093L33.0908 0.659252ZM24.75 33.75H20.25V29.25H24.75V33.75ZM24.75 24.75H20.25V11.25H24.75V24.75Z"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_339_20">
                    <rect width="45" height="45" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <span>{{ article.likes }}</span>
          </div>
          <button>
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0V45H45V0H0ZM33.735 24.8961C34.768 25.9039 35.8604 26.8527 36.7876 27.9669C37.1972 28.4592 37.5847 28.967 37.88 29.5375C38.2993 30.3548 37.9193 31.2503 37.1892 31.2996L32.6521 31.2976C31.481 31.3939 30.5478 30.9217 29.7607 30.1205C29.1349 29.4826 28.5499 28.7998 27.9457 28.1402C27.6998 27.8686 27.4398 27.6147 27.1308 27.4121C26.511 27.0105 25.9734 27.1324 25.6191 27.778C25.2588 28.4355 25.1742 29.1656 25.141 29.8979C25.0916 30.9667 24.7691 31.2463 23.6963 31.2977C21.401 31.4041 19.2242 31.0553 17.2026 29.8999C15.4172 28.8805 14.0356 27.4393 12.8327 25.8097C10.4886 22.6326 8.69321 19.1447 7.08122 15.5564C6.71687 14.7476 6.98301 14.3143 7.87233 14.2986C9.35486 14.2694 10.8368 14.2729 12.3172 14.2966C12.9195 14.3067 13.319 14.6509 13.5494 15.2198C14.3505 17.1885 15.3306 19.0621 16.5607 20.8005C16.8897 21.263 17.2243 21.7236 17.6985 22.0502C18.224 22.4125 18.6256 22.2941 18.8735 21.7055C19.0312 21.3317 19.1003 20.9341 19.1335 20.5344C19.2514 19.1663 19.2655 17.7968 19.0625 16.4327C18.9365 15.5801 18.4544 15.0288 17.6042 14.8676C17.1708 14.7849 17.2358 14.6257 17.4445 14.3773C17.8108 13.9505 18.1555 13.6844 18.8383 13.6844H23.966C24.7747 13.8421 24.9561 14.2064 25.066 15.0192L25.07 20.7178C25.0604 21.0327 25.2278 21.9654 25.7926 22.172C26.2451 22.3217 26.5464 21.9573 26.818 21.6701C28.0461 20.367 28.9223 18.8261 29.7053 17.2317C30.052 16.5308 30.3514 15.8027 30.6426 15.074C30.8572 14.5348 31.1918 14.2693 31.8001 14.2788L36.7368 14.2849C36.8824 14.2849 37.0321 14.2849 37.1757 14.3085C38.0061 14.4521 38.2345 14.8104 37.9764 15.6232C37.5733 16.8966 36.7837 17.9597 36.0142 19.0245C35.1893 20.1644 34.3116 21.2643 33.4928 22.4102C32.7449 23.4594 32.8038 23.987 33.735 24.8961Z"
              />
            </svg>
          </button>
          <button>
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.1233 15.9591L20.1014 25.2746C19.7493 25.6019 19.5218 26.0414 19.4574 26.5178L19.1164 29.0474C19.0709 29.3849 18.596 29.4188 18.5029 29.0913L17.19 24.4785C17.0402 23.9521 17.2586 23.39 17.7247 23.103L29.868 15.6234C30.0859 15.4894 30.3108 15.7848 30.1233 15.9591ZM45 0V45H0V0H45ZM34.9859 10.8113L9.48615 20.6483C8.85751 20.8909 8.86233 21.7821 9.49357 22.0178L15.7067 24.3371L18.1119 32.0714C18.266 32.5667 18.872 32.7493 19.274 32.4215L22.7375 29.598C23.1005 29.302 23.6172 29.2875 23.9962 29.5627L30.2435 34.0984C30.6735 34.4107 31.2827 34.1752 31.3908 33.6548L35.9665 11.6434C36.0846 11.0757 35.527 10.6025 34.9859 10.8113Z"
              />
            </svg>
          </button>
          <button>
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.5716 14.8802C32.3646 14.3192 32.0343 13.8115 31.6052 13.3947C31.1884 12.9655 30.6809 12.6352 30.1196 12.4282C29.6644 12.2514 28.9805 12.0409 27.7208 11.9836C26.3582 11.9215 25.9496 11.9081 22.4999 11.9081C19.0499 11.9081 18.6413 11.9211 17.279 11.9833C16.0193 12.0409 15.3351 12.2514 14.8802 12.4282C14.3189 12.6352 13.8111 12.9655 13.3946 13.3947C12.9655 13.8115 12.6352 14.3189 12.4278 14.8802C12.251 15.3355 12.0406 16.0197 11.9832 17.2794C11.9211 18.6417 11.9077 19.0502 11.9077 22.5003C11.9077 25.95 11.9211 26.3585 11.9832 27.7212C12.0406 28.9808 12.251 29.6647 12.4278 30.12C12.6352 30.6813 12.9651 31.1887 13.3943 31.6055C13.8111 32.0347 14.3185 32.365 14.8799 32.572C15.3351 32.7491 16.0193 32.9596 17.279 33.0169C18.6413 33.0791 19.0495 33.0921 22.4996 33.0921C25.95 33.0921 26.3585 33.0791 27.7205 33.0169C28.9801 32.9596 29.6644 32.7491 30.1196 32.572C31.2464 32.1373 32.137 31.2468 32.5716 30.12C32.7484 29.6647 32.9589 28.9808 33.0166 27.7212C33.0787 26.3585 33.0918 25.95 33.0918 22.5003C33.0918 19.0502 33.0787 18.6417 33.0166 17.2794C32.9592 16.0197 32.7488 15.3355 32.5716 14.8802ZM22.4999 29.1343C18.8356 29.1343 15.8652 26.1642 15.8652 22.4999C15.8652 18.8356 18.8356 15.8656 22.4999 15.8656C26.1638 15.8656 29.1343 18.8356 29.1343 22.4999C29.1343 26.1642 26.1638 29.1343 22.4999 29.1343ZM29.3966 17.1537C28.5403 17.1537 27.8461 16.4595 27.8461 15.6033C27.8461 14.747 28.5403 14.0528 29.3966 14.0528C30.2528 14.0528 30.947 14.747 30.947 15.6033C30.9467 16.4595 30.2528 17.1537 29.3966 17.1537Z"
              />
              <path
                d="M26.8066 22.5C26.8066 24.8785 24.8785 26.8066 22.5 26.8066C20.1215 26.8066 18.1934 24.8785 18.1934 22.5C18.1934 20.1215 20.1215 18.1934 22.5 18.1934C24.8785 18.1934 26.8066 20.1215 26.8066 22.5Z"
              />
              <path
                d="M41.7546 0H3.24543C1.45294 0 0 1.45294 0 3.24543V41.7546C0 43.5471 1.45294 45 3.24543 45H41.7546C43.5471 45 45 43.5471 45 41.7546V3.24543C45 1.45294 43.5471 0 41.7546 0V0ZM35.342 27.8267C35.2795 29.202 35.0608 30.141 34.7415 30.9629C34.0703 32.6984 32.6984 34.0703 30.9629 34.7415C30.1413 35.0608 29.202 35.2792 27.827 35.342C26.4492 35.4048 26.0091 35.4199 22.5003 35.4199C18.9912 35.4199 18.5514 35.4048 17.1733 35.342C15.7983 35.2792 14.859 35.0608 14.0374 34.7415C13.175 34.4171 12.3943 33.9086 11.7488 33.2512C11.0917 32.606 10.5833 31.825 10.2588 30.9629C9.93954 30.1413 9.72084 29.202 9.65836 27.827C9.59484 26.4489 9.58008 26.0088 9.58008 22.5C9.58008 18.9912 9.59484 18.5511 9.65801 17.1733C9.7205 15.798 9.93885 14.859 10.2581 14.0371C10.5826 13.175 11.0914 12.394 11.7488 11.7488C12.394 11.0914 13.175 10.5829 14.0371 10.2585C14.859 9.93919 15.798 9.72084 17.1733 9.65801C18.5511 9.59518 18.9912 9.58008 22.5 9.58008C26.0088 9.58008 26.4489 9.59518 27.8267 9.65836C29.202 9.72084 30.141 9.93919 30.9629 10.2581C31.825 10.5826 32.606 11.0914 33.2515 11.7488C33.9086 12.3943 34.4174 13.175 34.7415 14.0371C35.0611 14.859 35.2795 15.798 35.3423 17.1733C35.4052 18.5511 35.4199 18.9912 35.4199 22.5C35.4199 26.0088 35.4052 26.4489 35.342 27.8267Z"
              />
            </svg>
          </button>
        </div>
      </v-col>
      <v-col xs="12" sm="12" lg="10">
        <div class="article_subtitle">
          <span>{{ date }}</span>
          <p>
            {{ article.subtitle }}
          </p>
        </div>
        <div class="article_body">
          <p>
            {{ article.body }}
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <div class="article_author">
        <div class="article_author_avatar">
          <img src="@/assets/images/user.png" alt="#" />
        </div>
        <div class="article_author_name">
          <span>Автор</span>
          <p>{{ article.author }}</p>
        </div>
      </div>
    </v-row>
    <v-row v-if="article.comments">
      <div
        class="article_comments"
        v-for="item in article.comments"
        :key="item.id"
      >
        <div class="article_comments_avatar">
          <img src="@/assets/images/user.png" alt="#" />
        </div>
        <div class="article_comments_body">
          <p class="name">{{ item.userId }}</p>
          <p class="body">{{ item.body }}</p>
          <p class="date">{{ item.createdAt }}</p>
        </div>
      </div>
    </v-row>
    <v-row v-if="!article.comments">
      <div class="article_comments">
        <h1>Комментариев пока нет.</h1>
      </div>
    </v-row>
    <v-row>
      <v-col cols="12" lg="12" xs="12">
        <div class="article_comments_send" v-if="$auth.$state.loggedIn">
          <v-textarea
            outlined
            width="100%"
            name="input-8-4"
            label="Оставьте комментарий"
            v-model="comment"
          ></v-textarea>
          <v-btn class="error" @click="postComment"
            ><v-icon>mdi-send</v-icon></v-btn
          >
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";

export default {
  data() {
    return {
      article: [],
      date: [],
      comment: "",
      comments: "",
      commentId: "",
      user: "",
    };
  },
  methods: {
    getArticle() {
      this.$axios.$get(`/api/news/${this.$route.params.id}`).then((res) => {
        this.article = res;
        console.log(this.article);
        this.date = this.article.date.slice(0, 10);
        this.commentId = res.id;
      });
    },
    getMe() {
      if (this.$auth.$state.loggedIn) {
        this.user = jwt_decode(this.$auth.user.token);
        console.log(this.user);
      } else {
        return null;
      }
    },
    getComments() {
      this.$axios.$get(`/api/comments/`).then((res) => {
        console.log(res, "res");
      });
    },
    postComment() {
      this.$axios
        .$post("/api/comments/", {
          body: this.comment,
          articleId: this.article.id,
          userId: this.user.id,
        })
        .then((res) => {
          console.log(res);
          this.getArticle();
        });
    },
    putFake() {
      this.$post.put(`/api/news/${this.article.id}`).then((res) => {
        console.log(res);
        this.getArticle();
      });
    },
  },
  mounted() {
    this.getArticle();
    this.getMe();
    this.getComments();
  },
};
</script>

<style lang="scss" scoped>
.article {
  margin-top: 48px;
  img {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 600px;
  }
  &_tags {
    z-index: 1;
    display: flex;
    flex-direction: row;
    margin-top: 33vw;
    margin-left: 100px;
    p {
      background-color: #fff;
      margin-right: 10px;
      padding: 8px 16px;
      font-size: 16px;
      font-weight: 600;
    }
  }
  &_title {
    font-family: "Gilroy", sans-serif;
    z-index: 1;
    margin-left: 100px;
    width: 80%;
    mark {
      background-color: red;
      color: #fff;
      padding: 8px;
      line-height: 68px;
      font-weight: 600;
      font-size: 48px;
    }
  }
  &_subtitle {
    span {
      font-family: "Inter", sans-serif;
      color: #828282;
      font-weight: 500;
      font-size: 14px;
      margin-bottom: 16px;
    }
    p {
      font-size: 16px;
      font-weight: 600;
    }
  }
  &_body {
    margin-left: 100px;
  }
  &_buttons {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    &_likes {
      display: flex;
      flex-direction: column;
      span {
        text-align: center;
        padding-top: 0;
        margin-top: -16px;
        margin-bottom: 20px;
      }
    }
    button {
      margin-bottom: 16px;
      transition: 0.3s ease-in-out;
      &:hover {
        fill: red;
      }
    }
  }
  &_author {
    border-top: 1px solid red;
    border-bottom: 1px solid red;
    padding: 24px;
    margin-left: 100px;
    width: 100%;
    margin-bottom: 40px;
    &_avatar {
      position: relative;
      img {
        width: 74px;
        height: 74px;
      }
    }
    &_name {
      margin-left: 100px;
      font-family: "Inter", sans-serif;
      span {
        font-size: 14px;
        color: red;
      }
      p {
        font-size: 24px;
        font-weight: 600;
      }
    }
  }
  &_comments {
    margin-left: 124px;
    font-family: "Inter", sans-serif;
    width: 100%;
    h1 {
      font-size: 24px;
      color: #a3a3a3;
      margin-bottom: 40px;
      display: flex;
      padding: 0 30%;
    }
    &_avatar {
      position: relative;
      img {
        width: 74px;
        height: 74px;
      }
    }
    &_body {
      margin-left: 100px;
      .name {
        font-size: 12px;
        font-weight: 600;
      }
      .body {
        font-size: 18px;
        font-weight: 600;
      }
      .date {
        font-size: 12px;
        color: #a3a3a3;
      }
    }
  }
  &_commnets_send {
    display: flex;
    margin-left: 10px;
  }
}

@media all and (max-width: 768px) {
  .article {
    margin-top: 24px;
    img {
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 200px;
    }
    &_tags {
      z-index: 1;
      display: flex;
      flex-direction: row;
      margin-top: 33vw;
      margin-left: 10px;
      p {
        background-color: #fff;
        margin-right: 10px;
        padding: 4px 8px;
        font-size: 12px;
        font-weight: 600;
      }
    }
    &_title {
      font-family: "Gilroy", sans-serif;
      z-index: 1;
      margin-left: 10px;
      width: 100%;
      mark {
        background-color: red;
        color: #fff;
        padding: 8px;
        line-height: 24px;
        font-weight: 600;
        font-size: 24px;
      }
    }
    &_subtitle {
      span {
        font-family: "Inter", sans-serif;
        color: #828282;
        font-weight: 500;
        font-size: 12px;
        margin-bottom: 16px;
      }
      p {
        font-size: 14px;
        font-weight: 600;
      }
    }
    &_body {
      margin-left: 10px;
      font-size: 14px;
      font-family: "Inter", sans-serif;
    }
    &_buttons {
      width: 100%;
      margin-top: 10px;
      display: flex;
      flex-direction: row;
      span {
        text-align: center;
        padding-top: 20px;
        margin-right: 20px;
      }
      button {
        margin-bottom: 16px;
        transition: 0.3s ease-in-out;
        height: 32px;
        svg {
          height: 32px;
        }
        &:hover {
          fill: red;
        }
      }
    }
    &_author {
      border-top: 1px solid red;
      border-bottom: 1px solid red;
      padding: 24px;
      margin-left: 10px;
      width: 100%;
      margin-bottom: 40px;
      &_avatar {
        position: relative;
        img {
          width: 74px;
          height: 74px;
        }
      }
      &_name {
        margin-left: 100px;
        font-family: "Inter", sans-serif;
        span {
          font-size: 14px;
          color: red;
        }
        p {
          font-size: 24px;
          font-weight: 600;
        }
      }
    }
    &_comments {
      margin-left: 10px;
      font-family: "Inter", sans-serif;
      width: 100%;
      h1 {
        font-size: 18px;
        color: #a3a3a3;
        margin-bottom: 40px;
        display: flex;
        padding: 0 30%;
      }
      &_avatar {
        position: relative;
        img {
          width: 74px;
          height: 74px;
        }
      }
      &_body {
        margin-left: 100px;
        .name {
          font-size: 14px;
          font-weight: 600;
        }
        .body {
          font-size: 18px;
          font-weight: 600;
        }
        .date {
          font-size: 12px;
          color: #a3a3a3;
        }
      }
      &_send {
        margin-bottom: 80px;
      }
    }
  }
}
</style>