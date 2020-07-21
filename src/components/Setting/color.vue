<template>
  <div class="color">
    <title>Choose color</title>
    <div>
      <div class="picker red" @click="colorSelect('#f03434')"></div>
      <div class="picker green" @click="colorSelect('#26a65b')"></div>
      <div class="picker blue" @click="colorSelect('#00b5cc')"></div>
      <div class="picker purple" @click="colorSelect('#9a12b3')"></div>
    </div>
    <div>
      <div class="picker yellow" @click="colorSelect('#f7ca18')"></div>
      <div class="picker orange" @click="colorSelect('#e67e22')"></div>
      <div class="picker grey" @click="colorSelect('#dadfe1')"></div>
      <div class="picker random" @click="randomColor()"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Controller',
  methods: {
    colorSelect(color) {
      document.documentElement.style.setProperty('--currentTheme', color);
    },
    randomColor () {
      const red = Math.round((Math.random() * 255));
      const green = Math.round((Math.random() * 255));
      const blue = Math.round((Math.random() * 255));
      const randomColor = `rgba(${red}, ${green}, ${blue})`;
      document.documentElement.style.setProperty('--currentTheme', randomColor);
    }
  }
}
</script>

<style lang="scss" scoped>
.color {
  margin-bottom: 50px;
  title { color: #aaa; }
  .picker {
    display: inline-block;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin: 10px;
    transition: 200ms;
    &:hover {
      cursor: pointer;
      transform: scale(1.3);
    }
  }
  .red { background: #f03434; }
  .green { background: #26a65b; }
  .blue { background: #00b5cc; }
  .purple { background: #9a12b3; }
  .yellow { background: #f7ca18; }
  .orange { background: #e67e22; }
  .grey { background: #dadfe1; }
  .random {
    background:
      linear-gradient(0deg, rgba(130,0,0,1), rgba(130,0,0,0.1) 100%),
      linear-gradient(120deg, rgba(0,225,0,1), rgba(0,255,0,0.1) 100%),
      linear-gradient(240deg, rgba(0,0,225,1), rgba(0,0,255,0.1) 100%);
  }
}
</style>
