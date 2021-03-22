<template>
  <v-app :dark="isDarkTheme" class="def-layout">
    <TopBar />
    <v-main>
      <v-container fill-height>
        <nuxt />
      </v-container>
    </v-main>
    <ThemeSwitcher />
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import TopBar from '~/components/TopBar.vue'
import ThemeSwitcher from '~/components/ThemeSwitcher.vue'

export default {
  name: 'WelcomeLayout',
  components: {
    TopBar,
    ThemeSwitcher,
  },
  computed: {
    ...mapState({
      isDarkTheme: (state) => state.store.isDarkTheme,
    }),
  },
}
</script>

<style lang="scss">
.theme--dark {
  &.v-application {
    &.def-layout {
      background-color: $color-dark-grey-tint-4;
      background: url('~/assets/dark-bg-home.svg') bottom center !important;
      background-size: cover !important;
    }
  }
}
.theme--light {
  &.v-application {
    &.def-layout {
      background-color: $color-grey-tint-1;
      background: url('~/assets/light-bg-home.svg') bottom center !important;
      background-size: cover !important;
    }
  }
}
</style>
