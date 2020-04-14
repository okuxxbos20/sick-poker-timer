<template>
  <div
    id="app"
  >
    <Index/>
  </div>
</template>

<script>
import Index from './components/Index.vue';

export default {
  name: 'App',
  components: { Index }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');
@import url('https://fonts.googleapis.com/css?family=Kosugi|Sawarabi+Gothic|Sawarabi+Mincho&display=swap');
:root {
  --currentTheme: #26a65b;
  --greenTheme: #26a65b;
  --purpleTheme: #9a12b3;//purple
  --redTheme: #f03434;//red
  --blueTheme: #00b5cc;//blue
  --yellowTheme: #f7ca18;//yellow
  --greyTheme: #dadfe1;//grey
  --orangeTheme: #e67e22;//orange
  --bg: #111;
  --text: #888;
}

html {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
  text-align: center;
  color: #2c3e50;
  background: #111;
}

a {
  text-decoration: none;
  &:hover { text-decoration: none;}
}

.ja {
  font-family: 'Sawarabi Mincho', sans-serif;
  font-family: 'Kosugi', sans-serif;
  font-family: 'Sawarabi Gothic', sans-serif;
}
</style>
