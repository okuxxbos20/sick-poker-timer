<template>
  <div class="icon">
    <svg
      viewBox="0 0 16 16"
      class="bi bi-arrow-left-short"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill-rule="evenodd" d="M7.854 4.646a.5.5 0 0 1 0 .708L5.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z" />
      <path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h6.5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ArrowleftIcon'
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
