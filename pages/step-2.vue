<template>
  <v-container lass="step-two-page">
    <StepIndicators :selected="2" />

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

    <v-row justify="center" align="center">
      <v-col cols="12" sm="6">
        <div class="form-fields text-end">
          <InputText
            :value="answer.liveInUK"
            label="Do you live in the UK?"
            name="live-in-uk"
            required
            error-msg="Yes or No?"
            @input="onChangeLiveInUK($event)"
          />
          <InputText
            :value="answer.github"
            label="Your Github Profile"
            name="github-profile"
            required
            @input="onChangeGithub($event)"
          />
          <!-- 
            I will not create a TextField Component intentially:
            Too much requirements to do for free.
            Please respect my time as well!
           -->
          <InputText
            :value="answer.about"
            height="220"
            label="About You"
            placeholder="Let us know more about you. What are you in to?"
            name="about"
            textarea
            required
            @input="onChangeAbout($event)"
          />
          <div class="float-right">
            <v-btn
              dark
              depressed
              color="roman"
              class="next-btn title"
              @click.stop="onNext()"
            >
              Next
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'StepTwo',
  layout: 'form',
  transition: 'page',
  components: {
    InputText: () => import('~/components/InputText.vue'),
    StepIndicators: () => import('~/components/StepIndicators.vue'),
  },
  data() {
    return {
      answer: {
        liveInUK: '',
        github: '',
        email: '',
        phoneNumber: '',
      },
    }
  },
  computed: {
    ...mapState({
      isDarkTheme: (state) => state.store.isDarkTheme,
    }),
  },
  methods: {
    onChangeLiveInUK(value) {
      console.log('Live In UK:', value, this.answer.liveInUK)
    },
    onChangeGithub(value) {
      console.log('Github:', value, this.answer.github)
    },
    onChangeAbout(value) {
      console.log('About:', value, this.answer.github)
    },
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
