<template>
 <v-layout>
    <v-flex xs6>
      <search-panel />
    </v-flex>
    <v-flex xs8>
      <exercise-panel class="ml-2" />
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
      exercises: []
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
