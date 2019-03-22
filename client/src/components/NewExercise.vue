<template>
    <v-layout>
    <v-flex xs6 offset-xs3>
      <div class="white">
        <v-toolbar flat dense class="blue darken-2" dark>
          <v-toolbar-title>New Exercise</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="Title"
            v-model="exercise.title"
          ></v-text-field>
          <br>

          <v-text-field
            label="Target muscle group"
            v-model="exercise.muscleGroup"
          ></v-text-field>
          <br>

          <v-text-field
            label="Goal type"
            v-model="exercise.goalGroup"
          ></v-text-field>
          <br>

          <v-text-field
            label="Difficulty level"
            v-model="exercise.difficulty"
          ></v-text-field>
          <br>

          <v-text-field
            label="Image URL"
            v-model="exercise.imageURL"
          ></v-text-field>

          <br>
          <v-btn
            dark
            class="blue darken-2"
            @click="create">
            Submit
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import ExerciseService from '@/services/ExerciseService'
export default {
  data () {
    return {
      exercise: {
        title: null,
        muscleGroup: null,
        goalGroup: null,
        difficulty: null,
        imageURL: null
        // youtubeID: null
      }
    }
  },
  methods: {
    async create () {
      try {
        await ExerciseService.post(this.exercise)
        this.$router.push({
          name: 'exercises'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
