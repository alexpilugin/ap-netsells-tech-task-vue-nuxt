<template>
  <v-row justify="center" align="center" class="confirmation-page">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center welcome-box">
        <h2 class="title roman-red-text mb-5">Success!</h2>
        <h1 :class="headerClass" color="primary">Thank You!</h1>
        <h3 class="subtitle" color="primary">
          Our team will respond to you within the next 48h
        </h3>
        <v-spacer />
        <v-btn
          dark
          depressed
          color="roman"
          class="begin-btn title"
          @click.stop="navigate('/')"
        >
          Home
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ConfirmationPage',
  layout: 'welcome',
  transition: 'page',
  computed: {
    headerClass() {
      let cl = 'display-3'
      // :class="{'display-3': $vuetify.breakpoint. smAndDown, 'display-1': $vuetify.breakpoint. mdAndUp}"
      if (this.$vuetify.breakpoint.smAndDown) cl = 'display-1'
      if (this.$vuetify.breakpoint.mdAndUp) cl = 'display-3'
      return cl
    },
  },
  head() {
    return {
      title: 'Confirmation',
      meta: [
        {
          hid: 'Netsells: Confirmation',
          name: 'Confirmation Page',
          content: 'Confirmation Page - Netsells: Confirmation',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scopped>
.confirmation-page {
  .welcome-box {
    padding-bottom: 140px;

    .begin-btn {
      padding: 32px 46px !important;
      margin-top: 90px;
      border-radius: 0px;
    }
  }
}
</style>
