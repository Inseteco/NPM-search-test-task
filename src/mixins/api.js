import axios from 'axios'
import debounce from 'lodash.debounce'

export default {
  methods: {
    searchByQuery() {
      let query = String(this.$store.state.searchInput).trim()

      let d = debounce(
        (q) => this.searchRequest(q),
        1000
      )

      if (query) {
        d(query)
      }
    },

    async searchRequest(query) {
      const loading = this.$vs.loading({
        text: 'Loading...'
      })

      await axios.get(`https://api.npms.io/v2/search?q=${query}&size=250`)
        .then((result) => {
          this.$store.commit('updateResults', result)
        })
        .catch(e => {
          console.error(e)
        })
        .finally(() => {
          this.$store.commit('updatePage', 1)

          setTimeout(() => {
            loading.close()
          }, 500)
        })
    },

    async packageDataRequest(payload) {
      await axios.get(`https://api.npms.io/v2/package/${payload.name}`)
        .then((result) => {
          this.packageData = result.data
        })
        .catch(e => {
          this.packageData = false
        })
    }
  }
}