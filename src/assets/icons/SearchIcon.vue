<template>
  <div class="icon">
    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
      <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
    </svg>
  </div>
</template>

<script>
export  default {
  name: 'SearchIcon'
}
</script>

<style lang="scss" scoped>
.icon {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin: 0 20px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    margin-left: 10px;
  }
  path {
    fill: var(--currentTheme);
    opacity: 0.8;
    &:hover { opacity: 1.0; }
  }
}
</style>
