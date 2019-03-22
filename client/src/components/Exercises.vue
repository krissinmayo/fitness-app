<template>
 <v-layout>
    <v-flex>
      <div>
        <v-toolbar>
          <v-toolbar-title>Exercises</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn
            dark
            large
            class="blue darken-2"
            @click="navigateTo({name: 'new-exercise'})">
            New
          </v-btn>
        </v-toolbar>
      </div>
      <div class="pl-4 pr-4 pt-2 pb-2"
        v-for="exercise in exercises"
        :key="exercise.id">
          {{exercise.title}} -
          {{exercise.muscleGroup}} -
          {{exercise.goalGroup}}
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
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.exercises = (await ExerciseService.index()).data
  }
}
</script>

<style scoped>
</style>
