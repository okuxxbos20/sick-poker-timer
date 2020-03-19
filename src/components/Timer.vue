<template>
  <div class="timer">
    <span class="flame">
      <p class="part time">{{ r_timer().min }} : {{ r_timer().sec }}</p>
      <h6 class="part level">LEVEL {{ r_level() }}</h6>
      <h6 class="part blinds">BLINDS</h6>
      <h6 class="part sbbb">{{ r_strategy()[r_level()-1][0] }}/{{ r_strategy()[r_level()-1][1] }}</h6>
    </span>
    <p class="nextbb">NEXT BLINDS :
      <span>
        {{ this.strategy[this.level][0] }}/{{ this.strategy[this.level][1] }}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Timer',
  props: {},
  data() {
    var duration = this.$store.state.duration;
    var strategy = this.$store.state.strategy;
    var level = this.$store.state.level;
    return {
      duration,
      strategy,
      level,
    }
  },
  methods: {
    r_timer () {
      return this.$store.getters.g_timer;
    },
    r_level () {
      return this.$store.getters.g_level;
    },
    r_strategy () {
      return this.$store.getters.g_strategy;
    }
  }
}
</script>

<style lang="scss" scoped>
.flame {
  width: 390px;
  height: 390px;
  margin: 40px 0 0 0;
  display: inline-block;
  border: 15px solid #26a65b;
  border-radius: 50%;
  position: relative;
  .part {
    width: 100%;
    position: absolute;
    -webkit-transform : translate(-50%, -50%);
    transform : translate(-50%, -50%);
  }
  .level {
    font-size: 30px;
    color: #aaa;
    margin: 0;
    top: 23%;
    left: 51%;
  }
  .time {
    font-size: 100px;
    color: #fff;
    margin: 0;
    padding: 0;
    font-family: 'Josefin Sans', sans-serif;
    top: 51.5%;
    left: 50%;
  }
  .blinds {
    font-size: 25px;
    color: #26a65b;
    top: 72%;
    left: 51%;
  }
  .sbbb {
    font-size: 55px;
    color: #aaa;
    margin: 0;
    top: 85%;
    left: 50.5%;
  }
}
.nextbb {
  color: #777;
  font-size: 20px;
  span {
    color: #26a65b;
    font-size: 35px;
  }
}
</style>
