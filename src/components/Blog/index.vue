<template>
  <div class="blog">
    <header>
      <router-link to="/">
        <ArrowleftIcon class="arrow-left-icon" />
      </router-link>
      <input
        v-model="searchQuery"
        class="search-window"
        type="search"
        placeholder="search"
      >
    </header>
    <main>
      <div class="card">
        <h3 class="title">{{ card.title }}</h3>
        <div class="status">
          <code class="date">{{ card.date }}</code>
          <HeartIcon class="heart-icon" :likes="card.likes"/>
        </div>
        <img v-if="!card.src" src="@/assets/img/noImage.png" alt="noImg">
        <img v-else class="posted-img" :src="card.src" alt="postImg">
        <p class="sentence">{{ card.sentence }}</p>
      </div>
      <div class="card">
        <h3 class="title">{{ card.title }}</h3>
        <div class="status">
          <code class="date">{{ card.date }}</code>
          <HeartIcon class="heart-icon" :likes="card.likes"/>
        </div>
        <img src="@/assets/img/2019wsop.jpg" alt="postImg">
        <p class="sentence">{{ card.sentence }}</p>
      </div>
      <div class="card">
        <h3 class="title">{{ card.title }}</h3>
        <div class="status">
          <code class="date">{{ card.date }}</code>
          <HeartIcon class="heart-icon" :likes="card.likes"/>
        </div>
        <img src="@/assets/img/wsopRing.jpg" alt="postImg">
        <p class="sentence">{{ card.sentence }}</p>
      </div>
    </main>
  </div>
</template>

<script>
import ArrowleftIcon from '@/assets/icons/ArrowleftIcon';
import HeartIcon from '@/assets/icons/HeartIcon';

export default {
  components: { ArrowleftIcon, HeartIcon },
  data() {
    return {
      searchQuery: '',
      card: {
        title: 'Thie is Title',
        date: 20200722,
        likes: 77676,
        src: require('@/assets/img/2018wsop.jpg'),
        sentence: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.blog {
  header {
    background: #111;
    width: 100%;
    height: 45px;
    position: fixed;
    top: 0px;
    border-bottom: 1px solid var(--currentTheme);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    .arrow-left-icon {
      position: absolute;
      top: 5px;
      left: 5px;
    }
    .search-window {
      color: var(--currentTheme);
      background: rgba(#333, 0.9);
      width: 200px;
      height: 30px;
      border: none;
      border-radius: 20px;
      padding: 14px;
      &:focus { outline: none; }
    }
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 70px;
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
