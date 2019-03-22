<template>
 <v-layout>
    <v-flex>
      <div>
        <v-toolbar>
          <v-toolbar-title>Exercises</v-toolbar-title>
        </v-toolbar>
      </div>
      <div class="pl-4 pr-4 pt-2 pb-2"
        v-for="exercise in exercises"
        :key="exercise.title">
        <slot>
          {{exercise.title}} -
          {{exercise.type}}
        </slot>
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
