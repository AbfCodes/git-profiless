<template>
  <div>
    <v-app-bar app>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('../assets/Logo.png')"
          transition="scale-transition"
          width="60"
        />
        <span
          class="text--white display-1 text-uppercase"
          text-transform:
          uppercase
          >Profiles</span
        >
        <!-- <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      /> -->
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  created() {
    this.$vuetify.theme.dark = !!true
  }
}
</script>

<style></style>
