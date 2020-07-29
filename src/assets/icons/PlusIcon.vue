<template>
  <div class="icon">
    <svg viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
      <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'PlusIcon'
}
</script>

<style lang="scss" scoped>
.icon {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin: 0 20px;
  transition: 200ms;
}
</style>
