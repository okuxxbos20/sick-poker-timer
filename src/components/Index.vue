<template>
  <div class="container">
    <Login/>
    <Timer />
    <Controller />
    <Infomation />
    <Setting />
  </div>
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

<style lang="scss" scoped></style>
