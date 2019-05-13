<template>
 <v-layout>
    <v-flex>
      <exercise-data :exercise="exercise" />
    </v-flex>
  </v-layout>
</template>

<script>
import ExerciseData from './ExerciseData'
import ExerciseService from '@/services/ExerciseService'
export default {
  data () {
    return {
      exercise: {}
    }
  },
  async mounted () {
    const exerciseId = this.$store.state.route.params.exerciseId
    this.exercise = (await ExerciseService.show(exerciseId)).data
  },
  components: {
    ExerciseData
  }
}
</script>

<style scoped>

</style>
