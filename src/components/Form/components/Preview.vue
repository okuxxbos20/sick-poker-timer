<template>
  <div class="preview-place">
    <div class="contents">
      <img
        v-if="articleData.img"
        class="top-img"
        :src="articleData.img"
      >
      <div
        v-if="!articleData.img"
        class="no-img"
      >
        <PhotoIcon />
        <p>No Photo.</p>
      </div>
      <div class="box">
        <h3 class="title">{{ articleData.title }}</h3>
        <div class="status">
          <p class="date">{{ articleData.modifiedAt | dayFormat }}</p>
          <p class="name"><code>{{ articleData.author }}</code></p>
          <HeartIcon class="heart-icon" :likes="articleData.likes"/>
        </div>
        <p class="prologue">{{ articleData.prologue }}</p>
        <div v-if="articleData.tags.length > 0" class="tags">
          <label v-for="(tag, idx) in articleData.tags" :key="idx">
            <span>#{{ tag }}</span>
          </label>
        </div>
        <div v-if="articleData.index.length > 0" class="index">
          <ul>
            <li v-for="(item, idx) in articleData.index" :key="idx">{{ item }}</li>
          </ul>
        </div>
        <div class="sentence">
          {{ articleData.sentence }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import PhotoIcon from '@/assets/icons/PhotoIcon';
import HeartIcon from '@/assets/icons/HeartIcon';

export default {
  name: 'Preview',
  components: { PhotoIcon, HeartIcon },
  filters: {
    dayFormat(date) {
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
    }
  },
  props: {
    articleData: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.articleData.author = user.displayName;
      } else {
        this.articleData.author = 'Please Login';
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.preview-place {
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
    .no-img {
      width: 100%;
      height: 200px;
      background: #333;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #000;
      p { margin: 0; }
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
            margin: 0 15px 15px 0;
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
