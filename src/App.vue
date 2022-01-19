<template>
  <div class="ins-container">
    <vs-row
      align="center"
      justify="center"
    >
      <vs-col
        lg="6"
        sm="12"
        xs="12"
      >
        <h1 class="ins-title">
          NPM search test task
        </h1>

        <p>
          Facts:
          <ul>
            <li>
              jsDelivr doesent have any search api:
              <br />
              <small
                class="ins-fact-link"
                @click="openExternal('https://github.com/jsdelivr/data.jsdelivr.com#search-npm-packages')"
              >
                (https://github.com/jsdelivr/data.jsdelivr.com#search-npm-packages)
              </small>
              <br />
              so I done it via
              <b
                class="ins-fact-link"
                @click="openExternal('https://api-docs.npms.io/')"
              >
                npms.io
              </b> API
            </li>
            <li>
              <b
                class="ins-fact-link"
                @click="openExternal('https://api-docs.npms.io/')"
              >
                npms.io
              </b> API cant provide data for packages with "@" or "/" in name, so detail info for them will be empty
            </li>
            <li>In detail view you can see markdown README file from npm package</li>
            <li>
              Feel free to refresh the page, you will not lose any data
            </li>
          </ul>
        </p>

        <SearchComponent />
        <SearchResults />

        <Footer />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import helpers from '@/mixins/helpers'

import SearchComponent from '@/components/SearchComponent'
import SearchResults from '@/components/SearchResults'
import Footer from '@/components/Footer'

export default {
  mixins: [helpers],

  components: {
    SearchComponent,
    SearchResults,
    Footer
  }
}
</script>

<style lang="scss" scoped>
  .ins-title {
    font-family: 'Times New Roman', Times, serif;
    font-size: 32px;
    font-weight: 300;
  }

  .ins-container {
    padding: 6px 8px;
  }

  .ins-fact-link {
    cursor: pointer;
  }
</style>
