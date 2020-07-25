<template>
  <header>
    <router-link to="/">
      <ArrowleftIcon class="arrow-left-icon" />
    </router-link>
    <input
      v-model="searchQuery"
      class="search-window"
      type="search"
      placeholder="search"
    >
  </header>
</template>

<script>
import ArrowleftIcon from '@/assets/icons/ArrowleftIcon';

export default {
  name: 'BlogHeader',
  components: { ArrowleftIcon }
}
</script>

<style lang="scss" scoped>
header {
  background: #111;
  width: 100%;
  height: 45px;
  position: fixed;
  bottom: 0px;
  border-top: 1px solid var(--currentTheme);
  border-bottom: 1px solid #111;
  @media screen and (min-width: 480px) {
    top: 0px;
    border-top: 1px solid #111;
    border-bottom: 1px solid var(--currentTheme);
  }
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  .arrow-left-icon {
    position: absolute;
    top: 5px;
    left: 5px;
  }
  .search-window {
    color: var(--currentTheme);
    background: rgba(#333, 0.9);
    width: 200px;
    height: 30px;
    border: none;
    border-radius: 20px;
    padding: 14px;
    &:focus { outline: none; }
  }
}
</style>
