<template>
 <v-layout>
    <v-flex>
      <exercise-data :exercise="exercise" />
    </v-flex>
  </v-layout>
</template>

<script>
import ExerciseData from '@/components/ExerciseView/ExerciseData'
import ExerciseService from '@/services/ExerciseService'
export default {
  data () {
    return {
      exercise: {}
    }
  },
  async mounted () {
    const exerciseId = this.$store.state.route.params.exerciseId
    const exercise = (await ExerciseService.show(exerciseId)).data
    console.log(exercise)
  },
  components: {
    ExerciseData
  }
}
</script>

<style scoped>

</style>
