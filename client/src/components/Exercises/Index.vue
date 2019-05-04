<template>
 <v-layout>
    <v-flex xs6 offset-xs3>
      <search-panel />
      <exercise-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>

<script>
import ExerciseService from '@/services/ExerciseService'
import ExercisePanel from './ExercisePanel'
import SearchPanel from './SearchPanel'
export default {
  components: {
    ExercisePanel,
    SearchPanel
  },
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
