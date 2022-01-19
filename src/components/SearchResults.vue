<template>
  <div>
    <div class="ins-total">
      <small>
        Total: <b>{{ total }}</b> results
      </small>
      <small>
        (API limit: <b>250</b> results)
      </small>
    </div>

    <div class="ins-table">
      <vs-table v-show="results && results.length > 0">
        <template #thead>
          <vs-tr>
            <vs-th>
              Package
            </vs-th>
            <vs-th>
              Version
            </vs-th>
            <vs-th>
              Description
            </vs-th>
            <vs-th>
              Author
            </vs-th>
            <vs-th>
              Links
            </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr
            v-for="(item, i) in $vs.getPage(results, page, max)"
            :key="i"
            :data="item"
            class="ins-table-item"
            @click="openPackageView(item.package)"
          >
            <vs-td>
              {{ item.package.name }}
            </vs-td>
            <vs-td>
              {{ item.package.version }}
            </vs-td>
            <vs-td>
              {{ item.package.description }}
            </vs-td>
            <vs-td>
              {{ item.package.author ? item.package.author.name : '-' }}
            </vs-td>
            <vs-td>
              <vs-tooltip
                v-if="item.package.links.repository"
                primary
              >
                <i
                  class='bx bxl-github bx-sm ins-link'
                  @click="openExternal(item.package.links.repository)"
                ></i>
                <template #tooltip>
                  {{ item.package.links.repository }}
                </template>
              </vs-tooltip>

              <vs-tooltip
                v-if="item.package.links.npm"
                primary
              >
                <i
                  class='bx bxl-nodejs bx-sm ins-link'
                  @click="openExternal(item.package.links.npm)"
                ></i>
                <template #tooltip>
                  {{ item.package.links.npm }}
                </template>
              </vs-tooltip>
            </vs-td>
          </vs-tr>
        </template>
        <template #footer>
          <vs-pagination
            v-model="page"
            :length="$vs.getLength(results, max)"
          />
        </template>
      </vs-table>
    </div>

    <PackageViewModal
      v-model="modal"
      :packageData="packageData"
      :name="name"
    />
  </div>
</template>

<script>
import api from '@/mixins/api'
import helpers from '@/mixins/helpers'

import PackageViewModal from '@/components/PackageViewModal'

export default {
  mixins: [api, helpers],

  components: {
    PackageViewModal
  },

  data: () => ({
    max: 10,

    modal: false,
    packageData: false,
    name: {}
  }),

  methods: {
    async openPackageView(payload) {
      if(payload) {
        this.packageData = false
        this.name = payload.name

        await this.packageDataRequest(payload)

        this.modal = true
      }
    }
  },

  computed: {
    total() {
      return this.$store.state.total
    },

    results() {
      return this.$store.state.results
    },

    page: {
      get() {
        return this.$store.state.page
      },

      set(v) {
        this.$store.commit('updatePage', v)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .ins-total {
    padding: 4px;

    b {
      color: rgb(25, 91, 255);
    }
  }

  .ins-link {
    cursor: pointer;
  }

  .ins-table {
    padding: 8px 0;
  }

  .ins-table-item {
    cursor: pointer;

    &:hover {
      color: rgb(25, 91, 255);
    }
  }
</style>
