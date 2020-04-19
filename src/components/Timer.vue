<template>
  <div class="timer">
    <div class="circle" :class="{ circle_animation: r_status() }">
      <span class="flame">
        <p class="part time">{{ r_timer().min }} : {{ r_timer().sec }}</p>
        <h6 class="part level">LEVEL {{ r_level() }}</h6>
        <h6 class="part blinds">BLINDS</h6>
        <h6 class="part sbbb">
          {{ r_strategy()[r_level()-1][0] }}/{{ r_strategy()[r_level()-1][1] }}
        </h6>
      </span>
    </div>
    <p class="nextbb">NEXT BLINDS :
      <span>
        {{ r_strategy()[r_level()][0] }}/{{ r_strategy()[r_level()][1] }}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Timer',
  data() {
    return {};
  },
  methods: {
    r_status () {
      return this.$store.getters.g_status;
    },
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
// inserted css by vue
.circle_animation {
  &:before { animation: rotate-circle-left var(--duration) linear infinite; }
  &:after { animation: rotate-circle-right var(--duration) linear infinite; }
}

.circle {
  position: relative;
  margin: 0 auto;
  width: 400px;
  height: 400px;
  background: #111;
  border-radius: 50%;
  overflow: hidden;
  z-index: 1;
    // left
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: -200px;
    width: 400px;
    height: 400px;
    background: var(--currentTheme);
    // background: linear-gradient(45deg, #26a65b, #111);
    transform-origin: right 200px;
    z-index: 2;
  }
  // right
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 200px;
    width: 400px;
    height: 400px;
    background: var(--currentTheme);
    // background: linear-gradient(45deg, #111, #26a65b);
    transform-origin: left 200px;
    z-index: 3;
  }
  @keyframes rotate-circle-right {
    0% {
      transform: rotate(0deg);
      background: var(--currentTheme);
    }
    50%  {
      transform: rotate(180deg);
      background: var(--currentTheme);
    }
    50.01% {
      transform: rotate(360deg);
      background: #111;
    }
    100% {
      transform: rotate(360deg);
      background: #111;
    }
  }
  @keyframes rotate-circle-left {
    0%   { transform: rotate(0deg); }
    50%  { transform: rotate(0deg); }
    100% { transform: rotate(180deg); }
  }
}
.flame {
  width: 380px;
  height: 380px;
  margin: 10px 0 0 0;
  background: #111;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  z-index: 4;
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
    color: var(--currentTheme);
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
    font-size: 35px;
    color: var(--currentTheme);
  }
}
</style>
