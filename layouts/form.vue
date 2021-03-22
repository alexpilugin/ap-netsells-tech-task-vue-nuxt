<template>
  <v-app :dark="isDarkTheme" class="form-layout gradient-bg">
    <TopBar />
    <v-main>
      <v-container>
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
  name: 'FormLayout',
  components: {
    TopBar,
    ThemeSwitcher,
  },
  data() {
    return {
      title: 'Netsells',
    }
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
    &.form-layout {
      &.gradient-bg {
        background-color: $color-dark-grey-tint-4;
        background: linear-gradient(-43.63deg, #363535, #3e3e3e);
        background: url('~/assets/steps-bg-gradient.svg') bottom center !important;
        background-size: cover !important;
      }
    }
  }
}
.theme--light {
  &.v-application {
    &.form-layout {
      &.gradient-bg {
        background-color: $color-grey-tint-1;
        background: linear-gradient(-167.2deg, #f7f7f7, #ebebeb);
      }
    }
  }
}
</style>
