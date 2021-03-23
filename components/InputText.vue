<template>
  <div class="input-text" :style="{ width: width + '%' }">
    <label class="input-text-label" :for="nameComputed">
      <span>{{ label }}</span>
      <span v-if="required" class="required">*</span>
    </label>
    <input
      v-if="!textarea"
      :id="nameComputed"
      type="text"
      class="entry"
      :style="{ height: height + 'px' }"
      :placeholder="placeholder"
      :name="nameComputed"
      :value="uppercase ? value.toUpperCase() : value"
      @input="$emit('input', $event.target.value)"
    />
    <!-- 
      I will not create a TextField Component intentially:
      Too much requirements to do for free.
      Please respect my time as well!
    -->
    <textarea
      v-else
      :id="nameComputed"
      rows="4"
      class="entry"
      :style="{ height: height + 'px' }"
      :placeholder="placeholder"
      :name="nameComputed"
      :value="uppercase ? value.toUpperCase() : value"
      @input="$emit('input', $event.target.value)"
    />
    <label v-show="!!errorMsg" class="error-msg">{{ errorMsg }}</label>
  </div>
</template>

<script>
export default {
  name: 'InputText',
  props: {
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: 'name',
    },
    required: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '100',
    },
    height: {
      type: String,
      default: '64',
    },
    placeholder: {
      type: String,
      default: '',
    },
    errorMsg: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    nameFilter: {
      type: Boolean,
      default: false,
    },
    uppercase: {
      type: Boolean,
      default: false,
    },
    textarea: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    nameComputed() {
      if (this.name === 'name' && this.placeholder) {
        return this.placeholder.replace(/ /g, '-')
      }
      return this.name
    },
  },
  watch: {
    value(newVal) {
      this.$emit('input', this.nameFilter ? this.filter(newVal) : newVal)
    },
  },
  methods: {
    filter(value) {
      return value.toString().replace(/[^a-z-'\s]/gi, '')
    },
  },
}
</script>

<style lang="scss" scoped>
.input-text {
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  font-family: $body-font-family;
  font-size: 1.2rem;
  background-color: transparent !important;

  textarea {
    resize: none;
  }

  &-label {
    margin: 0;
    padding: 10px 0;
    position: relative;
    font-size: 1.5rem;
  }
  .entry {
    padding: 1rem;
  }

  .required {
    position: absolute;
    top: 0px;
    font-size: 2rem;
    color: $color-brand-red;
    padding: 2px 5px;
  }
  .error-msg {
    color: $color-brand-red;
    width: 100%;
    text-align: left;
    margin: 5px 0;
    font-size: 1rem !important;
    padding: 0px !important;
  }
}
.theme--dark {
  .input-text {
    .entry {
      border: solid 2px $color-dark-input-border;
      color: $color-grey-tint-1;
    }
  }
}
.theme--light {
  .input-text {
    .entry {
      border: solid 2px $color-input-border;
      color: $color-dark-grey-tint-4;
    }
  }
}
</style>
