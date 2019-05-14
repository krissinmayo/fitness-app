<template>
  <v-layout>
    <v-flex xs6>
      <div class="title">
        {{exercise.title}}
      </div>
      <div class="muscle">
        {{exercise.muscleGroup}}
      </div>
      <div class="goal">
        {{exercise.goalGroup}}
      </div>
      <div class="level">
        {{exercise.difficulty}}
      </div>
    </v-flex>
    <v-flex xs4>
      <img class="image" :src="exercise.imageURL" />
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: [
    'exercise'
  ],
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>

</style>
