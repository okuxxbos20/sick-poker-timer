<template>
  <div class="blog">
    <BlogHeader />
    <main>
      <div v-for="(article, idx) in articles" :key="idx" class="card">
        <h3 class="title">{{ article.title }}</h3>
        <div class="status">
          <code class="date">{{ article.createdAt | dayFormat }}</code>
          <HeartIcon class="heart-icon" :likes="article.likes"/>
        </div>
        <img
          v-if="!article.img"
          src="@/assets/img/noImage.png"
          alt="noImg"
        >
        <img
          v-else
          class="posted-img"
          :src="article.img"
          @click="moveTo(article.id)"
          alt="postImg"
        >
        <p class="sentence">{{ article.prologue | shortenPreview }}</p>
      </div>
    </main>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';
import BlogHeader from './components/BlogHeader';
import HeartIcon from '@/assets/icons/HeartIcon';

export default {
  components: { BlogHeader, HeartIcon },
  filters: {
    dayFormat(time) {
      const sec = time.seconds;
      const nano = time.nanoseconds;
      const date = new Date(sec * 1000 + nano / 1000000);
      let year = date.getFullYear();
      const thisYear = new Date().getFullYear();
      year = (year === thisYear) ? '' : year;
      const monthNum = date.getMonth();
      const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const month = monthArr[monthNum];
      const day = date.getDate();
      const result = `${year} ${month} ${day}`
      return result;
    },
    shortenPreview(text) {
      if (text.length > 200) {
        return text.substr(0, 200);
      } else {
        return text
      }
    }
  },
  data() {
    return {
      articles: []
    }
  },
  created() {
    firebase.firestore().collection('article').get().then((article) => {
      article.forEach((doc) => {
        const items = doc.data();
        items.id = doc.id;
        this.articles.push(items);
      });
    });
  },
  methods: {
    moveTo(id) {
      this.$router.push({ name: 'article', params: { id } });
    }
  }
}
</script>

<style lang="scss" scoped>
.blog {
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 70px;
    @media screen and (min-width: 480px) {
      padding: 70px 0 0;
    }
    .card {
      background: #333;
      width: 100%;
      max-width: 550px;
      margin: 30px 0;
      padding: 10px 0;
      text-align: left;
      .title {
        color: #aaa;
        margin: 10px 10px 0 10px;
      }
      .status {
        position: relative;
        height: 22px;
        margin-bottom: 5px;
        .date {
          color: #aaa;
          font-size: 14px;
          margin-left: 10px;
          position: absolute;
          top: 2px;
          left: 0;
        }
        .heart-icon {
          position: absolute;
          top: -1px;
          right: 8px;
        }
      }
      img {
        width: calc(100%);
        height: auto;
        margin: 5px 0;
      }
      .posted-img {
        &:hover {
          cursor: pointer;
        }
      }
      .sentence {
        color: #999;
        margin: 15px 10px;
      }
    }
  }
}
</style>
