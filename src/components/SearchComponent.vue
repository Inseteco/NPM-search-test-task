<template>
  <div>
    <div class="center content-inputs">
      <vs-input
        v-model="search"
        placeholder="Search"
        state="primary"
        class="ins-search"
        @input="searchByQuery"
      />
    </div>
  </div>
</template>

<script>
import api from '@/mixins/api'

export default {
  mixins: [api],

  computed: {
    search: {
      get() {
        return this.$store.state.searchInput
      },

      set(v) {
        this.$store.commit('updateSearchInput', v)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .ins-search::v-deep input {
    width: 100%;
  }
</style>
