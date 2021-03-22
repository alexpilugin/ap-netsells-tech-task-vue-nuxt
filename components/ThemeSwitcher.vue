<template>
  <div class="switcher">
    <v-btn icon class="ma-2" @click.stop="dark">
      <v-icon>mdi-power-sleep</v-icon>
      <div v-if="isDarkTheme" class="mode-icon" color="roman"></div>
    </v-btn>
    <v-btn icon class="ma-2" @click.stop="light">
      <v-icon>mdi-white-balance-sunny</v-icon>
      <div v-if="!isDarkTheme" class="mode-icon" color="roman"></div>
    </v-btn>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'ThemeSwitcher',
  computed: {
    ...mapState({
      isDarkTheme: (state) => state.store.isDarkTheme,
    }),
  },
  methods: {
    ...mapActions({
      setTheme: 'store/setTheme',
    }),
    dark() {
      this.$vuetify.theme.isDark = true
      this.setTheme(true)
    },
    light() {
      this.$vuetify.theme.isDark = false
      this.setTheme(false)
    },
  },
}
</script>

<style lang="scss" scopped>
.switcher {
  position: absolute;
  left: 3rem;
  bottom: 2rem;
}
.mode-icon {
  position: absolute;
  top: -2px;
  right: -2px;
  height: 8px;
  width: 8px;
  background-color: $color-brand-red;
  border-radius: 50%;
}
</style>
