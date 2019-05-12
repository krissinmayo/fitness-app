<template>
    <v-toolbar fixed class="blue darken-2" dark>
        <v-toolbar-title>
            <span
                class="home"
                @click="navigateTo({name: 'root'})">
                SelfInquiry
            </span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn
                flat
                @click="navigateTo({name: 'profile'})">
                Profile
            </v-btn>
            <v-btn
                flat
                @click="navigateTo({name: 'news'})">
                News
            </v-btn>
            <v-btn
                flat
                @click="navigateTo({name: 'exercises'})">
                Exercises
            </v-btn>
            <v-btn
                v-if="!$store.state.isLoggedIn"
                flat
                @click="navigateTo({name: 'register'})">
                Sign Up
            </v-btn>
            <v-btn
                v-if="!$store.state.isLoggedIn"
                flat
                @click="navigateTo({name: 'login'})">
                Login
            </v-btn>
            <v-btn
                v-if="$store.state.isLoggedIn"
                flat
                @click="logout">
                Log Out
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      // redirect to homepage on logout
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
.home {
    cursor: pointer;
}
.home:hover {
    color: #E9E;
}
</style>
