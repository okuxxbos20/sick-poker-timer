<template>
  <div class="overall">
    <ModeSwitch
      :is-preview-mode="isPreviewMode"
      @switchMode="switchMode"
    />
    <div v-show="!isPreviewMode" class="editor-place">
      <form>
        <div class="flame">
          <div v-if="!previewImg" class="upload-box">
            <label>
              <PhotoIcon class="photo-icon" />
              <p>Upload Photo.</p>
              <input ref="file" type="file" @change="imgUpload">
            </label>
          </div>
          <div v-if="previewImg" class="uploaded-box">
            <img :src="previewImg" alt="uploaded-img">
          </div>
        </div>
        <div v-if="previewImg" class="reupload">
          <label>
            <PhotoIcon class="photo-icon" />
            <p>Re-Upload ?</p>
            <input ref="file" type="file" @change="imgUpload">
          </label>
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
        />
        <div class="tags-form">
          <HashtagIcon class="hashtag-icon" />
          <input
            v-for="(placeholder, idx) in tagsPlaceholder"
            v-model="articleData.tags[idx]"
            type="text"
            :key="idx"
            :placeholder="placeholder"
          >
        </div>
        <div class="main-form-insert">
          <textarea
            v-model="articleData.sentence"
            rows="8"
            cols="80"
          />
          <!-- option -->
          <div class="option-select-part">
            <span @click="openOptions()">
              <PlusIcon class="plus-icon"/>
            </span>
            <div v-if="isOptionOpen" class="insert-options">
              <PhotoIcon class="option-icon" />
              <BarchartIcon class="option-icon" />
            </div>
          </div>
          <!-- option -->
        </div>
      </form>
    </div>
    <Preview
      v-show="isPreviewMode"
      :article-data="articleData"
      :preview-img="previewImg"
    />
    <div class="submit">
      <button type="button" @click="postArticle()">post?</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import ModeSwitch from './components/ModeSwitch';
import PhotoIcon from '@/assets/icons/PhotoIcon';
import HashtagIcon from '@/assets/icons/HashtagIcon';
import PlusIcon from '@/assets/icons/PlusIcon';
import BarchartIcon from '@/assets/icons/BarchartIcon';
import Preview from './components/Preview';

export default {
  components: {
    ModeSwitch,
    PhotoIcon,
    HashtagIcon,
    PlusIcon,
    BarchartIcon,
    Preview
  },
  data() {
    return {
      articleData: {
        author: 'Please Login',
        createdAt: new Date(),
        img: '',
        index: [],
        likes: 0,
        modifiedAt: new Date(),
        prologue: '',
        tags: [],
        title: ''
      },
      uploadFile: '',
      previewImg: '',
      tagsPlaceholder: ['set', 'up', 'to', 'five', 'tags'],
      isOptionOpen: false,
      isPreviewMode: false
    }
  },
  methods: {
    switchMode(mode) {
      if (mode === 'toPreview') this.isPreviewMode = true;
      if (mode === 'toEditor') this.isPreviewMode = false;
    },
    openOptions() {
      this.isOptionOpen = !this.isOptionOpen;
    },
    async imgUpload(event) {
      const files = event.target.files || event.dataTransfer.files;
      const file = files[0];
      if (this.checkFile(file)) {
        const picture = await this.getBase64(file);
        this.uploadFile = file;
        this.previewImg = picture;
      }
    },
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      })
    },
    checkFile(file) {
      let result = true;
      const sizeLimit = 5000000;
      if (!file) { result = false; }
      if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        result = false;
      }
      if (file.size > sizeLimit) { result = false; }
      return result
    },
    async postArticle() {
      const db = firebase.firestore();
      await db.collection('article').add(this.articleData)
      .then(article => {
        console.log(article);
        this.articleData = {};
      }).catch(error => {
        console.log(error);
      });
      const file = this.uploadFile;
      const storage = firebase.storage().ref();
      const uploadTask = storage.child(`article/${file.name}`).put(file);
      uploadTask.on('state_changed',
        (snapshot) => { console.log('snapshot', snapshot) },
        (error) => { console.log('error', error) },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File available at', downloadURL)
            // downloadURLが渡せない
            this.articleData.img = downloadURL;
          });
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.overall {
  .editor-place {
    margin-top: 0;
    @media screen and (min-width: 480px) { margin-top: 30px; }
    form {
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
        padding: 5px;
        margin: 0;
        .upload-box {
          label {
            color: #666;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 50px 0;
            &:hover { cursor: pointer; }
            .photo-icon {
              color: var(--currentTheme);
              opacity: 0.5;
              transition: 200ms;
              &:hover { opacity: 1.0; }
            }
            input[type="file"]::-webkit-file-upload-button { display: none; }
          }
        }
        .uploaded-box {
          width: 100%;
          height: auto;
          img {
            width: 100%;
            height: auto;
          }
          label {
            color: #666;
            display: flex;
            flex-direction: column;
            align-items: center;
            input[type="file"]::-webkit-file-upload-button { display: none; }
          }
        }
      }
      .reupload {
        color: var(--currentTheme);
        display: flex;
        flex-direction: row;
        justify-content: center;
        label {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 10px 0;
          transition: 200ms;
          &:hover {
            transform: scale(1.1);
            cursor: pointer;
          }
          input[type="file"]::-webkit-file-upload-button { display: none; }
          .photo-icon {
            width: 30px;
            height: 30px;
          }
          p {
            font-size: 12px;
            margin: 0;
          }
        }
      }
      .input {
        color: #666;
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
        textarea {
          color: #666;
          background: transparent;
          border: none;
          padding: 8px 12px;
          width: 100%;
          resize: none;
          &:focus { outline: none; }
        }
        .option-select-part {
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
  }
  .submit {
    margin: 20px 0;
    button {
      color: var(--currentTheme);
      margin: 0 auto;
      background: transparent;
      border: 1px solid var(--currentTheme);
      border-radius: 8px;
      width: 250px;
      padding: 5px 10px;
      transition: 200ms;
      &:hover {
        color: #111;
        background: var(--currentTheme);
        border: none;
        cursor: pointer;
      }
      &:focus { outline: none; }
    }
  }
}
</style>
