<template>
  <v-container lass="step-two-page">
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-card class="card-indicator" elevation="0">
          <v-slider
            :v-model="sliderVal"
            label=""
            color="roman"
            :track-color="isDarkTheme ? '#060505' : '#E3E3E3'"
            :min="0"
            :max="10"
            step="1"
            readonly
          ></v-slider>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <div class="text-center">
          <h1 class="display-1" color="primary">More About You</h1>
          <h2 class="subtitle-1" color="primary">
            Required fields are marked by an asterisk<span color="roman"
              >*</span
            >
          </h2>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'StepsOne',
  layout: 'form',
  transition: 'page',
  data() {
    return {
      sliderVal: 5,
    }
  },
  computed: {
    ...mapState({
      isDarkTheme: (state) => state.store.isDarkTheme,
    }),
  },
  head() {
    return {
      title: 'Step One',
      meta: [
        {
          hid: 'Netsells: Step One',
          name: 'Step One',
          content: 'Step One - Netsells',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scopped>
.step-two-page {
  .card-indicator {
    width: 300px;
    height: 88px;
  }
  .v-slider--horizontal {
    .v-slider__track-container {
      height: 6px;
      .v-slider__track-background {
        border-radius: 3px;
      }
    }
  }
}
</style>
