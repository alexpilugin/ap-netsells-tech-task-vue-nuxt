<template>
  <v-row justify="center" align="center" class="landing-page">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center welcome-box">
        <h2 class="title roman-red-text mb-5">Welcome</h2>
        <h1 :class="headerClass" color="primary">
          We’re excited to see what you can do!
        </h1>
        <v-spacer />
        <v-btn
          dark
          depressed
          color="roman"
          class="begin-btn title"
          @click.stop="navigate('/steps')"
        >
          Begin
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Index',
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
      title: 'Welcome screen',
      meta: [
        {
          hid: 'Netsells: Welcome screen',
          name: 'Welcome screen',
          content: 'Home page - Netsells: Welcome screen',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scopped>
.landing-page {
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
