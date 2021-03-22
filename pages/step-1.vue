<template>
  <v-container lass="step-one-page">
    <v-row justify="center" align="center">
      <v-col
        v-for="(step, index) in steps"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <v-hover v-slot:default="{ hover }">
          <v-card
            :class="hover ? 'card-indicator m-over' : 'card-indicator'"
            elevation="0"
            @click.stop="navigate('/step-2')"
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
        </v-hover>
      </v-col>
    </v-row>

    <v-row justify="center" align="center">
      <v-col cols="12">
        <div class="text-center">
          <h1 class="display-1" color="primary">Personal Details</h1>
          <h2 class="subtitle-1" color="primary">
            Required fields are marked by an asterisk
            <span color="roman">*</span>
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
  computed: {
    ...mapState({
      steps: (state) => state.store.steps,
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
.step-one-page {
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
