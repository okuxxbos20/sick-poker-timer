<template>
  <div class="icon">
    <svg viewBox="0 0 16 16" class="bi bi-bookmark" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M8 12l5 3V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12l5-3zm-4 1.234l4-2.4 4 2.4V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10.234z"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'BookmarkIcon'
}
</script>

<style lang="scss" scoped>
.icon {
  width: 23px;
  height: 23px;
  border-radius: 50%;
  margin: 0 20px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    margin-left: 10px;
  }
  path {
    fill: #aaa;
    opacity: 0.8;
  }
}
</style>
