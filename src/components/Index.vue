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
import Login from './Login.vue';
import Timer from './Timer.vue';
import Controller from './Controller.vue';
import Infomation from './Infomation.vue';
import Setting from './Setting.vue';

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
