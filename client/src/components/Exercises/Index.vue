<template>
  <v-layout>
    <v-flex xs6>
      <search-panel :exercise="exercise" />
    </v-flex>
    <v-flex xs6 class="ml-2">
      <exercise-panel />
    </v-flex>
  </v-layout>
</template>

<script>
import ExerciseService from '@/services/ExerciseService'
import ExercisePanel from './ExercisePanel'
import SearchPanel from './SearchPanel'
export default {
  data () {
    return {
      exercises: {}
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    const exerciseId = this.route.params.exerciseId
    this.exercise = (await ExerciseService.show(exerciseId)).data
  },
  components: {
    ExercisePanel,
    SearchPanel
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
