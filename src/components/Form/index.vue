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
        placeholder="abstruct"
      ></textarea>
      <div class="tags-form">
        <HashtagIcon class="hashtag-icon" />
        <input
          v-for="(placeholder, idx) in tagsPlaceholder"
          v-model="articleData.index[idx]"
          type="text"
          :key="idx"
          :placeholder="placeholder"
        >
      </div>
      <div class="main-form-insert">
        <span @click="openOptions()">
          <PlusIcon class="plus-icon"/>
        </span>
        <div v-if="isOptionOpen" class="insert-options">
          <PhotoIcon class="option-icon" />
          <BarchartIcon class="option-icon" />
        </div>
      </div>
    </form>
    <div class="preview">
      <p>{{ articleData.title }}</p>
      <p>{{ articleData.prologue }}</p>
      <p>{{ articleData.index }}</p>
      <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> -->
    </div>
  </div>
</template>

<script>
import PhotoIcon from '@/assets/icons/PhotoIcon';
import HashtagIcon from '@/assets/icons/HashtagIcon';
import PlusIcon from '@/assets/icons/PlusIcon';
import BarchartIcon from '@/assets/icons/BarchartIcon';

export default {
  components: { PhotoIcon, HashtagIcon, PlusIcon, BarchartIcon },
  data() {
    return {
      articleData: {
        author: '',
        createdAt: '',
        img: '',
        index: [],
        likes: 0,
        modifiedAt: '',
        prologue: '',
        sentence: '',
        tags: [],
        title: ''
      },
      tagsPlaceholder: ['set', 'up', 'to', 'five', 'tags'],
      isOptionOpen: false
    }
  },
  methods: {
    openOptions() {
      console.log('yes');
      this.isOptionOpen = !this.isOptionOpen;
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
      p { color: #666; }
    }
    .input {
      color: #666;
      // background: #222;
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
      width: 100%;
      .hashtag-icon {
        color: var(--currentTheme);
        width: 30px;
        height: 30px;
        transition: 500ms;
        &:hover {
          color: #111;
          background: var(--currentTheme);
          border: none;
          cursor: pointer;
        }
      }
      input {
        color: var(--currentTheme);
        font-weight: 600;
        border: none;
        background: #222;
        padding: 3px 10px;
        width: calc((100% - 100px) / 5);
        margin-right: 10px;
        &:focus { outline: none; }
      }
    }
    .main-form-insert {
      width: 100%;
      margin: 30px 0;
      .plus-icon {
        color: #666;
        border: 1px solid #666;
        padding: 10px;
        margin: 0 auto;
        transition: 200ms;
        &:hover {
          color: var(--currentTheme);
          border: 1px solid var(--currentTheme);
          cursor: pointer;
        }
      }
      .insert-options {
        display: flex;
        flex-direction: row;
        justify-content: center;
        .option-icon {
          color: #666;
          border: 1px solid #666;
          width: 50px;
          height: 50px;
          padding: 10px;
          margin: 20px 10px;
          &:hover {
            color: var(--currentTheme);
            border: 1px solid var(--currentTheme);
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
