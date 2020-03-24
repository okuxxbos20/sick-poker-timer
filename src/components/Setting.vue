<template>
  <div class="docs container">

    <div class="part setting">
      <h3 class="h" v-if="this.lang">Strategy Setting</h3>
      <h3 class="h ja" v-if="!this.lang">設定</h3>
      <p class="p" v-if="this.lang">Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.
      <button type="button" class="langchange" v-if="this.lang" @click="langSwitch()">日本語</button>
      <p class="p ja" v-if="!this.lang">ハンドラ関数は状態を第1引数として取得し、状態の変更を行います。また、仮引数を追加することもできます。下記で仮引数を追加してみます。状態（state）の更新をしてみましょう。まず、覚えておく必要があるのは、ミューテーションは直接呼び出せないということです。つまり、のように使うことはできません。
      <button type="button" class="langchange" v-if="!this.lang" @click="langSwitch()">English</button>
      </p>

      <!-- controller -->
      <div class="st-initial row justify-content-center">
        <p>Players
          <input
            type="text"
            @input="c_playersInput($event.target.value)"
            :value="r_players()"
          >
        </p>
        <p>Total Chips
          <input
          @input="c_totalInput($event.target.value)"
          :value="r_total()"
          >
        </p>
        <p>In The Money
          <input
            type="text"
            @input="c_itmInput($event.target.value)"
            :value="r_itm()"
          >
        </p>
      </div>
      <!-- controller -->
      <Table/>
    </div>

    <div class="part howto">
      <h3 class="h" v-if="this.lang">How To</h3>
      <h3 class="h ja" v-if="!this.lang">使い方</h3>
      <p class="p" v-if="this.lang">Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.</p>
      <p class="p ja" v-if="!this.lang">ハンドラ関数は状態を第1引数として取得し、状態の変更を行います。また、仮引数を追加することもできます。下記で仮引数を追加してみます。状態（state）の更新をしてみましょう。まず、覚えておく必要があるのは、ミューテーションは直接呼び出せないということです。つまり、のように使うことはできません。
      </p>
    </div>

    <div class="part getintouch">
      <h3 class="h" v-if="this.lang">Get In Touch</h3>
      <h3 class="h ja" v-if="!this.lang">コンタクト</h3>
      <p class="p" v-if="this.lang">Plz more feedback or comments thru DM. And if you wanna join our team, plz let us know.</p>
      <p class="p ja" v-if="!this.lang">改善点や要望があれば以下のアカウントからDMでお願いします。</p>
      <a href="#"><i class="fab fa-twitter sns"></i></a>
      <a href="#"><i class="fab fa-instagram sns"></i></a>
    </div>

  </div>
</template>

<script>
import Table from './Table.vue';

export default {
  name: 'Setting',
  props: {},
  components: { Table },
  data() {
    return {
      lang: true,//true->'en', false->'ja'
    }
  },
  methods: {
    langSwitch () {
      this.lang = this.lang === true ? false : true;
    },
    c_playersInput (n) {
      this.$store.commit('m_players', n);
    },
    c_totalInput (n) {
      this.$store.commit('m_total', n);
    },
    c_itmInput (n) {
      this.$store.commit('m_itm', n);
    },
    r_players () {
      return this.$store.getters.g_players;
    },
    r_total () {
      // const delimeter = new Intl.NumberFormat();
      const totalChips = this.$store.getters.g_total;
      // const total = delimeter.format(totalChips);
      return totalChips;
    },
    r_itm () {
      return this.$store.getters.g_itm;
    }
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
.docs {
  margin: 90px 0 0 0;
  padding-bottom: 1px;
  .h {
    color: #aaa;
    margin: 0;
  }
  .p {
    // text-align: justify;
    text-align: center;
    color: #888;
    margin: 5px 0 10px;
  }
  .langchange {
    font-size: 12px;
    color: #26a65b;
    background: transparent;
    border: none;
    border-bottom: 2px solid #111;
    &:focus {
      outline: none;
    }
    &:hover {
      border-bottom: 2px solid #26a65b;
    }
  }
  .part {
    margin: 0 0 75px;
    .st-initial {
      color: #aaa;
      margin-top: 40px;
      input {
        width: 40%;
        background: #333;
        border: none;
        margin-left: 15px;
        border-radius: 100px;
        color: #26a65b;
        text-align: center;
        font-size: 28px;
        &:focus {
          outline: none;
        }
      }
    }
    .sns {
      color: #26a65b;
      font-size: 30px;
      margin: 0 10px;
      transition: 0.2s;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
}
</style>
