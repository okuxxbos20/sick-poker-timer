<template>
  <div class="article">
    <BlogHeader path="/blog"/>
    <div class="contents">
      <img class="top-img" :src="post.img" alt="img">
      <div class="box">
        <h3 class="title">{{ post.title }}</h3>
        <div class="status">
          <p class="date">{{ post.modifiedAt | dayFormat }}</p>
          <p class="name"><code>{{ post.author }}</code></p>
          <HeartIcon class="heart-icon" :likes="post.likes"/>
        </div>
        <p class="prologue">{{ post.prologue }}</p>
        <div v-if="post.tags.length > 0" class="tags">
          <label v-for="(tag, idx) in post.tags" :key="idx">
            <span>#{{ tag }}</span>
          </label>
        </div>
        <div v-if="post.index.length > 0" class="index">
          <ul>
            <li v-for="(item, idx) in post.index" :key="idx">{{ item }}</li>
          </ul>
        </div>
        <div class="sentence">
          {{ post.sentence }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';
import BlogHeader from './components/BlogHeader';
import HeartIcon from '@/assets/icons/HeartIcon';

export default {
  components: { BlogHeader, HeartIcon },
  created() {
    const id = this.$route.path.substr(9);
    const db = firebase.firestore();
    db.collection('article').doc(id).get()
      .then(article => {
        this.post = article.data();
        console.log(this.post);
      })
      .catch(error => {
        console.log(error);
      })
  },
  filters: {
    dayFormat(time) {
      const sec = time.seconds;
      const nano = time.nanoseconds;
      const date = new Date(sec * 1000 + nano / 1000000);
      const year = date.getFullYear();
      const monthNum = date.getMonth();
      const monthArr = [
        'Jan', 'Feb', 'Mar', 'Apr',
        'May', 'Jun', 'Jul', 'Aug',
        'Sep', 'Oct', 'Nov', 'Dec'
      ];
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
      post: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  overflow-x: hidden;
  padding-bottom: 100px;
  .contents {
    text-align: left;
    width: 100%;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 480px) {
      margin: 70px 0 0;
    }
    .top-img {
      width: 100%;
      @media screen and (min-width: 480px) {
        min-width: 480px;
        width: 80%;
        max-width: 850px;
        margin: 0 auto;
      }
    }
    .box {
      color: #aaa;
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 0 10px;
      @media screen and (min-width: 480px) {
        min-width: 480px;
        width: 80%;
        max-width: 850px;
      }
      .title {
        font-size: 35px;
        margin: 20px 0 10px;
      }
      .status {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 15px;
        .date { margin: 0 15px 0 0; }
        .name {
          margin: 0 15px 0 0;
          code { color: var(--currentTheme); }
        }
      }
      .prologue { margin: 0; }
      .tags {
        margin: 15px 0 0;
        label {
          margin: 0 0 15px;
          span {
            color: var(--currentTheme);
            border: 1px solid var(--currentTheme);
            opacity: 0.8;
            padding: 2px 8px;
            margin: 0 15px 0 0;
            transition: 150ms;
            &:hover {
              cursor: pointer;
              color: #eee;
              background: var(--currentTheme);
              opacity: 0.8;
            }
          }
        }
      }
      .index {
        background: rgba(#222, 0.8);
        padding: 20px 20px 20px 0;
        margin: 40px 0;
        ul { margin: 0; }
      }
    }
  }
}
</style>
