<template>
    <v-layout>
    <v-flex xs6 offset-xs3>
      <div class="white">
        <v-toolbar flat dense class="blue darken-2" dark>
          <v-toolbar-title>Status Update</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="Title"
            v-model="update.title"
          ></v-text-field>
          <br>

          <v-text-field
            label="Date of activity"
            v-model="update.date"
          ></v-text-field>
          <br>

          <v-text-field
            label="Topic"
            v-model="update.topic"
          ></v-text-field>
          <br>

          <v-text-field
            label="Author"
            v-model="update.author"
          ></v-text-field>
          <br>

          <v-text-field
            label="Link to story"
            v-model="update.storyURL"
          ></v-text-field>

          <br>
          <v-btn
            dark
            class="blue darken-2"
            @click="create">
            Submit
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import NewsService from '@/services/NewsService'
export default {
  data () {
    return {
      update: {
        title: null,
        date: null,
        author: null,
        topic: null,
        storyURL: null
      }
    }
  },
  methods: {
    async create () {
      try {
        await NewsService.post(this.update)
        this.$router.push({
          name: 'news'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
