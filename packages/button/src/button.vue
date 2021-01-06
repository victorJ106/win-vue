<template>
  <button
    class="wn-button"
    @click="$emit('click')"
    :disabled="disabled || loading"
    :class="[
      type ? 'wn-button--' + type : '',
      size ? 'wn-button--' + size : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round
      }
    ]"
  >
    <i class="wn-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
  export default {
    name: 'WnButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      icon: {
        type: String,
        default: ''
      },
      size: String,
      loading: Boolean,
      plain: Boolean,
      disabled: Boolean,
      round: Boolean
    }
  }
</script>

<style lang="scss" scoped>

</style>