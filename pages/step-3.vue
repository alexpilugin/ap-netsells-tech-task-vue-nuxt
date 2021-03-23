<template>
  <v-container lass="step-three-page">
    <StepIndicators :selected="3" />

    <v-row justify="center" align="center">
      <v-col cols="12">
        <div class="text-center">
          <h1 class="display-1" color="primary">Files Upload</h1>
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
  name: 'StepThree',
  layout: 'form',
  transition: 'page',
  components: {
    StepIndicators: () => import('~/components/StepIndicators.vue'),
  },
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
.step-three-page {
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
