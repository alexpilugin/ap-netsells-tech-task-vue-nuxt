import {
  TOGGLE_DARK_THEME,
  SET_THEME,
  SET_FIRST_NAME,
  SET_SECOND_NAME,
  SET_EMAIL,
  SET_PHONE_NUMBER,
  SET_LIVE_IN_UK,
  SET_GITHUB_LINK,
  SET_ABOUT_YOU,
} from './mutation-types.js'

const devMode = process.env.NODE_ENV === 'development'

const mutations = {
  [TOGGLE_DARK_THEME]: (state) => {
    state.isDarkTheme = !state.isDarkTheme
    if (devMode) {
      console.log(
        '[TOGGLE_DARK_THEME] mutation: darkTheme: ' + state.isDarkTheme
      )
    }
  },
  [SET_THEME]: (state, mode) => {
    state.isDarkTheme = mode
    if (devMode) {
      console.log('[SET_THEME] mutation: isDarkTheme: ' + state.isDarkTheme)
    }
  },
  [SET_FIRST_NAME]: (state, payload) => {
    state.formFields.first_name.value = payload
  },
  [SET_SECOND_NAME]: (state, payload) => {
    state.formFields.last_name.value = payload
  },
  [SET_EMAIL]: (state, payload) => {
    state.formFields.email.value = payload
  },
  [SET_PHONE_NUMBER]: (state, payload) => {
    state.formFields.phone_number.value = payload
  },
  [SET_LIVE_IN_UK]: (state, payload) => {
    state.formFields.live_in_uk.value = payload
  },
  [SET_GITHUB_LINK]: (state, payload) => {
    state.formFields.git_profile.value = payload
  },
  [SET_ABOUT_YOU]: (state, payload) => {
    state.formFields.about_you.value = payload
  },
}
export default mutations
