<template>
  <div class="form-place">
    <form>
      <div class="flame">
        <PhotoIcon />
        <p>upload photo</p>
      </div>
      <input
        v-model="articleData.title"
        type="text"
        class="input title-form"
        placeholder="title"
      >
      <textarea
        v-model="articleData.prologue"
        class="input prologue-form"
        name="name"
        row="4"
        cols="20"
        placeholder="prologue"
      ></textarea>
      <div class="tags-form" @click="openTagsForm()">
        <HashtagIcon class="hashtag-icon" />
        <input v-if="isTagsOpen" type="text">
      </div>
    </form>
    <div class="preview">
      <p>{{ articleData.title }}</p>
      <p>{{ articleData.prologue }}</p>
      <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> -->
    </div>
  </div>
</template>

<script>
import PhotoIcon from '@/assets/icons/PhotoIcon';
import HashtagIcon from '@/assets/icons/HashtagIcon';

export default {
  components: { PhotoIcon, HashtagIcon },
  data() {
    return {
      isTagsOpen: false,
      articleData: {
        title: '',
        author: '',
        likes: 0,
        prologue: '',
        tags: [],
        index: []
      }
    }
  },
  methods: {
    openTagsForm() {
      console.log('open tags form!');
      this.isTagsOpen = true;
    }
  }
}
</script>

<style lang="scss" scoped>
.form-place {
  margin-top: 0;
  @media screen and (min-width: 480px) {
    margin-top: 30px;
  }
  form {
    // border: 1px solid #999;
    width: 95%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    .flame {
      border: 7px dashed #444;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 65px 0;
      margin: 0;
      p { color: #555; }
    }
    .input {
      color: #666;
      background: #202020;
      background: transparent;
      border: none;
      margin: 10px 0;
      &:focus { outline: none; }
    }
    .title-form {
      height: 42px;
      font-size: 35px;
      margin-top: 30px;
    }
    .prologue-form {
      font-size: 20px;
      resize: none;
    }
    .tags-form {
      display: flex;
      flex-direction: row;
      .hashtag-icon {
        color: var(--currentTheme);
        width: 30px;
        height: 30px;
        border: 1px solid var(--currentTheme);
        transition: 500ms;
        &:hover {
          color: #111;
          background: var(--currentTheme);
          border: none;
          cursor: pointer;
        }
      }
      input {
        border: 1px solid #eee;
      }
    }
  }
}
</style>
