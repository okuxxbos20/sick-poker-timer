<template>
  <main class="container">
    <Login/>
    <Timer />
    <Controller />
    <Infomation />
    <Setting />
  </main>
</template>

<script>
import Login from './Login/';
import Timer from './Timer/';
import Controller from './Controller/';
import Infomation from './Information/';
import Setting from './Setting/';

export default {
  components: { Login, Timer, Controller, Infomation, Setting }
}
</script>

<style lang="scss" scoped>
.main {
  padding: 0;
  background: #111;
}
</style>
