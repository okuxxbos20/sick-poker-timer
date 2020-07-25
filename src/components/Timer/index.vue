<template>
  <div class="timer">
    <div
      class="circle"
      :class="{ circle_animation: isClockStart }"
    >
      <span class="flame">
        <p class="part time">
          {{ timeRemaining.min }} : {{ timeRemaining.sec }}
        </p>
        <h6 class="part level">LEVEL {{ currentLevel }}</h6>
        <h6 class="part blinds">BLINDS</h6>
        <h6 class="part sbbb">
          {{ gameStructure[currentLevel-1][0] }}/{{ gameStructure[currentLevel-1][1] }}
        </h6>
      </span>
    </div>
    <p class="nextbb">NEXT BLINDS :
      <span>
        {{ gameStructure[currentLevel][0] }}/{{ gameStructure[currentLevel][1] }}
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
  computed: {
    isClockStart () {
      return this.$store.getters.g_status;
    },
    timeRemaining () {
      return this.$store.getters.g_timer;
    },
    currentLevel () {
      return this.$store.getters.g_level;
    },
    gameStructure () {
      return this.$store.getters.g_strategy;
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=BioRhyme+Expanded|Holtwood+One+SC|Stalinist+One|Timmana&display=swap');

// inserted css by vue
.circle_animation {
  &:before { animation: rotate-circle-left var(--duration) linear infinite; }
  &:after { animation: rotate-circle-right var(--duration) linear infinite; }
}

.circle {
  position: relative;
  margin: 0 auto;
  width: calc(100vw - 30px);
  height: calc(100vw - 30px);
  max-width: 400px;
  max-height: 400px;
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
  width: 370px;
  height: 370px;
  margin: 15px 0 0 0;
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
    color: #aaa;
    font-size: 30px;
    margin: 0;
    top: 23%;
    left: 51%;
  }
  .time {
    color: #fff;
    font-size: 100px;
    font-weight: 600;
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
    color: #aaa;
    font-size: 50px;
    font-weight: 550;
    margin: 0;
    top: 85%;
    left: 50.5%;
  }
}
.nextbb {
  color: #777;
  font-size: 20px;
  span {
    font-size: 45px;
    color: var(--currentTheme);
  }
}
</style>
