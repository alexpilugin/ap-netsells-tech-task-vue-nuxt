<template>
  <div class="dropzone-wrapper">
    <div
      ref="dropzone"
      class="dropzone"
      @mouseover.prevent.stop="mouseOver"
      @mouseleave.prevent.stop="mouseLeave"
      @dragover.prevent.stop="mouseOver"
      @drop.prevent.stop="loadFiles"
      @click="$refs.fileinput.click()"
    >
      <div class="textnode">
        <slot></slot>
      </div>
      <input
        ref="fileinput"
        type="file"
        style="display: none"
        :multiple="multiple"
        @change.prevent="loadFilesFromDialog"
      />
    </div>
  </div>
</template>

<script>
// Single source of truth for asynchronous operations
const DOCS = {
  files: [],
  urls: [],
  refs: [],
  base64Data: [],
  decodedFiles: [], // window.btoa() & window.atoa()
}
export default {
  name: 'FileDropZone',
  props: {
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      files: DOCS.files,
      urls: DOCS.urls,
      base64Data: DOCS.base64Data,
      decodedFiles: DOCS.decodedFiles,
    }
  },
  mounted() {
    console.log('dropzone mounted!!')
  },
  methods: {
    refreshData() {
      this.getBase64Data() // Asynchronous Operation <------------- IMPORTANT!!!
      this.$nextTick(function () {
        this.files = DOCS.files
        this.urls = DOCS.urls
        this.base64Data = DOCS.base64Data
      })
    },
    mouseOver(e) {
      e.target.classList.add('visible')
      console.log('dragEnter!!')
    },
    mouseLeave(e) {
      e.target.classList.remove('visible')
      console.log('dragLeave!!')
    },
    readFile(index) {
      // Asynchronous Operation <------------- IMPORTANT!!!
      const reader = new FileReader()
      reader.addEventListener(
        'load',
        function (e) {
          const fileData = e.target.result // reader.result - base64 file data
          DOCS.base64Data[index] = fileData
        },
        false
      )
      reader.readAsDataURL(this.files[index])
    },
    getBase64Data() {
      const len = DOCS.files.length
      for (let index = 0; index < len; index++) {
        this.readFile(index) // Asynchronous Operation <------------- IMPORTANT!!!
      }
    },
    loadFilesFromDialog(e) {
      console.log('loadFilesFromDialog-------------------------')
      const files = e.target.files
      for (let i = 0; i < files.length; i++) {
        DOCS.files.push(files[i])
        DOCS.urls.push(URL.createObjectURL(files[i])) // window.URL
        DOCS.base64Data.push(null) // or {}

        const fname =
          files[i].length > 0 ? files[i].name.substring(0, 20) : files[i].name
        this.$emit('loaded', fname) // <--------- send a msg
        console.log('EMIT: loaded from Dialog', fname)
      }
      this.refreshData()
    },
    loadFiles(e) {
      console.log('loadFiles (drop)!!')
      const files = e.dataTransfer.files
      for (let i = 0; i < files.length; i++) {
        DOCS.files.push(files[i])
        DOCS.urls.push(URL.createObjectURL(files[i])) // window.URL
        DOCS.base64Data.push(null) // or {}

        const fname =
          files[i].length > 0 ? files[i].name.substring(0, 20) : files[i].name
        this.$emit('loaded', fname) // <--------- send a msg
        console.log('EMIT: loaded files: ', fname)
      }
      this.refreshData()
    },
    clear() {
      const inputElement = this.$refs.fileinput
      inputElement.value = ''
      if (!/safari/i.test(navigator.userAgent)) {
        inputElement.type = ''
        inputElement.type = 'file'
      }
      this.$emit('value', false)
    },
  },
}
</script>

<style lang="scss" scopped>
.dropzone-wrapper {
  float: left;
  position: relative;
  width: 100%;
  height: 222px;
  padding-bottom: 60px;
  margin-top: 40px;
  clear: both;
  /*
  Issue: Stop working
  &:before {
    content: '';
    position: absolute;
    top: -3px;
    bottom: -3px;
    left: -3px;
    right: -3px;
  }
  */

  .dropzone {
    width: 100%;
    height: 222px;
    background-color: transparent !important;
    display: table;
    cursor: pointer;
    z-index: 10;

    .textnode {
      display: table-cell;
      text-align: center;
      vertical-align: middle;
    }
  }
}
.theme--dark {
  .dropzone-wrapper {
    border: 2px dashed $color-grey-tint-4;
    /*
      Issue: stops working
      &:before {
        border: 5px dashed $color-grey-tint-4;
      }
    */
  }
}
.theme--light {
  .dropzone-wrapper {
    border: 2px dashed $color-grey-tint-3;
    /*
      Issue: stops working
      &:before {
        border: 5px dashed $color-grey-tint-1;
      }
    */
  }
}
</style>
