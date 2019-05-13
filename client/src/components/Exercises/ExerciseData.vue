<template>
 <v-layout>
    <v-flex>
      <div class="exercise">
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
            <div class="level">
              {{exercise.difficulty}}
            </div>
          </v-flex>
          <v-flex xs2>
            <img class="image" :src="exercise.imageURL" />
          </v-flex>
        </v-layout>
      </div>
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
