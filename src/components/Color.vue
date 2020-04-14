<template>
  <main>
    <h3 class="h">Choose color</h3>
    <div class="color red" @click="colorSelect('#f03434')"></div>
    <div class="color green" @click="colorSelect('#26a65b')"></div>
    <div class="color blue" @click="colorSelect('#00b5cc')"></div>
    <div class="color purple" @click="colorSelect('#9a12b3')"></div>
    <div class="color yellow" @click="colorSelect('#f7ca18')"></div>
    <div class="color orange" @click="colorSelect('#e67e22')"></div>
    <div class="color grey" @click="colorSelect('#dadfe1')"></div>
  </main>
</template>

<script>
export default {
  name: 'Controller',

  methods: {
    colorSelect(color) {
      document.documentElement.style.setProperty('--currentTheme', color);
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  margin-bottom: 50px;
  .h {
    color: #aaa;
  }
  .color {
    display: inline-block;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin: 10px;
    transition: 0.2s;
    &:hover { transform: scale(1.1); }
  }
  .red { background: #f03434; }
  .green { background: #26a65b; }
  .blue { background: #00b5cc; }
  .purple { background: #9a12b3; }
  .yellow { background: #f7ca18; }
  .orange { background: #e67e22; }
  .grey { background: #dadfe1; }
}
</style>
