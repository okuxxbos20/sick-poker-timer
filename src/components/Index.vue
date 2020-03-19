<template>
  <div class="main container">

    <Timer/>

    <!-- controller -->
    <div class="controller justify-content-center">
      <!-- plus btn -->
      <button @click="c_counterUp()" class="ctr plus_btn">
        <i class="fas fa-plus"></i>
      </button>
      <!-- plus btn -->

      <!-- start btn -->
      <button v-show="!r_status()" type="button" @click="c_startTimer()" class="ctr">
        <i class="fas fa-play"></i>
      </button>
      <button v-show="r_status()" type="button" @click="c_stopTimer()" class="ctr stop">
        <i class="fas fa-equals"></i>
      </button>
      <!-- start btn -->

      <!-- minus btn -->
      <button @click="c_counterDown()" class="ctr minus_btn">
        <i class="fas fa-minus"></i>
      </button>
      <!-- minus btn -->
    </div>
    <!-- controller -->

    <Infomation/>
    <Setting/>
  </div>
</template>

<script>
import Timer from './Timer.vue';
import Infomation from './Infomation.vue';
import Setting from './Setting.vue';

export default {
  components: { Timer, Infomation, Setting },
  data() {
    var strategy = this.$store.state.strategy;
    var status = this.$store.state.status;
    var level = this.$store.state.level;
    var players = this.$store.state.players;
    var total = this.$store.state.total;
    var itm = this.$store.state.itm;
    return {
      strategy,
      status,
      level,
      players,
      total,
      itm,
    }
  },
  filters: {
    numDelimiter: function (n) {
      if (!n) {
        return '0';
      }
    }
  },
  methods: {
    c_counterUp() {
      this.$store.commit('m_counterUp');
    },
    c_counterDown() {
      this.$store.commit('m_counterDown');
    },
    c_startTimer() {
      this.$store.commit('m_startTimer');
    },
    c_stopTimer () {
      this.$store.commit('m_stopTimer');
    },
    r_status() {
      return this.$store.getters.g_status;
    }
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
.main {
  padding: 0;
  background: #111;
  .controller {
    .ctr {
      color: #26a65b;
      font-size: 30px;
      width: 70px;
      height: 70px;
      margin: 5px 20px 40px;
      padding-top: 5px;
      border-radius: 50%;
      border: 2px solid #26a65b;
      background: transparent;
      transition: 0.2s;
      &:focus {
        outline: none;
      }
      &:hover {
        color: #2e3131;
        border: 2px solid #2e3131;
      }
    }
    .stop {
      color: #111;
      background: #26a65b;
      transform: rotate(90deg);
      &:hover {
        border: 2px solid #26a65b;
      }
    }
  }
}
</style>
