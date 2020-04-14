<template>
  <div class="main container">
    <Timer/>
    <Controller/>
    <Infomation/>
    <Setting/>
  </div>
</template>

<script>
import Timer from './Timer.vue';
import Controller from './Controller.vue';
import Infomation from './Infomation.vue';
import Setting from './Setting.vue';

export default {
  components: { Timer, Controller, Infomation, Setting }
}
</script>

<style lang="scss" scoped>
.main {
  padding: 40px 0 0 0;
  background: #111;
}
</style>
