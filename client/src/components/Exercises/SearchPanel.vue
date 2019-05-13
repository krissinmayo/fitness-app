<template>
 <v-layout>
    <v-flex>
      <div>
        <v-toolbar>
          <v-toolbar-title>Search</v-toolbar-title>
        </v-toolbar>
        <v-autocomplete
          v-model="search"
          :items="items"
          :search-input.sync="search"
          label="Search for exercise inspiration"
          placeholder="Enter search term(s)"
          return-object
        ></v-autocomplete>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'exercises'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style scoped>

</style>
