<template>
  <div class="container">
    <Header />
    <Timer />
    <Controller />
    <Infomation />
    <Setting />
  </div>
</template>

<script>
import Header from './Header';
import Timer from './Timer/';
import Controller from './Controller/';
import Infomation from './Information/';
import Setting from './Setting/';

export default {
  components: { Header, Timer, Controller, Infomation, Setting }
}
</script>

<style lang="scss" scoped></style>
