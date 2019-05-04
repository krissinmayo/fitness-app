<template>
    <v-toolbar fixed class="blue darken-2" dark>
        <v-toolbar-items>
            <v-btn flat dark
                class="home"
                :to="{
                    name: 'profile'
                }">
                SelfInquiry
            </v-btn>
            <v-btn flat dark
                :to="{
                    name: 'profile'
                }">
                Profile
            </v-btn>
            <v-btn flat dark
                :to="{
                    name: 'news'
                }">
                News
            </v-btn>
            <v-btn flat dark
                :to="{
                    name: 'exercises'
                }">
                Exercises
            </v-btn>
            <v-btn flat dark
                :to="{
                    name: 'register'
                }">
                Sign Up
            </v-btn>
            <v-btn flat dark
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
    cursor:pointer;
}
.home:hover {
    color: #E9E;
}
</style>
