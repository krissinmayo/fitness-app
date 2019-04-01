<template>
 <v-layout>
    <v-flex>
      <div>
        <v-toolbar>
          <v-toolbar-title>News Feed</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn
            dark
            large
            class="blue darken-2"
            @click="navigateTo({name: 'new-status'})">
            New
          </v-btn>

        </v-toolbar>
      </div>
      <div class="pl-4 pr-4 pt-2 pb-2"
        v-for="story in stories"
        :key="story.id">
        <slot>
          {{story.title}} -
          {{story.author}} -
          {{story.date}}
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
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.stories = (await NewsService.index()).data
  }
}
</script>

<style scoped>
</style>
