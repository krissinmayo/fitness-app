<template>
 <v-layout>
    <v-flex>
      <div>
        <v-toolbar>
          <v-toolbar-title>Welcome Home!</v-toolbar-title>
        </v-toolbar>
      </div>
      <div>
        <v-autocomplete
          v-model="model"
          :items="exercises"
          placeholder="Search for inspiration"
        />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      model: null,
      exercises: ['burpee', 'plank', 'jogging', 'swimming', 'yoga', 'soccer', 'walking']
    }
  }
}
</script>

<style scoped>

</style>
