<template>
  <div class="article">
    <BlogHeader />
    <div class="contents">
      <img class="top-img" src="@/assets/img/2018wsop.jpg" alt="img">
      <div class="box">
        <h3 class="title">This is title</h3>
        <div class="status">
          <p class="date">20200730</p>
          <p class="name"><code>Phil Williams</code></p>
          <HeartIcon class="heart-icon" :likes="card.likes"/>
        </div>
        <p class="prologue">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div class="tags">
          <span>#wsop</span>
          <span>#LasVegas</span>
          <span>#2020</span>
        </div>
        <div class="index">
          <ul>
            <li>first</li>
            <li>second</li>
            <li>third</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogHeader from './components/BlogHeader';
import HeartIcon from '@/assets/icons/HeartIcon';

export default {
  components: { BlogHeader, HeartIcon },
  data() {
    return {
      card: {
        likes: 9877
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  overflow-x: hidden;
  padding-bottom: 150px;
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
      .prologue {
        margin: 0;
      }
      .tags {
        margin: 15px 0 0 0;
        span {
          color: var(--currentTheme);
          border: 1px solid var(--currentTheme);
          opacity: 0.8;
          padding: 2px 8px;
          margin: 0 15px 0 0;
          transition: 200ms;
          &:hover {
            cursor: pointer;
            color: #eee;
            background: var(--currentTheme);
            opacity: 0.8;
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
