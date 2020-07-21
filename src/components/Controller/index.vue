<template>
  <div class="controller justify-content-center">
    <button @click="c_counterUp()" class="btn">
      <i class="fas fa-plus"></i>
    </button>

    <button v-show="!r_status()" type="button" @click="c_startTimer()" class="btn center">
      <i class="fas fa-play"></i>
    </button>
    <button v-show="r_status()" type="button" @click="c_stopTimer()" class="btn center stop">
      <i class="fas fa-equals"></i>
    </button>

    <button @click="c_counterDown()" class="btn">
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
  .btn {
    color: var(--currentTheme);
    font-size: 30px;
    width: 70px;
    height: 70px;
    padding: 0;
    margin: 5px 0 40px;
    align-items: center;
    justify-content: center;
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
  .center {
    margin: 5px 20px 40px;
  }
  .stop {
    color: #111;
    background: var(--currentTheme);
    transform: rotate(90deg);
    &:hover { border: 2px solid var(--currentTheme); }
  }
}
</style>
