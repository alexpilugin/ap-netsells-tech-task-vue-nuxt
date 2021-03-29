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

    <v-row justify="center" align="center">
      <v-col cols="12" sm="6">
        <div class="form-fields text-end">
          <FileDropZone
            refname="cv-load"
            :error-msg="errorMsgCV"
            @loaded="onLoadedCV"
          >
            <div v-if="!isLoadedCV">
              <v-icon>mdi-file</v-icon><span color="roman">*</span>
              <p class="title">Upload Your CV</p>
              <p>Drag and drop or Upload your CV file here</p>
            </div>
            <div v-else>
              <v-icon color="roman">mdi-file</v-icon>
              <p class="title">{{ filenameCV }}</p>
              <p>Reupload a new file here</p>
            </div>
          </FileDropZone>
          <FileDropZone refname="cv-cover-letter" @loaded="onLoadedCL">
            <div v-if="!isLoadedCL">
              <v-icon>mdi-file</v-icon>
              <p class="title">Upload Your Cover Letter</p>
              <p>Drag and drop or Upload your Cover Letter file here</p>
            </div>
            <div v-else>
              <v-icon color="roman">mdi-file</v-icon>
              <p class="title">{{ filenameCL }}</p>
              <p>Reupload a new file here</p>
            </div>
          </FileDropZone>

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
  name: 'StepThree',
  layout: 'form',
  transition: 'page',
  components: {
    StepIndicators: () => import('~/components/StepIndicators.vue'),
    FileDropZone: () => import('~/components/FileDropZone.vue'),
  },
  data() {
    return {
      sliderVal: 5,
      isLoadedCV: false,
      isLoadedCL: false,
      filenameCV: '',
      fileCV: null,
      filenameCL: '',
      fileCL: null,
      errorMsgCV: '',
    }
  },
  computed: {
    ...mapState({
      isDarkTheme: (state) => state.store.isDarkTheme,
    }),
  },
  methods: {
    onNext() {
      this.errorMsgCV = this.filenameCV !== '' ? '' : 'Required'

      if (this.errorMsgCV) return

      const formData = new FormData()
      formData.append('cv', this.fileCV)
      console.log(formData)
      // ...after sending ... .then(...)
      this.navigate('/confirmation')
    },
    onLoadedCV({ filename, file }) {
      console.log('onLoadedCV: ', filename)
      this.filenameCV = filename
      this.fileCV = file
      this.isLoadedCV = true
      this.errorMsgCV = ''
    },
    onLoadedCL({ filename, file }) {
      console.log('onLoadedCL: ', filename)
      this.filenameCL = filename
      this.fileCL = file
      this.isLoadedCL = true
    },
  },
  head() {
    return {
      title: 'Step Three',
      meta: [
        {
          hid: 'Netsells: Step Three',
          name: 'Step Three',
          content: 'Step Three - Netsells',
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
  .form-fields {
    .next-btn {
      padding: 32px 46px !important;
      margin-top: 90px;
      border-radius: 0px;
    }
  }
}
</style>
