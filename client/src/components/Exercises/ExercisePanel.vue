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
            :to="{
              name: 'new-exercise'
            }">
            New
          </v-btn>
        </v-toolbar>
      </div>
      <div class="pt-4 pb-4"
        v-for="exercise in exercises"
        :key="exercise.id">

        <v-layout>
          <v-flex xs4>
            <div class="title">
              {{exercise.title}}
            </div>
            <div class="muscle">
              {{exercise.muscleGroup}}
            </div>
            <div class="goal">
              {{exercise.goalGroup}}
            </div>
          </v-flex>
          <v-flex xs2>
          <v-btn
            dark
            class="blue darken-2">
            <!-- @click="create"> -->
            Add to my workout
          </v-btn>
          </v-flex>
        </v-layout>
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
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.exercises = (await ExerciseService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 24px;
}
.muscle {
  font-size: 18px;
}
.goal {
  font-size: 16px;
}
</style>
