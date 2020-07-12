<template>
  <div class="docs container">
    <div class="part setting">
      <h3 class="h">Stracture Setting 💻</h3>
      <p class="p">You can change the setting freely by operating the table below.</p>
      <!-- controller -->
      <div class="mode">Mode: <strong>{{ selected }}</strong></div>
      <div class="upper row justify-content-center">
        <div v-for="option in options" :key="option" class="col-md-3">
          <b-form-radio
            name="some-radios"
            :value="option"
            size="lg"
            @change="modeSelected(option)"
          >
            <span>{{ option }}</span>
          </b-form-radio>
        </div>
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
      <h3 class="h">Get In Touch 📮</h3>
      <p class="p">Plz more feedback or comments thru DM. And if you wanna join our team, plz let us know.</p>
      <a href="#"><i class="fab fa-twitter sns"></i></a>
      <a href="https://github.com/okuxxbos20/sick-poker-timer"><i class="fab fa-github sns"></i></a>
    </div>
  </div>
</template>

<script>
import Table from './Table.vue';
import Color from './Color.vue';

export default {
  name: 'Setting',
  props: {},
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
    },
    modeSelected (item) {
      this.selected = item;
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
    text-align: center;
    color: #888;
    margin: 5px 0 10px;
  }
  .part {
    margin-bottom: 40px;
    .mode {
      color: #aaa;
      strong { color: var(--currentTheme); }
    }
    .upper {
      input {
        display: none;
        margin-right: 30px;
        &:hover { cursor: pointer; }
      }
      span {
        color: #aaa;
        padding-left: 15px;
      }
    }
    .lower {
      color: #aaa;
      margin-top: 40px;
      .st-name { margin: 0 0 3px; }
      input {
        width: 230px;
        background: #333;
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
