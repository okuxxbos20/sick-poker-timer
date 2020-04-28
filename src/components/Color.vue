<template>
  <main>
    <h3 class="h">Choose color</h3>
    <div>
      <div class="color red" @click="colorSelect('#f03434')"></div>
      <div class="color green" @click="colorSelect('#26a65b')"></div>
      <div class="color blue" @click="colorSelect('#00b5cc')"></div>
      <div class="color purple" @click="colorSelect('#9a12b3')"></div>
    </div>
    <div>
      <div class="color yellow" @click="colorSelect('#f7ca18')"></div>
      <div class="color orange" @click="colorSelect('#e67e22')"></div>
      <div class="color grey" @click="colorSelect('#dadfe1')"></div>
      <div class="color random" @click="randomColor()"></div>
    </div>
  </main>
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
main {
  margin-bottom: 50px;
  .h { color: #aaa; }
  .color {
    display: inline-block;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin: 10px;
    transition: 0.2s;
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
