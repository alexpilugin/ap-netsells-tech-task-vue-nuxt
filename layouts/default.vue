<template>
  <v-app dark class="bg">
    <v-app-bar app fixed flat color="transparent">
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <span>JavaScript Challenge</span>
      <v-spacer />
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <!--
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}. Alex Pilugin</span>
    </v-footer>
    -->
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Netsells',
    }
  },
}
</script>

<style lang="scss">
.theme--dark {
  &.v-application {
    background: url('~/assets/dark-bg-home.svg') bottom center !important;
    background-size: cover !important;
  }
}
.theme--light {
  &.v-application {
    background: url('~/assets/light-bg-home.svg') bottom center !important;
    background-size: cover !important;
  }
}
</style>
