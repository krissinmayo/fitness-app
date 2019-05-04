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
      console.log(value)
    }
  }
}
</script>

<style scoped>

</style>
