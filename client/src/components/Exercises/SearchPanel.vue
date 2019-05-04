<template>
 <v-layout>
    <v-flex>
      <div>
        <v-toolbar>
          <v-toolbar-title>Search</v-toolbar-title>
        </v-toolbar>
        <v-text-field
          label="search for exercises"
          v-model="search"
        ></v-text-field>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search (value) {
      const route = {
        name: 'exercises'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    },
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
