<template>
  <div class="header">
    <Blog />
    <Login />
  </div>
</template>

<script>
import Blog from './blog';
import Login from './login';

export default {
  name: 'Header',
  components: { Blog, Login }
}
</script>

<style lang="scss" scoped>
.header {
  height: 35px;
}
</style>
