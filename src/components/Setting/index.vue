<template>
  <div class="setting container">
    <div class="part setting">
      <title>Stracture Setting 💻</title>
      <p class="sentence">You can change the setting freely by operating the table below.</p>
      <!-- controller -->
      <div class="mode">Mode: <strong>{{ selected }}</strong></div>
      <div class="upper row justify-content-center">
        <label v-for="option in options" :key="option.value" class="col-md-3">
          <input
            v-model="selected"
            type="radio"
            :value="option"
            class="radio-btn"
          />
            <span>{{ option }}</span>
        </label>
      </div>
      <div class="lower row">
        <div class="col-md-4">
          <p class="st-name">Players</p>
          <input
            type="text"
            @input="c_playersInput($event.target.value)"
            :value="r_players()"
          >
        </div>
        <div class="col-md-4">
          <p class="st-name">Total Chips</p>
          <input
            type="text"
            @input="c_totalInput($event.target.value)"
            :value="r_total()"
          >
        </div>
        <div class="col-md-4">
          <p class="st-name">In The Money</p>
          <input
            type="text"
            @input="c_itmInput($event.target.value)"
            :value="r_itm()"
          >
        </div>
      </div>
      <!-- controller -->
      <Table/>
    </div>
    <Color/>
    <div class="part getintouch">
      <title>Get In Touch 📮</title>
      <p class="sentence">Plz more feedback or comments thru DM. And if you wanna join our team, plz let us know.</p>
      <a href="#"><i class="fab fa-twitter sns"></i></a>
      <a href="https://github.com/okuxxbos20/sick-poker-timer"><i class="fab fa-github sns"></i></a>
    </div>
  </div>
</template>

<script>
import Table from './table';
import Color from './color';

export default {
  name: 'Setting',
  components: { Table, Color },
  data () {
    return {
      options: ['Hyper', 'Turbo', 'Standard', 'Deep Stack'],
      selected: 'Standard'
    }
  },
  methods: {
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
  }
}
</script>

<style lang="scss" scoped>
.setting {
  margin: 90px 0 0 0;
  padding-bottom: 1px;
  .part {
    margin-bottom: 40px;
    title {
      color: #aaa;
      margin: 0;
    }
    .sentence {
      text-align: center;
      color: #888;
      margin: 5px 0 10px;
    }
    .mode {
      color: #aaa;
      strong { color: var(--currentTheme); }
    }
    .upper {
      margin-top: 20px;
      label {
        input { display: none; }
        span {
          color: #aaa;
          position: relative;
          &:before {
            content: '';
            display: inline-block;
            position: absolute;
            top: 0;
            left: -30px;
            width: 20px;
            height: 20px;
            border: 1px solid #aaa;
            border-radius: 50%;
          }
        }
      }
    }
    .lower {
      color: #aaa;
      margin-top: 40px;
      .st-name { margin: 0 0 3px; }
      input {
        width: 230px;
        background: rgba(#333, 0.5);
        border: none;
        margin: 0 0 20px;
        border-radius: 100px;
        color: var(--currentTheme);
        text-align: center;
        font-size: 28px;
        &:focus { outline: none; }
      }
    }
    .sns {
      color: var(--currentTheme);
      font-size: 30px;
      margin: 10px;
      transition: 0.2s;
      &:hover { transform: scale(1.2); }
    }
  }
}
</style>

<style>
input:checked + span:after {
  content: '';
  position: absolute;
  top: 5px;
  left: -25px;
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--currentTheme);
}
</style>
