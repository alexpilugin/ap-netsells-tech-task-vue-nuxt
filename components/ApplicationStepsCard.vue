<template>
  <v-card height="100%" class="app-step-card" elevation="0">
    <v-layout>
      <v-row>
        <v-col cols="12" class="pad-x pad-y">
          <v-slider
            :v-model="info.sliderVal"
            label=""
            color="roman"
            :track-color="isDarkTheme ? '#060505' : '#E3E3E3'"
            :min="0"
            :max="10"
            step="1"
            readonly
          ></v-slider>
        </v-col>
      </v-row>
    </v-layout>
    <v-card-title class="text-left pad-x mt-0">
      <v-layout class="mt-0">
        <v-row>
          <v-col cols="12">
            <h2 class="subtitle-1 text-uppercase mb-3 mt-0">
              Step {{ index + 1 }}
            </h2>
            <h1 class="headline" v-html="info.title"></h1>
          </v-col>
        </v-row>
      </v-layout>
    </v-card-title>
    <v-card-text class="text-left pad-x">
      <p>{{ info.subtitle }}</p>
    </v-card-text>
    <v-card-actions class="card-actions pa-0 ma-0">
      <v-btn
        block
        elevation="0"
        class="btn-complete"
        :color="isDarkTheme ? '#464646' : '#E3E3E3'"
        @click.stop="navigate(`/step-${index + 1}`)"
      >
        Complete
        <v-icon right>mdi-ray-start-arrow</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AppStepCard',
  props: {
    info: { type: Object, required: true },
    index: { type: Number, required: true },
  },
  computed: {
    ...mapState({
      isDarkTheme: (state) => state.store.isDarkTheme,
    }),
  },
}
</script>

<style lang="scss" scopped>
.app-step-card {
  position: relative;
  margin: 0 30px;
  padding-bottom: 50px;
  .v-slider--horizontal {
    .v-slider__track-container {
      height: 6px;
      .v-slider__track-background {
        border-radius: 3px;
      }
    }
  }
  .subtitle-1 {
    color: $color-grey-tint-3;
  }
  .btn-complete {
    border-radius: 0px !important;
    padding: 30px 0;
    margin: 0;
    margin-bottom: 1px !important;
  }
  .pad-x {
    padding-left: 35px;
    padding-right: 35px;
  }
  .pad-y {
    padding-top: 35px;
    /* padding-bottom: 35px; */
  }
  .card-actions {
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 0;
    margin: 0;
  }
}
.theme--dark {
  .app-step-card {
    border: 1px solid $color-grey-tint-4;
    background-color: $color-dark-grey-tint-4;
    background: linear-gradient(-43.63deg, #363535, #3e3e3e);
    /*
    .v-slider--horizontal {
      .v-slider__track-container {
        .v-slider__track-background {
          background-color: $color-grey-tint-1;
        }
      }
    }
    */
  }
}
.theme--light {
  .app-step-card {
    border: 1px solid $color-grey-tint-1;
    background-color: $color-grey-tint-1;
    background: linear-gradient(134.13deg, #ffffff, #fcfcfc);
    /*
    .v-slider--horizontal {
      .v-slider__track-container {
        .v-slider__track-background {
          background-color: $color-dark-grey-tint-3;
        }
      }
    }
    */
  }
}
</style>
