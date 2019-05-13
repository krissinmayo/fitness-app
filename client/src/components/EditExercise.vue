<template>
    <v-layout>
    <v-flex xs6 offset-xs3>
      <div class="white">
        <v-toolbar flat dense class="blue darken-2" dark>
          <v-toolbar-title>Edit Exercise</v-toolbar-title>
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
            @click="save">
            Save
          </v-btn>
          <v-btn
            dark
            class="blue darken-2"
            @click="navigateTo({name: 'exercises'})">
            Cancel
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
      }
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async save () {
      console.log('save clicked')
      try {
        await ExerciseService.put(this.exercise)
        this.$router.push({
          name: 'profile'
        })
      } catch (err) {
        console.log(err)
      }
    },
    async mounted () {
      try {
        const exerciseId = this.$store.state.route.params.exerciseId
        this.exercise = (await ExerciseService.show(exerciseId)).data
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
