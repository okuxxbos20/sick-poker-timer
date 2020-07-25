<template>
  <div class="blog">
    <BlogHeader />
    <main>
      <div class="card">
        <h3 class="title">{{ card.title }}</h3>
        <div class="status">
          <code class="date">{{ card.date }}</code>
          <HeartIcon class="heart-icon" :likes="card.likes"/>
        </div>
        <img
          v-if="!card.src"
          src="@/assets/img/noImage.png"
          alt="noImg"
        >
        <img
          v-else
          class="posted-img"
          :src="card.src"
          @click="moveTo(card.id)"
          alt="postImg"
        >
        <p class="sentence">{{ card.sentence }}</p>
      </div>
      <!-- <div class="card">
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
      </div> -->
    </main>
  </div>
</template>

<script>
import BlogHeader from './components/BlogHeader';
import HeartIcon from '@/assets/icons/HeartIcon';

export default {
  components: { BlogHeader, HeartIcon },
  data() {
    return {
      searchQuery: '',
      card: {
        id: 2345,
        title: 'This is Title',
        date: 20200722,
        likes: 77676,
        src: require('@/assets/img/2018wsop.jpg'),
        sentence: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    }
  },
  methods: {
    moveTo(id) {
      console.log(id);
      // this.$router.push({ path: `/article/${id}` });
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
