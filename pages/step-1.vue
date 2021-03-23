<template>
  <v-container lass="step-one-page">
    <StepIndicators :selected="1" />

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

    <v-row justify="center" align="center">
      <v-col cols="12" sm="6">
        <div class="form-fields text-end">
          <InputText
            :value="answer.firstName"
            label="First Name"
            name="first-name"
            required
            @input="onChangeFirstName($event)"
          />
          <InputText
            :value="answer.secondName"
            label="Second Name"
            name="second-name"
            @input="onChangeSecondName($event)"
          />
          <InputText
            :value="answer.email"
            label="Email"
            name="email"
            required
            @input="onChangeEmail($event)"
          />
          <InputText
            :value="answer.phoneNumber"
            label="Phone Number"
            name="phone-number"
            @input="onChangePhoneNumber($event)"
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
  name: 'StepOne',
  layout: 'form',
  transition: 'page',
  components: {
    InputText: () => import('~/components/InputText.vue'),
    StepIndicators: () => import('~/components/StepIndicators.vue'),
  },
  data() {
    return {
      answer: {
        firstName: '',
        secondName: '',
        email: '',
        phoneNumber: '',
      },
    }
  },
  computed: {
    ...mapState({
      steps: (state) => state.store.steps,
      isDarkTheme: (state) => state.store.isDarkTheme,
    }),
  },
  methods: {
    onChangeFirstName(value) {
      console.log('First Name:', value, this.answer.firstName)
    },
    onChangeSecondName(value) {
      console.log('Second Name:', value, this.answer.secondName)
    },
    onChangeEmail(value) {
      console.log('Email:', value, this.answer.email)
    },
    onChangePhoneNumber(value) {
      console.log('Phone Number:', value, this.answer.phoneNumber)
    },
    onNext() {
      console.log('Clicked on the Next btn')
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
.step-one-page {
  .form-fields {
    .next-btn {
      padding: 32px 46px !important;
      margin-top: 90px;
      border-radius: 0px;
    }
  }
}
</style>
