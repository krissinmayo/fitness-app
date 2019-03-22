<template>
 <v-layout>
    <v-flex>
      <div>
        <v-toolbar>
          <v-toolbar-title>News Feed</v-toolbar-title>
        </v-toolbar>
      </div>
      <div class="pl-4 pr-4 pt-2 pb-2"
        v-for="exercise in exercises"
        :key="exercise.title">
        <slot>
          {{exercise.title}} -
          {{exercise.type}}
        </slot>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import NewsService from '@/services/NewsService'
export default {
  data () {
    return {
      stories: null
    }
  },
  async mounted () {
    this.stories = await NewsService.index()
  }
}
</script>

<style scoped>
</style>
