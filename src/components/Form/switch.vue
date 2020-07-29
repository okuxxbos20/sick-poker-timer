<template>
  <div class="">
    <div class="switch">
      <div
        class="switch-btn editor"
        :class="{ selected: isPreviewMode }"
        @click="switchMode('toEditor')"
      >
        <span>editor</span>
      </div>
      <div
        class="switch-btn preview"
        :class="{ selected: !isPreviewMode }"
        @click="switchMode('toPreview')"
      >
        <span>preview</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModeSwitch',
  props: {
    isPreviewMode: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    switchMode(mode) {
      this.$emit('switchMode', mode);
    }
  }
}
</script>

<style lang="scss" scoped>
.switch {
  width: 95%;
  height: 35px;
  margin: 10px auto;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  .switch-btn {
    color: #555;
    background: var(--currentTheme);
    border: 1px solid var(--currentTheme);
    width: 50%;
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @mixin border($top-left, $top-right, $btm-right, $btm-left) {
    border-top-left-radius: $top-left;
    border-top-right-radius: $top-right;
    border-bottom-right-radius: $btm-right;
    border-bottom-left-radius: $btm-left;
  }
  .editor { @include border(8px, 0, 0, 8px); }
  .preview { @include border(0, 8px, 8px, 0); }
  .selected {
    color: var(--currentTheme);
    background: #111;
  }
}
</style>
