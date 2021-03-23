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
            :error-msg="error.firstNameError"
            label="First Name"
            name="first-name"
            uppercase
            required
            @input="onChangeFirstName($event)"
          />
          <InputText
            :value="answer.secondName"
            label="Second Name"
            name="second-name"
            uppercase
            @input="onChangeSecondName($event)"
          />
          <InputText
            :value="answer.email"
            :error-msg="error.emailError"
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
import { mapState, mapGetters, mapActions } from 'vuex'

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
        firstName: '', // required
        secondName: '',
        email: '', // required
        phoneNumber: '',
        isValid: false,
      },
      error: {
        firstNameError: '',
        emailError: '',
      },
    }
  },
  computed: {
    ...mapState({
      steps: (state) => state.store.steps,
      isDarkTheme: (state) => state.store.isDarkTheme,
    }),
    ...mapGetters({
      getEmailRegex: 'store/getEmailRegex',
      getNameRegex: 'store/getNameRegex',
    }),
  },
  methods: {
    ...mapActions({
      setFirstName: 'store/setFirstName',
      setEmail: 'store/setEmail',
    }),
    onChangeFirstName(value) {
      this.error.firstNameError = ''
      this.answer.firstName = value
    },
    onChangeSecondName(value) {
      this.answer.secondName = value
    },
    onChangeEmail(value) {
      this.error.emailError = ''
      this.answer.email = value
    },
    onChangePhoneNumber(value) {
      this.answer.phoneNumber = value
    },
    onNext() {
      const firstName = this.answer.firstName
      const namePattern = this.getNameRegex
      const validName = this.isValid(firstName, namePattern)
      this.error.firstNameError = validName ? '' : 'Correct First Name Required'

      const email = this.answer.email
      const emailPattern = this.getEmailRegex
      const validEmal = this.isValid(email, emailPattern)
      this.error.emailError = validEmal ? '' : 'Correct Email Address Required'

      if (this.error.firstNameError || this.error.emailError) return

      this.setFirstName(firstName) // save in Vuex
      this.setEmail(email) // save in Vuex
      this.navigate('/step-2')
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
