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
            uppercase
            :error-msg="error.liveInUK"
            @input="onChangeLiveInUK($event)"
          />
          <InputText
            :value="answer.github"
            label="Your Github Profile"
            name="github-profile"
            required
            :error-msg="error.github"
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
            :error-msg="error.about"
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
import { mapState, mapGetters, mapActions } from 'vuex'

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
        about: '',
      },
      error: {
        liveInUK: '',
        github: '',
        about: '',
      },
    }
  },
  computed: {
    ...mapState({
      isDarkTheme: (state) => state.store.isDarkTheme,
    }),
    ...mapGetters({
      githubRegex: 'store/githubRegex',
      getNameRegex: 'store/getNameRegex',
    }),
  },
  methods: {
    ...mapActions({
      setLiveUK: 'store/setLiveUK',
      setGithub: 'store/setGithub',
      setAboutYou: 'store/setAboutYou',
    }),
    onNext() {
      const liveInUK = this.answer.liveInUK
      const validliveInUK = !!(liveInUK === 'YES' || liveInUK === 'NO')
      this.error.liveInUK = validliveInUK ? '' : "It sould be 'YES' or 'NO'"

      const github = this.answer.github
      const githubRegex = this.githubRegex
      const validGithub = this.isValid(github, githubRegex)
      this.error.github = validGithub ? '' : 'Correct linkt to Github required'

      const about = this.answer.about
      const namePattern = this.getNameRegex
      const validAbout = this.isValid(about, namePattern)
      this.error.about = validAbout ? '' : 'Required'

      if (this.error.liveInUK || this.error.github || this.error.about) return

      this.setLiveUK(liveInUK) // save in Vuex
      this.setGithub(github) // save in Vuex
      this.setAboutYou(about) // save in Vuex
      this.navigate('/step-3')
    },
    onChangeLiveInUK(value) {
      this.answer.liveInUK = value
      this.error.liveInUK = ''
    },
    onChangeGithub(value) {
      this.answer.github = value
      this.error.github = ''
    },
    onChangeAbout(value) {
      this.answer.about = value
      this.error.about = ''
    },
  },
  head() {
    return {
      title: 'Step Two',
      meta: [
        {
          hid: 'Netsells: Step Two',
          name: 'Step Two',
          content: 'Step Two - Netsells',
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
  .form-fields {
    .next-btn {
      padding: 32px 46px !important;
      margin-top: 90px;
      border-radius: 0px;
    }
  }
}
</style>
