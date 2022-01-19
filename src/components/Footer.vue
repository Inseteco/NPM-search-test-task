<template>
  <div
    class="ins-github-link"
    @click="openExternal('https://github.com/Inseteco')"
  >
    Author:
    <i class='bx bxl-github ins-link'></i>
    @Inseteco
  </div>
</template>

<script>
import helpers from '@/mixins/helpers'

export default {
  mixins: [helpers]
}
</script>

<style lang="scss" scoped>
  .ins-github-link {
    cursor: pointer;

    padding: 15px 5px;
  }
</style>
