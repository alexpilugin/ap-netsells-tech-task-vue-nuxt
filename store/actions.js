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
}
export default actions
