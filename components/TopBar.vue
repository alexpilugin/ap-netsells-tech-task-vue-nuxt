<template>
  <v-app-bar light app flat dense color="transparent">
    <v-container v-show="$vuetify.breakpoint.mdAndUp">
      <v-toolbar-title
        style="cursor: pointer"
        class="app-title mr-3"
        @click.stop="navigate('/')"
      >
        {{ title }}
      </v-toolbar-title>
      <div class="text-center challenge">JavaScript Challenge</div>
    </v-container>
    <v-spacer v-show="$vuetify.breakpoint.smAndDown" />
    <v-toolbar-items v-show="$vuetify.breakpoint.smAndDown" right class="ml-2">
      <v-btn icon :dark="isDarkTheme" class="ma-2">
        <v-icon>mdi-dots-horizontal</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'TopBar',
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
  methods: {
    navigate(route) {
      const self = this
      setTimeout(function () {
        // give time for animation
        self.$router.push({ path: route })
      }, 300)
    },
  },
}
</script>

<style lang="scss" scopped>
.app-title {
  font-family: $oswald-font-family;
  color: $color-grey-tint-3;
}
.challenge {
  margin-top: -28px;
  color: $color-grey-tint-3;
}
</style>
