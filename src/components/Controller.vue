<template>
  <div class="controller justify-content-center">
    <button @click="c_counterUp()" class="ctr plus_btn">
      <i class="fas fa-plus"></i>
    </button>
    <button v-show="!r_status()" type="button" @click="c_startTimer()" class="ctr">
      <i class="fas fa-play"></i>
    </button>
    <button v-show="r_status()" type="button" @click="c_stopTimer()" class="ctr stop">
      <i class="fas fa-equals"></i>
    </button>
    <button @click="c_counterDown()" class="ctr minus_btn">
      <i class="fas fa-minus"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Controller',
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
  }
}
</script>

<style lang="scss" scoped>
.controller {
  .ctr {
    color: var(--currentTheme);
    font-size: 30px;
    width: 70px;
    height: 70px;
    margin: 5px 20px 40px;
    padding-top: 5px;
    border-radius: 50%;
    border: 2px solid var(--currentTheme);
    background: transparent;
    transition: 0.2s;
    &:focus { outline: none; }
    &:hover {
      color: #2e3131;
      border: 2px solid #2e3131;
    }
  }
  .stop {
    color: #111;
    background: var(--currentTheme);
    transform: rotate(90deg);
    &:hover { border: 2px solid var(--currentTheme); }
  }
}
</style>
