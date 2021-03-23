/* eslint-disable */
<template>
  <v-row justify="center" align="center" class="steps-page">
    <v-col cols="12">
      <div class="text-center steps-box">
        <h1 class="display-1" color="primary">Application Steps</h1>
        <h2 class="subtitle-1" color="primary">
          Select the step you wish to complete.
        </h2>

        <v-container fill-height>
          <v-layout>
            <v-row justify="center" align="start">
              <v-col
                v-for="(cardInfo, index) in steps"
                :key="index"
                cols="12"
                sm="6"
                md="4"
              >
                <AppStepCard :index="index" :info="cardInfo" />
              </v-col>
            </v-row>
          </v-layout>
        </v-container>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Steps',
  layout: 'form',
  transition: 'page',
  components: {
    AppStepCard: () => import('~/components/ApplicationStepsCard.vue'),
  },
  computed: {
    ...mapState({
      steps: (state) => state.store.steps,
    }),
  },
  head() {
    return {
      title: 'Application Steps',
      meta: [
        {
          hid: 'Netsells: Application Steps',
          name: 'Application Steps',
          content: 'Application Steps - Netsells',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scopped>
.steps-page {
  .steps-box {
    /* padding-bottom: 140px; */
    margin-top: 40px;
    .subtitle-1 {
      color: $color-grey-tint-3;
      margin-bottom: 40px;
    }
  }
}
</style>
