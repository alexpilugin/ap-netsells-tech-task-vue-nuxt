<template>
  <v-row justify="center" align="center" class="step-indicators">
    <v-col v-for="(step, index) in steps" :key="index" cols="12" sm="6" md="4">
      <v-card
        :class="
          selected == index + 1 ? 'card-indicator m-over' : 'card-indicator'
        "
        elevation="0"
        @click.stop="navigate(`/step-${index + 1}`)"
      >
        <v-card-title class="pad-x mt-0">
          <h2 class="text-center subtitle-1 text-uppercase mb-3 mt-0">
            Step {{ index + 1 }}
          </h2>
        </v-card-title>
        <v-card-text>
          <v-slider
            :v-model="step.sliderVal"
            label=""
            color="roman"
            :track-color="isDarkTheme ? '#060505' : '#E3E3E3'"
            :min="0"
            :max="10"
            step="1"
            readonly
          ></v-slider>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'StepIndicators',
  props: {
    selected: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapState({
      steps: (state) => state.store.steps,
      isDarkTheme: (state) => state.store.isDarkTheme,
    }),
  },
}
</script>

<style lang="scss" scopped>
.step-indicators {
  .card-indicator {
    height: 88px;
    cursor: pointer !important;
    &.m-over {
      border: solid 1px $color-brand-red !important;
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
}
</style>
