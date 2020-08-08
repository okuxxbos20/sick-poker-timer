<template>
  <div class="profile">
    <div class="basical-data">
      <img v-if="!user.userPhoto" src="@/assets/img/avatar.png">
      <img v-if="user.userPhoto" :src="user.userPhoto">
      <p class="name">{{ user.uName }}</p>
      <p class="email">{{ user.uEmail }}</p>
    </div>
    <div class="switch">
      <div
        class="switch-btn"
        :class="{ selected: switchNum === 1 }"
        @click="switchNum = 1"
      >
        <code>Bookmarks</code>
      </div>
      <div
        class="switch-btn"
        :class="{ selected: switchNum === 2 }"
        @click="switchNum = 2"
      >
        <code>My article</code>
      </div>
      <div
        class="switch-btn"
        :class="{ selected: switchNum === 3 }"
        @click="switchNum = 3"
      >
        <code>Settings</code>
      </div>
    </div>
    <div v-if="switchNum === 1" class="bookmarks">
      <table v-if="user.bookmarks.length > 0">
        <tr
          v-for="(bookmark, idx) in bookmarkArticles"
          :key="idx"
          @click="moveTo(bookmark.id)"
        >
          <td class="photo"><img :src="bookmark.img"></td>
          <td class="title">{{ bookmark.title }}</td>
          <td class="likes"><HeartIcon :likes="bookmark.likes" /></td>
        </tr>
      </table>
      <p v-else>you have no bookmarks.</p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import HeartIcon from '@/assets/icons/HeartIcon';

export default {
  components: { HeartIcon },
  data() {
    return {
      user: {
        uid: '',
        uName: '',
        userPhoto: '',
        uEmail: '',
        bookmarks: []
      },
      bookmarkArticles: [],
      switchNum: 1
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user.uid = user.uid;
        this.user.userPhoto = user.photoURL;
        this.user.uEmail = user.email;
        this.user.uName = (user.displayName !== null) ? user.displayName : 'No Name';
        this.readBookmarks(this.user.uid);
      } else {
        console.log('Please Login.');
      }
    });
  },
  methods: {
    async readBookmarks(uid) {
      await firebase.firestore().collection('users').doc(uid).get()
        .then(users => {
          this.user.bookmarks = users.data().bookmarks;
          this.user.bookmarks.map((articleid) => {
            firebase.firestore().collection('article').doc(articleid).get()
              .then(article => {
                const atricleInfo = {
                  id: article.id,
                  title: article.data().title,
                  likes: article.data().likes,
                  img: article.data().img,
                }
                this.bookmarkArticles.push(atricleInfo);
              })
              .catch(error => {
                console.log(error);
              })
          })
        })
        .catch(error => {
          console.log(error);
        });
    },
    moveTo(id) {
      this.$router.push({ name: 'article', params: { id } });
    }
  }
}
</script>

<style lang="scss" scoped>
.profile {
  color: #777;
  padding: 0 10px;
  margin: 30px 0;
  .basical-data {
    margin-bottom: 20px;
    img {
      width: 130px;
      height: 130px;
      border-radius: 50%;
      margin-bottom: 10px;
    }
    .name { margin: 0; }
  }
  .switch {
    height: 35px;
    width: 100%;
    max-width: 800px;
    margin: 10px auto;
    border: 1px solid var(--currentTheme);
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    .switch-btn {
      height: 100%;
      width: calc(100% / 3);
      border-radius: 7px;
      code {
        color: #777;
        line-height: 32px;
      }
    }
    .selected {
      code { color: #111; }
      background: var(--currentTheme);
      border: 2px solid var(--currentTheme);
    }
  }
  .bookmarks {
    width: 100%;
    max-width: 1000px;
    margin: 30px auto;
    table {
      width: 100%;
      border-top: 1px solid #555;
      border-bottom: 1px solid #555;
      tr {
        text-align: left;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #555;
        transition: 100ms;
        &:hover {
          color: var(--currentTheme);
          background: #222;
          cursor: pointer;
        }
        .photo {
          height: 100%;
          img {
            height: 100%;
            width: 75px;
            object-fit: cover;
          }
        }
        .likes {
          width: 50px;
          text-align: left;
        }
      }
    }
  }
}
</style>
