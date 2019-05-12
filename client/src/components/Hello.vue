<template>
 <v-layout>
    <v-flex xs4>
      <div class="ml-4">
        <v-toolbar>
          <v-toolbar-title>News Feed</v-toolbar-title>
        </v-toolbar>
      </div>
      <div class="pl-4 pr-4 pt-2 pb-2"
        v-for="story in stories"
        :key="story.id">
        <slot>
          {{story.title}} -
          {{story.author}} -
          {{story.date}}
        </slot>
      </div>
    </v-flex>
    <v-flex xs8>
      <div class="ml-4">
        <v-toolbar>
          <v-toolbar-title>My Workout</v-toolbar-title>
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
import NewsService from '@/services/NewsService'
import ExerciseService from '@/services/ExerciseService'
export default {
  data () {
    return {
      stories: null,
      exercises: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.stories = (await NewsService.index()).data
    this.exercises = (await ExerciseService.index()).data
  }
}
</script>

<style scoped>
</style>
