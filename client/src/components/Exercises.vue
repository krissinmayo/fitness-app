<template>
 <v-layout>
    <v-flex>
      <div>
        <v-toolbar>
          <v-toolbar-title>Exercises</v-toolbar-title>
          <div v-for="exercise in exercises"
            :key="exercise.title">
            {{exercise.title}} -
            {{exercise.group}}
          </div>
        </v-toolbar>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import ExerciseService from '@/services/ExerciseService'
export default {
  data () {
    return {
      exercises: null
    }
  },
  async mounted () {
    this.exercises = await ExerciseService.index()
  }
}
</script>

<style scoped>
</style>
