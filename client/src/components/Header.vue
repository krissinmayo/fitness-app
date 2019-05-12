<template>
    <v-toolbar fixed class="blue darken-2" dark>
        <v-toolbar-title>
            <span class="home">
                SelfInquiry
            </span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat
                :to="{
                    name: 'profile'
                }">
                Profile
            </v-btn>
            <v-btn flat
                :to="{
                    name: 'news'
                }">
                News
            </v-btn>
            <v-btn flat
                :to="{
                    name: 'exercises'
                }">
                Exercises
            </v-btn>
            <v-btn flat
                :to="{
                    name: 'register'
                }">
                Sign Up
            </v-btn>
            <v-btn flat
                :to="{
                    name: 'login'
                }">
                Login
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
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
