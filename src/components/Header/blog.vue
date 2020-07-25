<template>
  <div class="">
    <router-link to="/blog">
      <p>Blog</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Blog'
}
</script>

<style lang="scss" scoped>
p {
  color: var(--currentTheme);
  font-size: 15px;
  font-weight: 600;
  position: absolute;
  top: 5px;
  left: 5%;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    border-bottom: 1px solid var(--currentTheme);
  }
}
</style>
