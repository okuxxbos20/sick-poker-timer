<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');
@import url('https://fonts.googleapis.com/css?family=Kosugi|Sawarabi+Gothic|Sawarabi+Mincho&display=swap');
:root {
  --currentTheme: #26a65b;
  --duration: 600s;
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
