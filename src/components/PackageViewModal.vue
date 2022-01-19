<template>
  <div>
    <vs-dialog
      width="550px"
      not-center
      :value="value"
      @input="close()"
    >
      <template #header>
        <h4 class="not-margin">
          {{ name }}
        </h4>
      </template>

      <div class="con-content">
        <p v-if="!packageData">
          No data from <b>api.npms.io</b> for this package
        </p>

        <div v-else>
          <h3 v-if="packageData.evaluation.popularity">
            Downloads: {{ packageData.evaluation.popularity.downloadsCount }}
          </h3>
          <h3 v-if="packageData.collected.npm">
            Dependents: {{ packageData.collected.npm.dependentsCount }}
          </h3>
          <h3 v-if="packageData.collected.npm">
            Stars: {{ packageData.collected.npm.starsCount }}
          </h3>

          <VueMarkdown>
            {{ packageData.collected.metadata.readme }}
          </VueMarkdown>
        </div>
      </div>


      <template #footer>
        <div class="con-footer">
          <vs-button @click="close()" transparent>
            Ok
          </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
import VueMarkdown from '@adapttive/vue-markdown'

export default {
  components: {
    VueMarkdown
  },

  props: {
    value: {
      type: Boolean,
      required: true
    },

    packageData: {
      type: Object | Boolean,
      required: true
    },

    name: {
      type: String | Number,
      default: () => 'Package'
    }
  },

  methods: {
    close() {
      this.$emit('input', false)
    }
  }
}
</script>