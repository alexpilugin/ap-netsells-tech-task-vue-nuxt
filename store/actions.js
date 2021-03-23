import * as EVENT from './mutation-types.js'
// import states from './states.js';
const devMode = process.env.NODE_ENV === 'development'

const actions = {
  toggleDarkTheme: ({ commit }) => {
    if (devMode) {
      console.log('Action: store/toggleDarkTheme')
    }
    commit(EVENT.TOGGLE_DARK_THEME, null)
  },
  setTheme: ({ commit }, mode) => {
    if (devMode) console.log('Action: store/setTheme')
    commit(EVENT.SET_THEME, mode)
  },
  setFirstName: ({ commit }, name) => {
    commit(EVENT.SET_FIRST_NAME, name)
  },
  setLastName: ({ commit }, name) => {
    commit(EVENT.SET_SECOND_NAME, name)
  },
  setEmail: ({ commit }, email) => {
    commit(EVENT.SET_EMAIL, email)
  },
  setPhoneNumber: ({ commit }, phone) => {
    commit(EVENT.SET_PHONE_NUMBER, phone)
  },
  setLiveUK: ({ commit }, phone) => {
    commit(EVENT.SET_LIVE_IN_UK, phone)
  },
  setGithub: ({ commit }, phone) => {
    commit(EVENT.SET_GITHUB_LINK, phone)
  },
  setAboutYou: ({ commit }, phone) => {
    commit(EVENT.SET_ABOUT_YOU, phone)
  },
}
export default actions
